

import {Component} from "./base-component";
import {Autobind} from "../decorators/autobine";
import {projectState} from "../state/project-state";
import {Project, ProjectsStatus} from "../models/project";
import {DragTarget} from "../models/drag-drop";
import {ProjectItem} from "./project-item";


//ProjectList class
    export class ProjectList extends Component<HTMLDivElement, HTMLElement> implements DragTarget{
        assignedProjects!: Project[];

        constructor(private type: 'active' | 'finished'){
            super('project-list', 'app', 'beforeend',`${type}-projects`);
            
            this.configure();
            this.renderContent();
        }

        @Autobind
        dragOverHandler(event: DragEvent){
            if(event.dataTransfer && event.dataTransfer.types[0] === 'text/plain'){
                event.preventDefault();
                const ulEl = this.element.querySelector('ul') as HTMLUListElement;
                ulEl.classList.add('droppable')
            }
        }

        @Autobind
        dropHandler(event: DragEvent){
            const projectId = event.dataTransfer!.getData('text/plain');
            const newType = this.type === 'active' ? ProjectsStatus.Active : ProjectsStatus.Finished;
            projectState.editProject(projectId, newType);
        }

        @Autobind
        dargLeaveHandler(_event: DragEvent){
            const ulEl = this.element.querySelector('ul') as HTMLUListElement;
            ulEl.classList.remove('droppable')
        }

        configure(){
            projectState.addListener((projects: Project[])=>{
                const relevantProjects = projects.filter(project => {
                    if(this.type === 'active'){
                        return project.status === ProjectsStatus.Active;
                    }
                    else{
                        return project.status === ProjectsStatus.Finished;
                    }
                    
                });
                this.assignedProjects = relevantProjects;
                this.renderProject();
            });
            this.element.addEventListener('dragover', this.dragOverHandler);
            this.element.addEventListener('dragleave', this.dargLeaveHandler);
            this.element.addEventListener('drop', this.dropHandler);
        };

        renderContent(){
            const titleEl = this.element.querySelector('h2') as HTMLHeadingElement;
            const listEl = this.element.querySelector('ul') as HTMLUListElement;
            titleEl.textContent = this.type === 'active' ? 'Need to buy' : 'Already bought';
            listEl.id=`${this.type}-project-list`;
        }


        private renderProject(){
            const listEl = document.getElementById(`${this.type}-project-list`) as HTMLUListElement;
            listEl.innerHTML = '';
            for(const projectItem of this.assignedProjects){
                new ProjectItem(listEl.id, projectItem);
            }
        }
    
    }