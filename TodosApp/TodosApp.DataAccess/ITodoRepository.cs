using System;
using System.Collections.Generic;
using System.Text;
using TodoModels;

namespace TodosApp.DataAccess
{
	public interface ITodoRepository
	{
		TodoModel CreateTodo(TodoModel todoModel);
		TodoModel UpdateTodo(string Id, TodoModel todoModel);
		List<TodoModel> GetAllTodos();
		int DeleteTodo(string id);
	}
}
