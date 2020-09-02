// Drag and drop Interfaces

export interface Draggable{
    dragStartHandler(event: DragEvent): void,
    dargEndHandler(event: DragEvent): void
}

export interface DragTarget{
    dragOverHandler(event: DragEvent): void,
    dropHandler(event: DragEvent): void,
    dargLeaveHandler(event: DragEvent): void,
}

