using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Models.Migrations
{
    /// <inheritdoc />
    public partial class AjoutEtapesDetails : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ExercicesDetails",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    ImageConseil = table.Column<string>(type: "TEXT", nullable: true),
                    TextConseil = table.Column<string>(type: "TEXT", nullable: true),
                    ExerciceId = table.Column<int>(type: "INTEGER", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ExercicesDetails", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ExercicesDetails_Exercices_ExerciceId",
                        column: x => x.ExerciceId,
                        principalTable: "Exercices",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "ExercicesEtapes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Etape = table.Column<string>(type: "TEXT", nullable: true),
                    Ordre = table.Column<int>(type: "INTEGER", nullable: false),
                    ExerciceId = table.Column<int>(type: "INTEGER", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ExercicesEtapes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ExercicesEtapes_Exercices_ExerciceId",
                        column: x => x.ExerciceId,
                        principalTable: "Exercices",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_ExercicesDetails_ExerciceId",
                table: "ExercicesDetails",
                column: "ExerciceId");

            migrationBuilder.CreateIndex(
                name: "IX_ExercicesEtapes_ExerciceId",
                table: "ExercicesEtapes",
                column: "ExerciceId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ExercicesDetails");

            migrationBuilder.DropTable(
                name: "ExercicesEtapes");
        }
    }
}
