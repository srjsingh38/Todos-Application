export class Todo {
    Id: string;
    Title: string = '';
    isComplete: boolean = false;
    test: number;

    constructor(values: Object = {}) {
        Object.assign(this,values);
    }
}
