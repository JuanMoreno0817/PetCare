import { Adopter } from "./adopter";
import { Pshicologist } from "./pshicologist";

export interface Appointment {
    idAppointment: string | null;
    appointmentDate: Date;
    adopter: Adopter | null; //FK
    psichologist: Pshicologist | null; //FK
}
