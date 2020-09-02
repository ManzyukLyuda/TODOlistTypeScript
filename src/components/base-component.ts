 //Component base class

export abstract class Component <T extends HTMLElement, U extends HTMLElement>{
    tamplateElement: HTMLTemplateElement;
    conteiner: T;
    element: U;

    constructor(tamplateElementId: string, conteinerId: string, insertPlace: 'afterbegin' | 'beforeend', newElementId?: string){
            this.tamplateElement = document.getElementById(tamplateElementId) as HTMLTemplateElement;
            this.conteiner = document.getElementById(conteinerId) as T;
            const inportedNode = document.importNode(this.tamplateElement.content, true);
            this.element = inportedNode.firstElementChild as U;
            if(newElementId) this.element.id = newElementId;
            this.attach(insertPlace);
        
        }
    
    private attach(insertPlace: 'afterbegin' | 'beforeend'){
        this.conteiner.insertAdjacentElement(insertPlace, this.element)
    }

    abstract configure(): void;
    abstract renderContent(): void;

}
