using System;
namespace TodosApp.BModel
{
	using System.Collections.Generic;
	using TodoModels;
    using TodosApp.DataAccess;
    using TodosApp.Logic;

	public class TodoManager : ITodoManager
	{
		private ITodoRepository todoRepository;
		public TodoManager()
		{
			todoRepository = new TodoRepository(); ;
		}

		public List<TodoModel> BringAllTodos()
		{
			return todoRepository.GetAllTodos();
		}

		public TodoModel CreateATodo(TodoModel todoModel)
		{
			return todoRepository.CreateTodo(todoModel);
		}

		public TodoModel EditATodo(string Id, TodoModel todoModel)
		{
			return todoRepository.UpdateTodo(Id, todoModel);
		}

		public int RemoveATodo(string id)
		{
			return todoRepository.DeleteTodo(id);
		}
	}
}
