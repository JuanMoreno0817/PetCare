import { Person } from "./person";

export interface Vet extends Person{
    specialization: string;
    ageExperience: number;
}
