// Data types

// Number

let n: number=10;
n=20;
// n=false;

// String

let s:string="ABC";

// s=10
s="CDE";

let s1:string = "S1";
let s2:number = 10;

let res: string = ` ${s1}+ ${s2}`;

// Boolean

let b:boolean=false;


// Array
// init[] a=[1,2,3]

// let arr:number[] = [1,2,3];
// let arr: Array<number> = [1,2,3];

// arr.push("abc");
// arr.push(5);

// let arrStr: string[] = ["a","b","c"];
let arrStr: Array<string> = ["a","b","c"];


// Objects

// let obj: user={
//     name: "Ankit",
//     id:23,
//     score:5,
//     address:"1 street",
// };

// obj.score = 55
// obj["score"]=55;

// type user = {name:string;id:number; address:string; score:number};

// Array of objects



// let dataBase:Array<user>=[
//     {
//         name:"Ankit",
//         id:23,
//         score:5,
//         address:"1 street",
//     },
// ];

// Objects with array inside 


// Union and intersection

let a:number | string|boolean=2;
a="a";
a= 10;
a= false;

// intersection

type user = {name: string; id: number; age:number};
type developer = {name: string; role:string};

let ia:user & developer={
    name:"abc",
    id:1,
    age:24,
    role:"frontend"
};



//function

function sum (a:number, b:number){
    return a+b;
}

// sum("2"+1);
sum(2,1)



