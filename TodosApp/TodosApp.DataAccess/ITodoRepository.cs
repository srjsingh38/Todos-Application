using System;
using System.Collections.Generic;
using System.Text;
using TodoModels;

namespace TodosApp.DataAccess
{
	public interface ITodoRepository
	{
		TodoModel createTodo(TodoModel todoModel);
		TodoModel UpdateTodo(int Id, TodoModel todoModel);
		List<TodoModel> GetAllTodos();
		int DeleteTodo(int id);
	}
}
