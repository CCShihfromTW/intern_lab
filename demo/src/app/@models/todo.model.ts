export interface Todo {
    status: boolean;
    thing: string;
    editing: boolean;
    todoId: string;
    CanEdit: boolean;
    Seqno: number;
    createTime: Date;
}

export class TodoClass implements Todo {
    status: boolean;
    thing: string;
    editing: boolean;
    todoId: string;
    CanEdit: boolean;
    Seqno: number;
    createTime: Date;

    constructor(_thing: string, _status: boolean = false, _seqno: number) {
        this.thing = _thing;
        this.status = _status;
        this.editing = false;
        this.todoId = '';
        this.CanEdit = false;
        this.Seqno = _seqno;
        this.createTime = new Date();
    }

    toggle() {
        this.status = !this.status;
    }
}


export enum TodoStatusType {
    All,
    Active,
    Completed
}