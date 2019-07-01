import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  @Input()
  todos: Todo[];

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Todo> = new EventEmitter();

  @Output()
  testMethod: EventEmitter<number> = new EventEmitter();

  constructor() {

  }

  onTestMethodClick(){
    this.testMethod.emit(2);
  }

  // onToggleTodoComplete(todo: Todo) {
  //   this.toggleComplete.emit(todo);
  // }

  onToggleTodoComplete(p){
    this.toggleComplete.emit(p);
  }

  onRemoveTodo(todo: Todo) {
    this.remove.emit(todo);
  }

}
