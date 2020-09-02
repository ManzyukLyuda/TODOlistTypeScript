
import {Component} from "./base-component";
import {validation, validationConfig} from "../util/validation";
import {Autobind} from "../decorators/autobine";
import {projectState} from "../state/project-state";

// project submitting class
export class ProjectInput extends Component <HTMLDivElement, HTMLFormElement>{
        titleInputEl: HTMLInputElement;
        descriptionInputEl: HTMLTextAreaElement;
        itemInputEl: HTMLInputElement;

        constructor(){
            super('project-input', 'app', 'afterbegin','user-input');

            this.titleInputEl = this.element.querySelector('#title') as HTMLInputElement; 
            this.descriptionInputEl = this.element.querySelector('#description') as HTMLTextAreaElement; 
            this.itemInputEl = this.element.querySelector('#item') as HTMLInputElement; 

            this.configure();
            
        }


        geatherUserInput(): [string, string, number] | void{
            const title = this.titleInputEl.value;
            const description = this.descriptionInputEl.value;
            const people = this.itemInputEl.value;

            const titleValidatebleInput: validationConfig = {
                value: title,
                required: true
            }
            const descriptionValidatebleInput: validationConfig = {
                value: description,
                required: true,
                minLength: 5
            }
            const peopleValidatebleInput: validationConfig = {
                value: people,
                required: true,
                min: 1,
                max: 10
            }

            if(!validation(titleValidatebleInput) || !validation(descriptionValidatebleInput) || !validation(peopleValidatebleInput)){
                alert('invalid input');
                return;
            }
            else{
                return [title, description, +people];
            }
        }

        configure(){
            this.element.addEventListener('submit', this.submitHandler)
        }

        renderContent(){};

        private clearInputfild(){
            this.titleInputEl.value = '';
            this.descriptionInputEl.value = '';
            this.itemInputEl.value = '';
        }

        @Autobind
        private submitHandler(event: Event){
            event.preventDefault();
            const userInputInf = this.geatherUserInput();

            if (Array.isArray(userInputInf)){
                let [title, description, people] = userInputInf;
                projectState.addProject(title, description, people);
                this.clearInputfild();
            }
        }


    }