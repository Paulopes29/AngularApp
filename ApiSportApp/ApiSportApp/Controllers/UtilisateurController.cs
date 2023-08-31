using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models;
using System.Linq;

namespace WebApiEntityFramwork.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UtilisateurController : ControllerBase
    {
        private readonly DataContext _context;

        public UtilisateurController(DataContext context)
        {
            this._context = context;
        }
        [Route("[action]")]
        [HttpPost]
        public async Task<ActionResult<Utilisateur>> AddUtilisateur(Utilisateur utilisateur)
        {
            _context.Utilisateurs.Add(utilisateur);
            await _context.SaveChangesAsync();

            return Ok(utilisateur);
        }
        [Route("[action]")]
        [HttpGet]
        public async Task<ActionResult<List<Utilisateur>>> GetUtilisateurs()
        {
            return Ok(await _context.Utilisateurs.ToListAsync());
        }

        [Route("[action]")]
        [HttpPost]
        public async Task<ActionResult<Utilisateur>> GetUtilisateur(Utilisateur utilisateur)
        {
            return Ok(await _context.Utilisateurs.Where(x => (x.NomUtilisateur == utilisateur.NomUtilisateur || x.Email == utilisateur.Email ) && x.Password == utilisateur.Password).FirstOrDefaultAsync());
        }
    }
}
