export interface Pet {
    idPet?: number | null;
    name: string;
    age: number;
    color: string;
    race: string;
    weight: number;
    height: number;
    description: string;
    genero: Genero;
    status: AdoptionStatus;
    tipo: Types;
    idMedicalRecord: number | null; //FK
}

export enum Genero{
    Hembra,
    Macho
}

export enum AdoptionStatus{
    Unadopted,
    Adopted
}

export enum Types{
    Gato,
    Perro
}