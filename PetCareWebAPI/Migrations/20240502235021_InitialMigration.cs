using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PetCareWebAPI.Migrations
{
    /// <inheritdoc />
    public partial class InitialMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Appointments",
                columns: table => new
                {
                    IDAppointment = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AppointmentDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    IdAdopter = table.Column<int>(type: "int", nullable: false),
                    IdPsicho = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Appointments", x => x.IDAppointment);
                });

            migrationBuilder.CreateTable(
                name: "Persons",
                columns: table => new
                {
                    Identification = table.Column<int>(type: "int", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    Lastname = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    Cellphone = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    Address = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: true),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Borndate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Discriminator = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Ocupation = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    HouseType = table.Column<int>(type: "int", nullable: true),
                    MoneyIncome = table.Column<double>(type: "float", nullable: true),
                    ProfessionalCard = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AgeExperiencie = table.Column<int>(type: "int", nullable: true),
                    Specialization = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Vet_AgeExperiencie = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Persons", x => x.Identification);
                });

            migrationBuilder.CreateTable(
                name: "Pets",
                columns: table => new
                {
                    IdPet = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    Age = table.Column<int>(type: "int", nullable: false),
                    Color = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Race = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Weight = table.Column<double>(type: "float", maxLength: 20, nullable: false),
                    Height = table.Column<double>(type: "float", maxLength: 20, nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    genero = table.Column<int>(type: "int", nullable: false),
                    Status = table.Column<int>(type: "int", nullable: false),
                    IdMedicalRecord = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pets", x => x.IdPet);
                });

            migrationBuilder.CreateTable(
                name: "MedicalRecords",
                columns: table => new
                {
                    IdMedicalRe = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CreateDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdateDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    VetIdentification = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MedicalRecords", x => x.IdMedicalRe);
                    table.ForeignKey(
                        name: "FK_MedicalRecords_Persons_VetIdentification",
                        column: x => x.VetIdentification,
                        principalTable: "Persons",
                        principalColumn: "Identification");
                });

            migrationBuilder.CreateTable(
                name: "AdoptionForms",
                columns: table => new
                {
                    IdForm = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CreateDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    AdopterIdentification = table.Column<int>(type: "int", nullable: true),
                    PetIdPet = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AdoptionForms", x => x.IdForm);
                    table.ForeignKey(
                        name: "FK_AdoptionForms_Persons_AdopterIdentification",
                        column: x => x.AdopterIdentification,
                        principalTable: "Persons",
                        principalColumn: "Identification");
                    table.ForeignKey(
                        name: "FK_AdoptionForms_Pets_PetIdPet",
                        column: x => x.PetIdPet,
                        principalTable: "Pets",
                        principalColumn: "IdPet");
                });

            migrationBuilder.CreateIndex(
                name: "IX_AdoptionForms_AdopterIdentification",
                table: "AdoptionForms",
                column: "AdopterIdentification");

            migrationBuilder.CreateIndex(
                name: "IX_AdoptionForms_IdForm",
                table: "AdoptionForms",
                column: "IdForm",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_AdoptionForms_PetIdPet",
                table: "AdoptionForms",
                column: "PetIdPet");

            migrationBuilder.CreateIndex(
                name: "IX_Appointments_IDAppointment",
                table: "Appointments",
                column: "IDAppointment",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_MedicalRecords_IdMedicalRe",
                table: "MedicalRecords",
                column: "IdMedicalRe",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_MedicalRecords_VetIdentification",
                table: "MedicalRecords",
                column: "VetIdentification");

            migrationBuilder.CreateIndex(
                name: "IX_Persons_Identification",
                table: "Persons",
                column: "Identification",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Pets_IdPet",
                table: "Pets",
                column: "IdPet",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AdoptionForms");

            migrationBuilder.DropTable(
                name: "Appointments");

            migrationBuilder.DropTable(
                name: "MedicalRecords");

            migrationBuilder.DropTable(
                name: "Pets");

            migrationBuilder.DropTable(
                name: "Persons");
        }
    }
}
