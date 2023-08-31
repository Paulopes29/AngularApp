
using System.ComponentModel.DataAnnotations.Schema;

namespace Models
{
    public class ExerciceEtapes
    {
        public int Id { get; set; }

        public string? Etape { get; set; }
        public int Ordre { get; set; }
        
        public int? ExerciceId { get; set; }

        [ForeignKey("ExerciceId")]
        public virtual Exercice? Exercice { get; set; }
    }
}
