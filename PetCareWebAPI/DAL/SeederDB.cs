namespace PetCareWebAPI.DAL
{
    public class SeederDB
    {
        private readonly DataBaseContext _context;

        public SeederDB(DataBaseContext context)
        {
            _context = context;
        }

        public async Task SeederAsync() 
        {
            await _context.Database.EnsureCreatedAsync();

            await _context.SaveChangesAsync();
        }
    }
}
