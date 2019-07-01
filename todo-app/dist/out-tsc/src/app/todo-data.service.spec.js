import { TestBed, inject } from '@angular/core/testing';
import { TodoDataService } from './todo-data.service';
import { Todo } from './todo';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
describe('AppComponent', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            imports: [
                FormsModule
            ],
            declarations: [
                AppComponent
            ],
        });
    });
    it('should be created', function () {
        var service = TestBed.get(TodoDataService);
        expect(service).toBeTruthy();
    });
    describe('#getAllTodos()', function () {
        it('should return an empty array by default', inject([TodoDataService], function (service) {
            expect(service.getAllTodos()).toEqual([]);
        }));
        it('should return all the todos', inject([TodoDataService], function (service) {
            var todo1 = new Todo({ title: 'Hello 1', complete: false });
            var todo2 = new Todo({ title: 'Hello 2', complete: true });
            service.addTodo(todo1);
            service.addTodo(todo2);
            expect(service.getAllTodos()).toEqual([todo1, todo2]);
        }));
    });
    describe('#save(todo)', function () {
        it('should automatically assign an incrementing id', inject([TodoDataService], function (service) {
            var todo1 = new Todo({ title: 'Hello 1', complete: false });
            var todo2 = new Todo({ title: 'Hello 2', complete: true });
            service.addTodo(todo1);
            service.addTodo(todo2);
            expect(service.getTodoById(1)).toEqual(todo1);
            expect(service.getTodoById(2)).toEqual(todo2);
        }));
    });
    describe('#deleteTodoById(id)', function () {
        it('should remove todo with the corresponding id', inject([TodoDataService], function (service) {
            var todo1 = new Todo({ title: 'Hello 1', complete: false });
            var todo2 = new Todo({ title: 'Hello 2', complete: true });
            service.addTodo(todo1);
            service.addTodo(todo2);
            expect(service.getAllTodos()).toEqual([todo1, todo2]);
            service.deleteTodoById(1);
            expect(service.getAllTodos()).toEqual([todo2]);
            service.deleteTodoById(2);
            expect(service.getAllTodos()).toEqual([]);
        }));
        it('should not remove anything if the corresponding id is not found', inject([TodoDataService], function (service) {
            var todo1 = new Todo({ title: 'Hello 1', complete: false });
            var todo2 = new Todo({ title: 'Hello 2', complete: true });
            service.addTodo(todo1);
            service.addTodo(todo2);
            expect(service.getAllTodos()).toEqual([todo1, todo2]);
            service.deleteTodoById(3);
            expect(service.getAllTodos()).toEqual([todo1, todo2]);
        }));
    });
    describe('#toggleTodoComplete(todo)', function () {
        it('should return the updated todo with inverse complete status', inject([TodoDataService], function (service) {
            var todo = new Todo({ title: 'Hello 1', complete: false });
            service.addTodo(todo);
            var updatedTodo = service.toggleTodoComplete(todo);
            expect(updatedTodo.complete).toEqual(true);
            service.toggleTodoComplete(todo);
            expect(updatedTodo.complete).toEqual(false);
        }));
    });
});
//# sourceMappingURL=todo-data.service.spec.js.map