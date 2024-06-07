import {Types, Genero} from '../Entities/pet'

export interface galleryFilterDTO {
    ageMin?: number;
    ageMax?: number;
    tipo?: Types;
    genero?: Genero;
    
}
