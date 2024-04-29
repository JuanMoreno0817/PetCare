using System.ComponentModel.DataAnnotations;

namespace PetCareWebAPI.DAL.Entities
{
    public class Vet
    {
        [Display(Name = "Especialización")]
        [Required(ErrorMessage = "El campo {0} es obligatorio")]
        public string Specialization { get; set; }
        public int AgeExperiencie { get; set; }
    }
}
