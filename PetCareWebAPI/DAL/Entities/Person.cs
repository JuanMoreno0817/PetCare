using System.ComponentModel.DataAnnotations;

namespace PetCareWebAPI.DAL.Entities
{
    public class Person
    {
        [Key]
        [Display(Name = "Documento")]
        [Required(ErrorMessage = "El campo {0} es obligatorio")]
        public int Identification { get; set; }

        [Display(Name = "Nombres")]
        [MaxLength(20, ErrorMessage = "The {0} field can not have more than {1} characters.")]
        [Required(ErrorMessage = "El campo {0} es obligatorio")]
        public string Name { get; set; }

        [Display(Name = "Apellidos")]
        [MaxLength(20, ErrorMessage = "The {0} field can not have more than {1} characters.")]
        [Required(ErrorMessage = "El campo {0} es obligatorio")]
        public string Lastname { get; set; }

        [Display(Name = "Celular")]
        [MaxLength(10, ErrorMessage = "The {0} field can not have more than {1} characters.")]
        [Required(ErrorMessage = "El campo {0} es obligatorio")]
        public string Cellphone { get; set; }

        [Display(Name = "Dirección")]
        [MaxLength(30, ErrorMessage = "The {0} field can not have more than {1} characters.")]
        public string Address { get; set; }

        [Display(Name = "Correo Electronico")]
        [Required(ErrorMessage = "El campo {0} es obligatorio")]
        public string Email { get; set; }

        [Display(Name = "Contraseña")]
        [Required(ErrorMessage = "El campo {0} es obligatorio")]
        public string Password { get; set; }

        [Display(Name = "Fecha Nacimiento")]
        public DateTime Borndate { get; set; }
    }
}
