using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models;

namespace WebApiEntityFramwork.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategorieController : ControllerBase
    {
        private readonly DataContext _context;

        public CategorieController(DataContext context)
        {
            this._context = context;
        }
        [Route("[action]")]
        [HttpPost]
        public async Task<ActionResult<Categorie>> AddCategorie(string Categorie)
        {
            var categ = new Categorie();
            categ.Libelle = Categorie;
            _context.Categories.Add(categ);
            await _context.SaveChangesAsync();

            return Ok(categ);
        }
        [Route("[action]")]
        [HttpGet]
        public async Task<ActionResult<List<Categorie>>> GetCategories()
        {
            return Ok(await _context.Categories.ToListAsync());
        }

       

    }
}
