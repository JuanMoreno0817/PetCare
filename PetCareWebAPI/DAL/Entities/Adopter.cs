using System.ComponentModel.DataAnnotations;
using System.Data.SqlTypes;

namespace PetCareWebAPI.DAL.Entities
{
    public class Adopter : Person
    {
        [Display(Name = "Ocupación")]
        [Required(ErrorMessage = "El campo {0} es obligatorio")]
        public string Ocupation { get; set; }
        public HouseTypes HouseType { get; set; }

        [Display(Name = "Ingresos")]
        [Required(ErrorMessage = "El campo {0} es obligatorio")]
        public SqlMoney MoneyIncome { get; set; }

        public enum HouseTypes
        {
            Casa,
            Apartmento,
            Finca,
            Cabaña
        }

    }
}
