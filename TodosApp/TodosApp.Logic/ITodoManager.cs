using System;
using System.Collections.Generic;
using System.Text;
using TodoModels;

namespace TodosApp.Logic
{
	public interface ITodoManager
	{
		TodoModel CreateATodo(TodoModel todoModel);
		TodoModel EditATodo(string Id, TodoModel todoModel);
		List<TodoModel> BringAllTodos();
		int RemoveATodo(string id);
	}
}
