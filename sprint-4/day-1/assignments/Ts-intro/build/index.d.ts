declare let n: number;
declare let s: string;
declare let s1: string;
declare let s2: number;
declare let res: string;
declare let b: boolean;
declare let arrStr: Array<string>;
declare let a: number | string | boolean;
type user = {
    name: string;
    id: number;
    age: number;
};
type developer = {
    name: string;
    role: string;
};
declare let ia: user & developer;
declare function sum(a: number, b: number): number;
