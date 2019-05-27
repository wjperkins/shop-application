using System.Collections.Generic;
using System.Threading.Tasks;
using DataAccess;
using Domain.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly DatabaseContext databaseContext;

        public ProductsController(DatabaseContext databaseContext)
        {
            this.databaseContext = databaseContext;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetAsync()
        {
            return await databaseContext.Products?.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetAsync(int id)
        {
            return await databaseContext.Products.FirstOrDefaultAsync(p => p.Id == id);
        }

        [HttpPost]
        public async Task PostAsync([FromBody] Product product)
        {
            databaseContext.Products.Add(product);
            await databaseContext.SaveChangesAsync();
        }

        [HttpPut("{id}")]
        public async Task PutAsync(int id, [FromBody] Product product)
        {
            var existing = await databaseContext.Products.FirstOrDefaultAsync(p => p.Id == id);
            existing = product;
            await databaseContext.SaveChangesAsync();
        }

        [HttpDelete("{id}")]
        public async Task DeleteAsync(int id)
        {
            var toDelete = await databaseContext.Products.FirstOrDefaultAsync(p => p.Id == id);
            databaseContext.Products.Remove(toDelete);
            await databaseContext.SaveChangesAsync();
        }
    }
}
