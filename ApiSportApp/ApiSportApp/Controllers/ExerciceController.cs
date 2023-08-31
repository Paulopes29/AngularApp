using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models;

namespace WebApiEntityFramwork.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExerciceController : ControllerBase
    {
        private readonly DataContext _context;

        public ExerciceController(DataContext context)
        {
            this._context = context;
        }
        [Route("[action]")]
        [HttpPost]
        public async Task<ActionResult<Exercice>> AddExercice(Exercice exercice)
        {
            _context.Exercices.Add(exercice);
            await _context.SaveChangesAsync();

            return Ok(exercice);
        }
        [Route("[action]")]
        [HttpGet]
        public async Task<ActionResult<List<Exercice>>> GetExercices()
        {
            return Ok(await _context.Exercices.ToListAsync());
        }
        
        [Route("[action]/{id}")]
        [HttpGet]
        public async Task<ActionResult<Exercice>> GetExerciceById(int id)
        {
            var categorie = await _context.Exercices.FindAsync(id);

            if (categorie == null)
            {
                return BadRequest("exercice not found");
            }

            return Ok(categorie);
        }
        [Route("[action]")]
        [HttpPut]
        public async Task<ActionResult<Exercice>> UpdateExercice(Exercice exercice)
        {
            _context.Exercices.Remove(await _context.Exercices.FindAsync(exercice.Id));
            _context.Exercices.Add(exercice);
            await _context.SaveChangesAsync();

            return Ok(exercice);
        }

        [Route("[action]/{Categorie}")]
        [HttpGet]
        public async Task<ActionResult<List<Exercice>>> GetExercicesByCategorie(string Categorie)
        {
            return Ok(await _context.Exercices.Where(x => x.SubTitle == Categorie).ToListAsync());
        }


        [Route("[action]")]
        [HttpPost]
        public async Task<ActionResult<ExerciceEtapes>> AddEtape(ExerciceEtapes etape)
        {
            _context.ExercicesEtapes.Add(etape);
            await _context.SaveChangesAsync();

            return Ok(etape);
        }

        [Route("[action]/{exerciceId}")]
        [HttpGet]
        public async Task<ActionResult<List<Exercice>>> GetEtapesByExerciceId(int exerciceId)
        {
            var etapes  = new List<ExerciceEtapes>();
            foreach(var etape in await _context.ExercicesEtapes.Where(x => x.ExerciceId == exerciceId).ToListAsync())
            {
                etape.Exercice = _context.Exercices.Find(exerciceId);
                etapes.Add(etape);
            }

            return Ok(etapes);
        }
    }
}
