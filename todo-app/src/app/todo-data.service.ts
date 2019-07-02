import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { UUID } from 'angular2-uuid';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  lastId: string = null;

  todos: Todo[] = [];

  constructor(
    private api: ApiService
  ) { }

  //Simulate the POST /todos
  addTodo(todo: Todo): Observable<Todo> {
    if (!todo.Id) {
      todo.Id = UUID.UUID();
    }
    return this.api.createTodo(todo);

  }

  //Simulate DELETE /todos/:id
  deleteTodoById(id: string): Observable<Todo> {
    return this.api.deleteTodoById(id);
  }

  //Simulate PUT /todos/:id
  updateTodoById(todo: Todo): Observable<Todo> {
    return this.api.updateTodo(todo);
  }

  //Simulate GET /todos
  getAllTodos(): Observable<Todo[]> {
    return this.api.getAllTodos();
  }

  //Simulate GET /todos/:id
  getTodoById(id: string): Observable<Todo> {
    return this.api.getTodoById(id);
  }

  //Toggle todo Complete
  toggleTodoComplete(todo: Todo){
    todo.isComplete = !todo.isComplete;
    return this.api.updateTodo(todo);
  }
} 
