import { Adopter } from "./adopter";
import { Pet } from "./pet";

export interface AdoptionForm {
    idForm?: string | null;
    createdate?: Date | null;
    adopter: Adopter;
    pet: Pet;
}
