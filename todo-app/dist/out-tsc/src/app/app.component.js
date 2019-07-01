import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { TodoDataService } from './todo-data.service';
import { Todo } from './todo';
var AppComponent = /** @class */ (function () {
    function AppComponent(todoDataService) {
        this.todoDataService = todoDataService;
        this.title = 'todo-app';
        this.newTodo = new Todo();
    }
    AppComponent.prototype.addTodo = function () {
        this.todoDataService.addTodo(this.newTodo);
        this.newTodo = new Todo();
    };
    AppComponent.prototype.toggleTodoComplete = function (todo) {
        this.todoDataService.toggleTodoComplete(todo);
    };
    AppComponent.prototype.removeTodo = function (todo) {
        this.todoDataService.deleteTodoById(todo.id);
    };
    AppComponent.prototype.getTodos = function () {
        return this.todoDataService.getAllTodos();
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css'],
            providers: [TodoDataService]
        }),
        tslib_1.__metadata("design:paramtypes", [TodoDataService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map