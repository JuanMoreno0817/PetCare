import { Adopter } from "./adopter";
import { Pshicologist } from "./pshicologist";

export interface Appointment {
    idAppointment: number | null;
    appointmentDate: Date;
    adopter: Adopter | null; //FK
    psichologist: Pshicologist | null; //FK
}
