import { Person } from "./person";

export interface Adopter extends Person {
    ocupation: string;
    houseType: HouseTypes;
    moneyIncome: number;
}

export enum HouseTypes {
    Casa,
    Apartmento,
    Finca,
    Cabaña
}
