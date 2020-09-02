//Project type

export enum ProjectsStatus{Active, Finished}

export class Project{
    constructor(public id: string, public title: string, public description: string, public item: number, public status: ProjectsStatus){
    
    }
}
