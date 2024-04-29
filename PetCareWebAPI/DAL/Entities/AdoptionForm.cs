using System.ComponentModel.DataAnnotations;

namespace PetCareWebAPI.DAL.Entities
{
    public class AdoptionForm
    {
        [Key]
        public int IdForm { get; set; }
        public DateTime CreateDate { get; set; }
        public Adopter Adopter { get; set; }
        public Pet Pet { get; set; }
    }
}
