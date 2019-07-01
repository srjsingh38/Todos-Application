import { Todo } from './todo';

describe('Todo', () => {
  
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let todo = new Todo({
      Title: 'hello',
      isComplete: true
    });
    expect(todo.Title).toEqual('hello');
    expect(todo.isComplete).toEqual(true);
  });
});
