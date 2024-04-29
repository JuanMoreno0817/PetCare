using System.ComponentModel.DataAnnotations;

namespace PetCareWebAPI.DAL.Entities
{
    public class Appointment
    {
        [Key]
        public int IDAppointment { get; set; }
        public DateTime AppointmentDate { get; set; }
        public int IdAdopter { get; set; } //FK
        public int IdPsicho { get; set; } //FK
    }
}
