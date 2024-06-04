export interface Pet {
    IdPet: number | null;
    Name: string;
    Age: number;
    Color: string;
    Race: string;
    Weight: number;
    Height: number;
    Description: string;
    genero: Genero;
    AdoptionStatus: Status;
    Tipo: Types;
    IdMedicalRecord: number; //FK
}

export enum Genero{
    Hembra,
    Macho
}

export enum Status{
    Unadopted,
    Adopted
}

export enum Types{
    Gato,
    Perro
}