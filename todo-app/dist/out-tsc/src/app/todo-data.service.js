import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var TodoDataService = /** @class */ (function () {
    function TodoDataService() {
        this.lastId = 0;
        this.todos = [];
    }
    //Simulate the POST /todos
    TodoDataService.prototype.addTodo = function (todo) {
        if (!todo.id) {
            todo.id = ++this.lastId;
        }
        this.todos.push(todo);
        return this;
    };
    //Simulate DELETE /todos/:id
    TodoDataService.prototype.deleteTodoById = function (id) {
        this.todos = this.todos.filter(function (todo) { return todo.id !== id; });
        return this;
    };
    //Simulate PUT /todos/:id
    TodoDataService.prototype.updateTodoById = function (id, values) {
        if (values === void 0) { values = {}; }
        var todo = this.getTodoById(id);
        if (!todo) {
            return null;
        }
        Object.assign(todo, values);
        return todo;
    };
    //Simulate GET /todos
    TodoDataService.prototype.getAllTodos = function () {
        return this.todos;
    };
    //Simulate GET /todos/:id
    TodoDataService.prototype.getTodoById = function (id) {
        return this.todos
            .filter(function (todo) { return todo.id === id; })
            .pop();
    };
    //Toggle todo Complete
    TodoDataService.prototype.toggleTodoComplete = function (todo) {
        var updatedTodo = this.updateTodoById(todo.id, {
            complete: !todo.complete
        });
        return updatedTodo;
    };
    TodoDataService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], TodoDataService);
    return TodoDataService;
}());
export { TodoDataService };
//# sourceMappingURL=todo-data.service.js.map