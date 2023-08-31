using Microsoft.EntityFrameworkCore;

namespace Models
{
    public class DataContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source =sqlite.db");
        }
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        public DataContext() : base()
        {
        }

        public DbSet<Exercice> Exercices => Set<Exercice>();
        public DbSet<ExerciceDetails> ExercicesDetails => Set<ExerciceDetails>();
        public DbSet<ExerciceEtapes> ExercicesEtapes => Set<ExerciceEtapes>();
        public DbSet<Categorie> Categories => Set<Categorie>();
        public DbSet<Utilisateur> Utilisateurs => Set<Utilisateur>();
    }
}