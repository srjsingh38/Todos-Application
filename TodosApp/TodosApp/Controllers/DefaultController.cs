using System.Web.Http;
using TodoModels;
using TodosApp.DataAccess;

namespace TodosApp.Controllers
{
	public class DefaultController : ApiController
    {
		TodoRepository repository;
		public DefaultController()
		{
			repository = new TodoRepository();
		}

		// GET: api/Default
		public IHttpActionResult Get()
        {
			return Ok(repository.GetAllTodos());
        }

        // POST: api/Default
        public IHttpActionResult Post([FromBody]TodoModel todoValue)
        {
			return Ok(repository.createTodo(todoValue));
		}

		// PUT: api/Default/5
		public IHttpActionResult Put(string id, [FromBody]TodoModel todoValue)
        {
			return Ok(repository.UpdateTodo(id, todoValue));
		}

        // DELETE: api/Default/5
        public IHttpActionResult Delete(string id)
        {
			return Ok(repository.DeleteTodo(id));
		}
	}
}
