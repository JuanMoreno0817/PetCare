export interface Person {
    Identification: number;
    Name: string;
    LastName: string;
    Cellphone: string;
    Address: string;
    Email: string;
    Password: string;
    BornDate: Date;
    userType: UserType;
}

export enum UserType{
    Admin,
    User
}