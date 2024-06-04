import { Person } from "./person";

export interface Adopter extends Person {
    Ocupation: string;
    HouseType: HouseTypes;
    MoneyIncome: number;
}

export enum HouseTypes {
    Casa,
    Apartmento,
    Finca,
    Cabaña
}
