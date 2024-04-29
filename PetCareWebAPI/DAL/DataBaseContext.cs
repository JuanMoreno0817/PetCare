using Microsoft.EntityFrameworkCore;
using System.Diagnostics.Metrics;


namespace PetCareWebAPI.DAL
{
    public class DataBaseContext : DbContext
    {
        public DataBaseContext(DbContextOptions<DataBaseContext> options) : base(options) { }
    }
}
