import { Adopter } from "./adopter";
import { Pshicologist } from "./pshicologist";

export interface Appointment {
    IDAppointment: number | null;
    AppointmentDate: Date;
    Adopter: Adopter | null; //FK
    Psichologist: Pshicologist | null; //FK
}
