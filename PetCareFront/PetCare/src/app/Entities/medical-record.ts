import { Vet } from './vet';

export interface MedicalRecord {
    IdMedicalRe: number | null;
    CreateDate: Date | null;
    UpdateDate: Date | null;
    Description: string;
    Vet: Vet | null; //FK
}
