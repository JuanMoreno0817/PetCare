using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PetCareWebAPI.DAL;
using PetCareWebAPI.DAL.Entities;

namespace PetCareWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MedicalRecordController : ControllerBase
    {
        private readonly DataBaseContext _context;

        public MedicalRecordController(DataBaseContext context)
        {
            _context = context;
        }

        [HttpGet, ActionName("Get")]
        [Route("GetMedicalRecords")]
        public async Task<ActionResult<IEnumerable<MedicalRecord>>> GetMedicalRecords()
        {
            var medicalRecords = await _context.MedicalRecords.ToListAsync();
            if (medicalRecords == null) return NotFound();
            return medicalRecords;
        }

        [HttpGet, ActionName("Get")]
        [Route("GetMedicalRecord/{id}")]
        public async Task<ActionResult<MedicalRecord>> GetMedicalRecordByIdentification(int id)
        {
            var medicalRecord = await _context.MedicalRecords.FirstOrDefaultAsync(a => a.IdMedicalRe == id);

            if (medicalRecord == null) return NotFound("Medical record not found");

            return medicalRecord;
        }

        [HttpPost, ActionName("Create")]
        [Route("Create")]
        public async Task<ActionResult<MedicalRecord>> CreateMedicalRecord(MedicalRecord medicalRecord)
        {
            try
            {
                _context.MedicalRecords.Add(medicalRecord);
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException ex)
            {
                if (ex.InnerException.Message.Contains("duplicate"))
                    return Conflict(String.Format("{0} ya existe", medicalRecord.IdMedicalRe));
            }
            catch (Exception ex)
            {
                return Conflict(ex.Message);
            }

            return Ok(medicalRecord);
        }

        [HttpPut, ActionName("Edit")]
        [Route("Edit/{id}")]
        public async Task<IActionResult> EditMedicalRecord(int id, MedicalRecord medicalRecord)
        {
            try
            {
                if (id != medicalRecord.IdMedicalRe) return NotFound("Medical record not found");

                _context.MedicalRecords.Update(medicalRecord);
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException ex)
            {
                if (ex.InnerException.Message.Contains("duplicate"))
                    return Conflict(String.Format("{0} ya existe", medicalRecord.IdMedicalRe));
            }
            catch (Exception ex)
            {
                return Conflict(ex.Message);
            }

            return Ok(medicalRecord);
        }

        [HttpDelete, ActionName("Delete")]
        [Route("Delete/{id}")]
        public async Task<IActionResult> DeleteMedicalRecord(int id)
        {
            var medicalRecord = await _context.MedicalRecords.FirstOrDefaultAsync(a => a.IdMedicalRe == id);

            if (medicalRecord == null) return NotFound("Medical record not found");

            _context.MedicalRecords.Remove(medicalRecord);
            await _context.SaveChangesAsync();

            return Ok(String.Format("El historial médico {0} fue eliminad@ con éxito!", medicalRecord.IdMedicalRe));
        }
    }
}
