export interface Person {
    identification: number;
    name: string;
    lastname: string;
    cellphone: string;
    address: string;
    email: string;
    password: string;
    borndate: Date;
    userType: UserType;
}

export enum UserType{
    Admin,
    User
}