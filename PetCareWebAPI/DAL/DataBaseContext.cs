using Microsoft.EntityFrameworkCore;
using PetCareWebAPI.DAL.Entities;
using System.Diagnostics.Metrics;


namespace PetCareWebAPI.DAL
{
    public class DataBaseContext : DbContext
    {
        public DataBaseContext(DbContextOptions<DataBaseContext> options) : base(options) { }

        public DbSet<Person> Persons { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Person>().HasIndex(p => p.Identification).IsUnique();
        }
    }
}
