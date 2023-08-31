
namespace Models
{
    public class Utilisateur
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string NomUtilisateur { get; set; }
        public string Password { get; set; }
        public bool IsAdmin { get; set; } = false;
    }
}