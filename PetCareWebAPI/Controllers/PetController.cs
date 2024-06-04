using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PetCareWebAPI.DAL;
using PetCareWebAPI.DAL.Entities;

namespace PetCareWebAPI.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class PetController : ControllerBase
    {
        private readonly DataBaseContext _context;

        public PetController(DataBaseContext context)
        {
            _context = context;
        }

        [HttpGet, ActionName("Get")]
        [Route("GetPets")]
        public async Task<ActionResult<IEnumerable<Pet>>> GetPets()
        {
            var Pet = await _context.Pets.ToListAsync();
            if (Pet == null) return NotFound();
            return Ok(Pet);
        }

        [HttpGet, ActionName("Get")]
        [Route("GetPetsByType/{type}")]
        public async Task<ActionResult<IEnumerable<Pet>>> GetPetsByType(int type)
        {
            var Pet = await _context.Pets.Where(x => x.Tipo == (Pet.Types)type).ToListAsync();
            if (Pet == null) return NotFound();
            return Ok(Pet);
        }

        [HttpGet, ActionName("Get")]
        [Route("GetPetsByGender/{gender}")]
        public async Task<ActionResult<IEnumerable<Pet>>> GetPetsByGender(int gender)
        {
            var Pet = await _context.Pets.Where(x => x.genero == (Pet.Genero)gender).ToListAsync();
            if (Pet == null) return NotFound();
            return Ok(Pet);
        }

        [HttpGet, ActionName("Get")]
        [Route("GetPetsByStatus")]
        public async Task<ActionResult<IEnumerable<Pet>>> GetPetsByStatus(int status)
        {
            var Pet = await _context.Pets.Where(x => x.Status == (Pet.AdoptionStatus)status).ToListAsync();
            if (Pet == null) return NotFound();
            return Ok(Pet);
        }

        [HttpGet, ActionName("Get")]
        [Route("GetPetByIdentification/{id}")]
        public async Task<ActionResult<Pet>> GetPetByIdentification(int id)
        {
            var Pet = await _context.Pets.FirstOrDefaultAsync(v => v.IdPet == id);

            if (Pet == null) return NotFound("Pet not found");

            return Ok(Pet);
        }

        [HttpGet, ActionName("Get")]
        [Route("GetPet/{name}")]
        public async Task<ActionResult<Pet>> GetPetByName(string name)
        {
            var Pet = await _context.Pets.FirstOrDefaultAsync(v => v.Name == name);

            if (Pet == null) return NotFound("Pet not found");

            return Ok(Pet);
        }

        [Authorize(Policy = "Admin")]
        [HttpPost, ActionName("Create")]
        [Route("Create")]
        public async Task<ActionResult<Pet>> CreatePet(Pet Pet)
        {
            try
            {
                _context.Pets.Add(Pet);
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException ex)
            {
                if (ex.InnerException.Message.Contains("duplicate"))
                    return Conflict(String.Format("{0} ya existe", Pet.Name));
            }
            catch (Exception ex)
            {
                return Conflict(ex.Message);
            }

            return Ok(Pet);
        }

        [Authorize(Policy = "Admin")]
        [HttpPut, ActionName("Edit")]
        [Route("Edit/{id}")]
        public async Task<IActionResult> EditPet(int id, Pet Pet)
        {
            try
            {
                if (id != Pet.IdPet) return NotFound("Pet not found");

                _context.Pets.Update(Pet);
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException ex)
            {
                if (ex.InnerException.Message.Contains("duplicate"))
                    return Conflict(String.Format("{0} ya existe", Pet.IdPet));
            }
            catch (Exception ex)
            {
                return Conflict(ex.Message);
            }

            return Ok(Pet);
        }

        [Authorize(Policy = "Admin")]
        [HttpDelete, ActionName("Delete")]
        [Route("Delete/{id}")]
        public async Task<IActionResult> DeletePet(int id)
        {
            var Pet = await _context.Pets.FirstOrDefaultAsync(v => v.IdPet == id);

            if (Pet == null) return NotFound("Pet not found");

            _context.Pets.Remove(Pet);
            await _context.SaveChangesAsync();

            return Ok(String.Format("La mascota {0} fue eliminada con éxito!", Pet.Name));
        }
    }
}
