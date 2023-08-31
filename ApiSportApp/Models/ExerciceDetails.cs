
using System.ComponentModel.DataAnnotations.Schema;

namespace Models
{
    public class ExerciceDetails
    {
        public int Id { get; set; }

        public string? ImageConseil { get; set; }
        public string? TextConseil { get; set; }
        
        public int? ExerciceId { get; set; }

        [ForeignKey("ExerciceId")]
        public virtual Exercice? Exercice { get; set; }
    }
}
