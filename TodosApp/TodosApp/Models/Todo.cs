using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TodosApp.Models
{
	public class Todo
	{
		public int Id { get; set; }
		public string Title { get; set; }
		public bool Complete { get; set; }
	}
}