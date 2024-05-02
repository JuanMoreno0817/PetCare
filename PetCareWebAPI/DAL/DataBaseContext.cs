using Microsoft.EntityFrameworkCore;
using PetCareWebAPI.DAL.Entities;
using System.Diagnostics.Metrics;


namespace PetCareWebAPI.DAL
{
    public class DataBaseContext : DbContext
    {
        public DataBaseContext(DbContextOptions<DataBaseContext> options) : base(options) { }

        public DbSet<Person> Persons { get; set; }
        public DbSet<Adopter> Adopters { get; set; }
        public DbSet<Pet> Pets { get; set; }
        public DbSet<Vet> Vets { get; set; }
        public DbSet<Appointment> Appointments { get; set; }
        public DbSet<Psichologist> Psichologists { get; set; }
        public DbSet<MedicalRecord> MedicalRecords { get; set; }
        public DbSet<AdoptionForm> AdoptionForms { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Person>().HasIndex(p => p.Identification).IsUnique();
            modelBuilder.Entity<Person>().Property(p => p.Identification).ValueGeneratedNever(); //Campo no Identity
            modelBuilder.Entity<Appointment>().HasIndex(a => a.IDAppointment).IsUnique();
            modelBuilder.Entity<MedicalRecord>().HasIndex(m => m.IdMedicalRe).IsUnique();
            modelBuilder.Entity<AdoptionForm>().HasIndex(f => f.IdForm).IsUnique();
            modelBuilder.Entity<Pet>().HasIndex(p => p.IdPet).IsUnique();
        }
    }
}
