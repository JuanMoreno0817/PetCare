export interface Person {
    identification: number;
    name: string;
    lastName: string;
    cellphone: string;
    address: string;
    email: string;
    password: string;
    bornDate: Date;
    userType: UserType;
}

export enum UserType{
    Admin,
    User
}