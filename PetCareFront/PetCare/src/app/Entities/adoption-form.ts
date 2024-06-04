import { Adopter } from "./adopter";
import { Pet } from "./pet";

export interface AdoptionForm {
    IdForm: number | null;
    CreateDate: Date | null;
    Adopter: Adopter;
    Pet: Pet;
}
