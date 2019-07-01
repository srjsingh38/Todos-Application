export class Todo {
    Id: number;
    Title: string = '';
    isComplete: boolean = false;
    test: number;

    constructor(values: Object = {}) {
        Object.assign(this,values);
    }
}
