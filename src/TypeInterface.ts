// Basic Interface
interface User {
    name: string;
    age: number;
}

const user1: User = {
    name: "Chinmoy",
    age: 22
};

console.log(user1);


// Optional Property
interface Student {
    name: string;
    roll: number;
    department?: string;
}

const student1: Student = {
    name: "Sourav",
    roll: 101
};
console.log(student1);


// Interface with Function
interface Add {
    (a: number, b: number): number;
}
const sum: Add = (x, y) => x + y;
console.log(sum(10, 20));


// Interface with Method
interface Person {
    name: string;
    sayHello(): void;
}
const person1: Person = {
    name: "Aman",

    sayHello() {
        console.log("Hello!");
    }
};
person1.sayHello();


// Interface Extending Another Interface
interface Animal {
    name: string;
}

interface Dog extends Animal {
    breed: string;
}

const dog1: Dog = {
    name: "Tommy",
    breed: "German Shepherd"
};

console.log(dog1);


// Interface with Array
interface Names {
    [index: number]: string;
}
const friends: Names = ["Riya", "Neha", "Priya"];

console.log(friends);