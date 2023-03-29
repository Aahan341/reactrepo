type user2 = [string, number, number, string];
declare let u1: user2;
declare let u2: user2;
declare function getInfo<Type>(value: Type): Type;
interface person {
    id: number;
    name: string;
}
interface person2 extends person {
    address: string;
    role: "Fronted" | "Bcakend";
}
declare let obj: person2;
declare class Car {
    name: string;
    brand: string;
    constructor(name: string, brand: string);
}
declare let c: Car;
declare class Suv extends Car {
    sunRoof: boolean;
    constructor(name: string, brand: string, sunRoof: boolean);
}
