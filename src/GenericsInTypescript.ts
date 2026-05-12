// ========================================
// BASIC GENERIC FUNCTION
// ========================================

function echo<T>(value: T): T {
    return value;
}

console.log(echo<string>("Hello"));
console.log(echo<number>(100));
console.log(echo<boolean>(true));


// ========================================
// GENERIC ARRAY FUNCTION
// ========================================

function getFirst<T>(arr: T[]): T | undefined {
    return arr[0];
}
console.log(getFirst<number>([1, 2, 3]));
console.log(getFirst<string>(["A", "B", "C"]));


// ========================================
// MULTIPLE GENERICS
// ========================================

function pair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}

console.log(pair<string, number>("Age", 22));
console.log(pair<boolean, string>(true, "Hello"));


// ========================================
// GENERIC INTERFACE
// ========================================

interface ApiResponse<T> {
    success: boolean;
    data: T;
}

const userResponse: ApiResponse<string> = {
    success: true,
    data: "Chinmoy"
};

console.log(userResponse);


// ========================================
// GENERIC INTERFACE WITH OBJECT
// ========================================

interface User {
    name: string;
    age: number;
}

const userData: ApiResponse<User> = {
    success: true,
    data: {
        name: "Sourav",
        age: 22
    }
};
console.log(userData);


// ========================================
// GENERIC TYPE ALIAS
// ========================================

type Box<T> = {
    value: T;
};
const stringBox: Box<string> = {
    value: "Hello"
};
const numberBox: Box<number> = {
    value: 500
};
console.log(stringBox);
console.log(numberBox);


// ========================================
// GENERIC CLASS
// ========================================

class Storage<T> {
    private data: T;

    constructor(value: T) {
        this.data = value;
    }

    getData(): T {
        return this.data;
    }
}

const textStorage = new Storage<string>("TypeScript");

const numberStorage = new Storage<number>(999);

console.log(textStorage.getData());
console.log(numberStorage.getData());


// ========================================
// GENERIC WITH CONSTRAINT
// ========================================

function printLength<T extends { length: number }>(item: T): void {
    console.log(item.length);
}

printLength("Hello");
printLength([1, 2, 3, 4]);
printLength(["A", "B"]);


// ========================================
// GENERIC DEFAULT TYPE
// ========================================

type Data<T = string> = {
    value: T;
};

const data1: Data = {
    value: "Default String"
};

const data2: Data<number> = {
    value: 123
};

console.log(data1);
console.log(data2);


// ========================================
// GENERIC KEYOF EXAMPLE
// ========================================

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const person = {
    name: "Chinmoy",
    age: 22
};

console.log(getProperty(person, "name"));
console.log(getProperty(person, "age"));


// ========================================
// GENERIC PROMISE
// ========================================

function fetchData<T>(data: T): Promise<T> {
    return new Promise((resolve) => {
        resolve(data);
    });
}

fetchData<string>("Hello Promise")
    .then((res) => console.log(res));

fetchData<number>(100)
    .then((res) => console.log(res));


// ========================================
// GENERIC STACK DATA STRUCTURE
// ========================================

class Stack<T> {
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    getItems(): T[] {
        return this.items;
    }
}

const numberStack = new Stack<number>();

numberStack.push(10);
numberStack.push(20);

console.log(numberStack.getItems());

const stringStack = new Stack<string>();

stringStack.push("A");
stringStack.push("B");

console.log(stringStack.getItems());