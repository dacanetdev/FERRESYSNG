using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using DeventSoft.FERRESYS.DAL.Models;
using DeventSoft.FERRESYS.Domain;

namespace FERRESYSNG.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ProductController : ApiController
    {
        private IProductsManager _productsManager;

        public ProductController(IProductsManager productsManager)
        {
            this._productsManager = productsManager;
        }

        // GET api/<controller>
        public IEnumerable<object> Get()
        {
            var productos = _productsManager.GetProductos();

            return productos.OrderBy(p => p.ProductoId).Select(p => new
            {
               p.ProductoId,
               p.Clave,
               p.Descripcion,
               p.FamiliaId,
               Familia = p.Familia == null ? "" : p.Familia.Descripcion 
            }
           );
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}