import { Person } from "./person";

export interface Vet extends Person{
    Specialization: string;
    AgeExperience: number;
}
