import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  lastId: number = 0;

  todos: Todo[] = [];

  constructor(
    private api: ApiService
  ) { }

  //Simulate the POST /todos
  addTodo(todo: Todo): Observable<Todo> {
    if (!todo.Id) {
      todo.Id = ++this.lastId;
    }
    return this.api.createTodo(todo);

  }

  //Simulate DELETE /todos/:id
  deleteTodoById(id: number): Observable<Todo> {
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
  getTodoById(id: number): Observable<Todo> {
    return this.api.getTodoById(id);
  }

  //Toggle todo Complete
  toggleTodoComplete(todo: Todo){
    todo.isComplete = !todo.isComplete;
    return this.api.updateTodo(todo);
  }
} 
