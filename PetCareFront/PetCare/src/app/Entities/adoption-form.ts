import { Adopter } from "./adopter";
import { Pet } from "./pet";

export interface AdoptionForm {
    idForm: number | null;
    createDate: Date | null;
    adopter: Adopter;
    pet: Pet;
}
