// Enums (Read it and try to implement it)

// Tuple 

// let obj: user={
//     name: "Ankit",
//     id:23,
//     score:5,
//     address:"1 street",
// };

type user2=[string,number,number,string];

let u1: user2 = ["Ankit",23,5,"1 street"];
let u2: user2 = ["Ankit",23,5,"1 street"];

// [243, 245, 243]

// Genric function

function getInfo<Type>(value:Type){
    return value;
}

getInfo<string>("Ankit");
getInfo<number>(2435);
getInfo<boolean>(false);

// Interface

interface person{
    id:number;
    name:string;
};

interface person2 extends person {
    address:string;
    role: "Fronted" | "Bcakend";
};

let obj:person2 = {
    id:2,
    name:"Aman",
    address:"abc street",
    role: "Fronted"
}


//  Class

class Car{
    name:string;
    brand:string;
    constructor(name:string,brand:string){
        this.name = name;
        this.brand=brand;
    }
}


let c = new Car("Thar","Mahindra");

class Suv extends Car{

    sunRoof:boolean;
    constructor (name:string,brand:string, sunRoof:boolean){
        super(name,brand);
        this.sunRoof= sunRoof
    }
}