// Enums (Read it and try to implement it)
let u1 = ["Ankit", 23, 5, "1 street"];
let u2 = ["Ankit", 23, 5, "1 street"];
// [243, 245, 243]
// Genric function
function getInfo(value) {
    return value;
}
getInfo("Ankit");
getInfo(2435);
getInfo(false);
;
;
let obj = {
    id: 2,
    name: "Aman",
    address: "abc street",
    role: "Fronted"
};
//  Class
class Car {
    constructor(name, brand) {
        this.name = name;
        this.brand = brand;
    }
}
let c = new Car("Thar", "Mahindra");
class Suv extends Car {
    constructor(name, brand, sunRoof) {
        super(name, brand);
        this.sunRoof = sunRoof;
    }
}
//# sourceMappingURL=advance.js.map