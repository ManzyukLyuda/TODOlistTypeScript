//Progect State Manegment Class
import {Project, ProjectsStatus} from "../models/project";

    class State<T>{
        protected listeners: Listener<T>[] = [];
    
        addListener(listenerFn: Listener<T>){
            this.listeners.push(listenerFn);
        }
    
    }
    
    type Listener<T> = (items: T[]) => void;

    
    export class ProjectState extends State<Project>{
        private projects: Project[] = [];
        private static instance: ProjectState;
    
        constructor(){
            super();
    
        }
    
        static getInstance(){
            if(this.instance){
                return this.instance;
            }
            this.instance = new ProjectState();
            return this.instance;
        }
    
        addProject(title: string, description: string, item: number){
            // let newPrInfoject = new Project(title, description, people, false);
            const newProject = new Project(Math.random().toString(), title, description, item, ProjectsStatus.Active);
    
    
            this.projects.push(newProject);
            this.updateListeners()
        }
    
        editProject(id: string, newType: ProjectsStatus){
            const project = this.projects.find(project => project.id === id)
            if(project && project.status !== newType){
                project.status = newType;
                this.updateListeners();
            }
            
        }
    
        private updateListeners(){
            for(const listenerFn of this.listeners){
                listenerFn(this.projects.slice());
            }
        }
    }
    
    export const projectState = ProjectState.getInstance();
