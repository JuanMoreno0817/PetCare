import { Vet } from './vet';

export interface MedicalRecord {
    idMedicalRe?: string | null;
    createDate?: Date | null;
    updateDate?: Date | null;
    description: string;
    vet: Vet | null; //FK
}
