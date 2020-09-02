
import {Component} from "./base-component";
import {Autobind} from "../decorators/autobine";
import {Project} from "../models/project";
import {Draggable} from "../models/drag-drop";


export class ProjectItem extends Component<HTMLUListElement, HTMLLIElement> implements Draggable{
    project: Project;

    get itemsValue(){
        let prase = '';
        prase =  this.project.item !== 1 ? ' items' : ' item'
        return this.project.item.toString() + prase;
    }

    constructor(conteinerId: string, project: Project){
        super('single-project', conteinerId, 'beforeend', project.id);
        this.project = project;
        this.configure();
        this.renderContent();
    }

    @Autobind
    dragStartHandler(event: DragEvent){
        event.dataTransfer!.setData('text/plain', this.project.id);
        event.dataTransfer!.effectAllowed = 'move';
    }

    dargEndHandler(_event: DragEvent){
        console.log('Drag End')
    };

    configure(){
        this.element.addEventListener('dragstart', this.dragStartHandler);
        this.element.addEventListener('dragend', this.dargEndHandler)
    };

    renderContent(){
        const itemTitleEl = this.element.querySelector('h2') as HTMLHeadingElement;
        const itemSubTitleEl = this.element.querySelector('h3') as HTMLHeadingElement;
        const itemParagraphEl = this.element.querySelector('p') as HTMLParagraphElement;
        itemTitleEl.innerText = this.project.title;
        itemSubTitleEl.innerText = this.itemsValue;
        itemParagraphEl.innerText = this.project.description;
    };
}