using System.ComponentModel.DataAnnotations;

namespace PetCareWebAPI.DTOs
{
    public class GalleryFilterDTO
    {
        [Display(Name = "Edad")]
        public int? Age { get; set; }

        [Display(Name = "Tipo")]
        public string Tipo { get; set; }

        [Display(Name = "Sexo")]
        public string Sex { get; set; }
    }
}
