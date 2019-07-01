using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using TodoModels;

namespace TodosApp.DataAccess
{
	public class TodoRepository : ITodoRepository
	{
		static string connectionString = "Data Source=EPINHYDW0284\\SQLEXPRESS;Initial Catalog=TodosDB;Integrated Security=true;";
		SqlConnection connection =  new SqlConnection(connectionString);

		public List<TodoModel> GetAllTodos()
		{
			List<TodoModel> outputList = new List<TodoModel>();
			DataTable todosDataTable = new DataTable();
			try
			{
				connection.Open();
				SqlCommand command = new SqlCommand("SELECT * FROM TODO;", connection);
				command.ExecuteNonQuery();

				SqlDataAdapter sqlDataAdapter = new SqlDataAdapter(command);
				sqlDataAdapter.Fill(todosDataTable);

				foreach (DataRow row in todosDataTable.Rows)
				{
					outputList.Add(new TodoModel()
					{
						Id = Convert.ToInt32(row["Id"]),
						Title = Convert.ToString(row["Title"]),
						isComplete = Convert.ToBoolean(row["isComplete"])
					});
				}
			}
			catch(Exception ex)
			{
				return null;
			}
			finally
			{
				connection.Close();
			}
			return outputList;
		}

		public TodoModel createTodo(TodoModel todoModel)
		{
			TodoModel outputTodoModel = new TodoModel();

			int numberOfRowsAffected = 0;
			try
			{
				connection.Open();
				SqlCommand command = new SqlCommand("INSERT INTO TODO (Id, Title, isComplete) VALUES (@Id, @Title, @isComplete);", connection);
				command.Parameters.Add("@Id", SqlDbType.Int).Value = todoModel.Id;
				command.Parameters.Add("@Title", SqlDbType.NVarChar).Value = todoModel.Title;
				command.Parameters.Add("@isComplete", SqlDbType.Bit).Value = todoModel.isComplete;
				numberOfRowsAffected = command.ExecuteNonQuery();
				if (numberOfRowsAffected == 1)
				{
					outputTodoModel = todoModel;
				}
			}
			catch(Exception e)
			{
				return outputTodoModel;
			}
			finally
			{
				connection.Close();
			}
			return outputTodoModel;

		}

		public TodoModel UpdateTodo(int Id, TodoModel todoModel)
		{
			TodoModel outputTodoModel = new TodoModel();

			int numberOfRowsAffected = 0;
			try
			{
				connection.Open();
				SqlCommand command = new SqlCommand("UPDATE TODO SET IsComplete = @isComplete where Id = @Id;", connection);
				command.Parameters.Add("@Id", SqlDbType.Int).Value = Id;
				command.Parameters.Add("@isComplete", SqlDbType.Bit).Value = todoModel.isComplete;
				numberOfRowsAffected = command.ExecuteNonQuery();
				if (numberOfRowsAffected == 1)
				{
					outputTodoModel = todoModel;
				}
			}
			catch (Exception e)
			{
				return outputTodoModel;
			}
			finally
			{
				connection.Close();
			}
			return outputTodoModel;

		}

		public int DeleteTodo(int Id)
		{
			TodoModel outputTodoModel = new TodoModel();

			int numberOfRowsAffected = 0;
			try
			{
				connection.Open();
				SqlCommand command = new SqlCommand("DELETE FROM TODO WHERE Id= @Id;", connection);
				command.Parameters.Add("@Id", SqlDbType.Int).Value = Id;
				numberOfRowsAffected = command.ExecuteNonQuery();
			}
			catch (Exception e)
			{
				return numberOfRowsAffected;
			}
			finally
			{
				connection.Close();
			}
			return numberOfRowsAffected;
		}
	}
}
