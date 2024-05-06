using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PetCareWebAPI.DAL;
using PetCareWebAPI.DAL.Entities;

namespace PetCareWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdoptionFormController : ControllerBase
    {
        private readonly DataBaseContext _context;

        public AdoptionFormController(DataBaseContext context)
        {
            _context = context;
        }

        [HttpGet, ActionName("Get")]
        [Route("GetAdoptionForms")]
        public async Task<ActionResult<IEnumerable<AdoptionForm>>> GetAdoptionForms()
        {
            var adoptionForms = await _context.AdoptionForms.ToListAsync();
            if (adoptionForms == null) return NotFound();
            return adoptionForms;
        }

        [HttpGet, ActionName("Get")]
        [Route("GetAdoptionForm/{id}")]
        public async Task<ActionResult<AdoptionForm>> GetAdoptionFormByIdentification(int id)
        {
            var adoptionForms = await _context.AdoptionForms.FirstOrDefaultAsync(a => a.IdForm == id);

            if (adoptionForms == null) return NotFound("Adoption form not found");

            return adoptionForms;
        }

        [HttpPost, ActionName("Create")]
        [Route("Create")]
        public async Task<ActionResult<AdoptionForm>> CreateAdoptionForm(AdoptionForm adoptionForm)
        {
            try
            {
                _context.AdoptionForms.Add(adoptionForm);
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException ex)
            {
                if (ex.InnerException.Message.Contains("duplicate"))
                    return Conflict(String.Format("{0} ya existe", adoptionForm.IdForm));
            }
            catch (Exception ex)
            {
                return Conflict(ex.Message);
            }

            return Ok(adoptionForm);
        }

        [HttpPut, ActionName("Edit")]
        [Route("Edit/{id}")]
        public async Task<IActionResult> EditAdoptionForm(int id, AdoptionForm adoptionForm)
        {
            try
            {
                if (id != adoptionForm.IdForm) return NotFound("Adoption form not found");

                _context.AdoptionForms.Update(adoptionForm);
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException ex)
            {
                if (ex.InnerException.Message.Contains("duplicate"))
                    return Conflict(String.Format("{0} ya existe", adoptionForm.IdForm));
            }
            catch (Exception ex)
            {
                return Conflict(ex.Message);
            }

            return Ok(adoptionForm);
        }

        [HttpDelete, ActionName("Delete")]
        [Route("Delete/{id}")]
        public async Task<IActionResult> DeleteAdoptionForm(int id)
        {
            var adoptionForm = await _context.AdoptionForms.FirstOrDefaultAsync(a => a.IdForm == id);

            if (adoptionForm == null) return NotFound("Adoption form not found");

            _context.AdoptionForms.Remove(adoptionForm);
            await _context.SaveChangesAsync();

            return Ok(String.Format("El formulario de adopción {0} fue eliminado con éxito!", adoptionForm.IdForm));
        }
    }
}
