# 📘 TypeScript — Complete Easy Guide
> Read this whenever you forget something. Everything is explained simply with examples.

---

## 📌 Table of Contents
1. [What is TypeScript?](#1-what-is-typescript)
2. [Type Annotations](#2-type-annotations)
3. [Type Inference (Auto Detection)](#3-type-inference-auto-detection)
4. [The `any` Type](#4-the-any-type)
5. [Objects](#5-objects)
6. [Functions](#6-functions)
7. [Optional & Default Parameters](#7-optional--default-parameters)
8. [Rest Parameters](#8-rest-parameters)
9. [Arrow Functions](#9-arrow-functions)
10. [void & never](#10-void--never)
11. [Union Types](#11-union-types)
12. [Literal Types](#12-literal-types)
13. [Nullable Types](#13-nullable-types)
14. [Type Alias](#14-type-alias)
15. [Intersection Types](#15-intersection-types)
16. [Arrays](#16-arrays)
17. [Tuples](#17-tuples)
18. [Enums](#18-enums)
19. [Interfaces](#19-interfaces)
20. [Interface Methods](#20-interface-methods)
21. [Re-opening an Interface](#21-re-opening-an-interface)
22. [Interface vs Type Alias](#22-interface-vs-type-alias)
23. [Classes](#23-classes)
24. [Access Modifiers](#24-access-modifiers)
25. [Getters & Setters](#25-getters--setters)
26. [Static Members](#26-static-members)
27. [Implements Interface](#27-implements-interface)
28. [Abstract Classes](#28-abstract-classes)
29. [Polymorphism & Method Override](#29-polymorphism--method-override)
30. [Generics](#30-generics)
31. [Generic Classes](#31-generic-classes)
32. [Generics with Interfaces](#32-generics-with-interfaces)
33. [Type Assertions](#33-type-assertions)
34. [Debugging Tips](#34-debugging-tips)

---

## 1. What is TypeScript?

### 🤔 What is it?
TypeScript is JavaScript with **labels on everything**.

In regular JavaScript, you can put anything in any variable — a number, a text, a list — and JavaScript won't complain. This causes hidden bugs.

TypeScript forces you to say **what type** each variable is. If you make a mistake, TypeScript tells you **before you even run the code**.

### 🧃 Think of it like this:
> JavaScript = mystery boxes with no labels.  
> TypeScript = every box is labeled "fruits", "numbers", "names" etc.

### ✅ Why use it?
- Catches bugs **before** running code
- Makes your code easier to understand
- Your editor gives better suggestions (autocomplete)
- Safer when working in teams

```ts
// JavaScript — no safety
let age = "twenty"; // Should be a number but no error!

// TypeScript — safe
let age: number = 25;        // ✅ Correct
let age: number = "twenty";  // ❌ Error caught immediately!
```

---

## 2. Type Annotations

### 🏷️ What is it?
A type annotation is a **label** you put on a variable. You write `:` after the variable name, then the type.

### ✅ Why use it?
So TypeScript knows what kind of value should go in that variable — and warns you if you put the wrong thing.

### 📌 When to use it?
When you declare a variable but don't give it a value yet, OR when you want to be extra clear about what type it is.

```ts
let name: string  = "Alice";   // text
let age: number   = 25;        // number
let isActive: boolean = true;  // true or false

// ❌ This is an error — wrong type:
let score: number = "hello";   // Type 'string' not assignable to 'number'
```

### The main types:
| Type | Meaning | Example |
|------|---------|---------|
| `string` | Text | `"Hello"` |
| `number` | Any number | `42`, `3.14` |
| `boolean` | True or False | `true`, `false` |
| `null` | Intentionally empty | `null` |
| `undefined` | Not yet assigned | `undefined` |

---

## 3. Type Inference (Auto Detection)

### 🧠 What is it?
If you give a variable a value right away, TypeScript **automatically figures out the type**. You don't have to write it!

### ✅ Why use it?
Saves you time — you don't always need to write the type manually.

### 📌 When to use it?
When you assign a value immediately. TypeScript is smart enough to figure it out.

```ts
let city  = "Dhaka";  // TypeScript knows: string
let score = 100;      // TypeScript knows: number
let win   = true;     // TypeScript knows: boolean

// You don't need to write:
let city: string = "Dhaka"; // this is fine too, but not required
```

> 💡 **Tip:** Trust TypeScript's inference. Only add the type manually when needed.

---

## 4. The `any` Type

### ⚠️ What is it?
`any` means "I don't care what type this is." It turns off all TypeScript safety for that variable.

### ❌ Why avoid it?
Because you lose all the benefits of TypeScript. Bugs can sneak in.

### 📌 When to use it?
Only when you have absolutely no choice — like working with very old JavaScript libraries that have no types.

```ts
let data: any = "hello";
data = 42;       // OK — no error
data = true;     // OK — any accepts everything
data = [1,2,3];  // OK

// But now TypeScript can't help you at all ❌
```

> 🚨 **Warning:** Using `any` is like removing all labels from your jars. You'll forget what's inside later!

---

## 5. Objects

### 📦 What is it?
When you have an object (like a user with a name and age), you describe its **shape** — what properties it has and what type each property is.

### ✅ Why use it?
So TypeScript knows every required field and warns you if something is missing or has the wrong type.

### 📌 When to use it?
Any time you work with objects.

```ts
// Describing the shape inline:
let user: { name: string; age: number } = {
  name: "Rahim",
  age: 30
};

// ❌ Missing age — error:
let user2: { name: string; age: number } = {
  name: "Rahim"
  // age is missing!
};

// ❌ Wrong type — error:
let user3: { name: string; age: number } = {
  name: "Rahim",
  age: "thirty"  // age must be number, not string!
};
```

> 💡 **Tip:** For complex objects, use a **Type Alias** or **Interface** instead of writing the shape inline every time. (See sections 14 and 19.)

---

## 6. Functions

### 🔧 What is it?
You put type labels on the **inputs (parameters)** and the **output (return value)** of a function.

### ✅ Why use it?
- TypeScript checks that you call the function with the right values
- TypeScript checks that the function returns the right type
- Your editor shows you what a function needs when you use it

### 📌 When to use it?
Always! Type your function parameters and return types.

```ts
// name must be a string, function returns a string
function greet(name: string): string {
  return `Hello, ${name}!`;
}

greet("Karim");  // ✅ "Hello, Karim!"
greet(42);       // ❌ Error — 42 is not a string!

// Another example:
function add(a: number, b: number): number {
  return a + b;
}

add(5, 10);     // ✅ 15
add(5, "ten");  // ❌ Error — "ten" is not a number!
```

---

## 7. Optional & Default Parameters

### ❓ What is it?
- **Optional** (`?`): The parameter might not be provided — that's okay.
- **Default**: If the parameter isn't provided, use this default value.

### ✅ Why use it?
Makes your functions flexible — callers don't always need to provide every argument.

### 📌 When to use it?
When some inputs to your function are not always required.

```ts
// Optional parameter — greeting might not be given
function greet(name: string, greeting?: string): string {
  return `${greeting ?? "Hello"}, ${name}!`;
}

greet("Ali");            // "Hello, Ali!"   — greeting was not given
greet("Ali", "Salaam");  // "Salaam, Ali!"  — greeting was given

// Default parameter — if not given, use "Hello"
function greet2(name: string, greeting = "Hello"): string {
  return `${greeting}, ${name}!`;
}

greet2("Sara");         // "Hello, Sara!"
greet2("Sara", "Hi");   // "Hi, Sara!"
```

> 💡 **Difference:** Optional (`?`) can be `undefined`. Default gives a real fallback value.

---

## 8. Rest Parameters

### 📚 What is it?
Use `...rest` when you don't know how many arguments someone will pass. It collects all of them into an **array**.

### ✅ Why use it?
When you need a function that can accept any number of values.

### 📌 When to use it?
For math functions (sum, multiply), logging functions, or anything where quantity of inputs is unknown.

```ts
function total(...prices: number[]): number {
  return prices.reduce((sum, price) => sum + price, 0);
}

total(10, 20);           // 30
total(5, 15, 25, 35);    // 80
total(100, 200, 300);    // 600

// Real world example — log many messages:
function log(label: string, ...messages: string[]): void {
  messages.forEach(msg => console.log(`[${label}] ${msg}`));
}

log("INFO", "Server started", "Port 3000", "Ready");
```

---

## 9. Arrow Functions

### ➡️ What is it?
A **shorter way** to write functions using `=>`. Same thing, different (cleaner) syntax.

### ✅ Why use it?
Less typing, cleaner code — especially for short functions.

### 📌 When to use it?
Short functions, callbacks, array methods (`.map`, `.filter`, `.forEach`).

```ts
// Normal function:
function double(n: number): number {
  return n * 2;
}

// Same as arrow function:
const double = (n: number): number => n * 2;

// Even shorter if just one line:
const double = (n: number) => n * 2; // return type is inferred

// Used in array methods:
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((n) => n * 2);  // [2, 4, 6, 8, 10]
const evens   = numbers.filter((n) => n % 2 === 0); // [2, 4]
```

---

## 10. void & never

### 🚫 What is it?
- **`void`**: The function does something but **returns nothing**.
- **`never`**: The function **never finishes** — it either throws an error or loops forever.

### ✅ Why use it?
Tells TypeScript (and other developers) exactly what to expect from the function.

### 📌 When to use it?
- Use `void` for functions that only have **side effects** (printing, saving, etc.)
- Use `never` for functions that **always throw** or **infinite loops**

```ts
// void — does something, returns nothing
function logMessage(msg: string): void {
  console.log(msg);
  // no return statement
}

// never — throws an error, never returns
function crash(msg: string): never {
  throw new Error(msg);
}

// never — infinite loop
function runForever(): never {
  while (true) {
    // keeps running
  }
}
```

> 💡 **Easy way to remember:** `void` = done but no value back. `never` = doesn't even get to return.

---

## 11. Union Types

### 🔀 What is it?
A union type means a variable can be **one type OR another**. Use `|` (pipe) between types.

### ✅ Why use it?
When a value can legitimately be more than one type.

### 📌 When to use it?
- IDs that can be numbers or strings
- Values that might be a string or null
- API responses that can be success or error

```ts
let id: string | number;
id = "abc123";  // ✅ string is OK
id = 42;        // ✅ number is OK
id = true;      // ❌ Error — not string or number

// Function that accepts string or number:
function printId(id: string | number): void {
  console.log(`ID: ${id}`);
}

printId("user_01");  // ✅
printId(101);        // ✅
```

---

## 12. Literal Types

### 📌 What is it?
Literal types restrict a variable to **exact specific values** — not just any string or number, but specific ones.

### ✅ Why use it?
Prevents invalid values. Like an enum but written inline.

### 📌 When to use it?
Sizes, directions, statuses, roles — anything with a fixed set of valid options.

```ts
// Only these exact strings are allowed:
let size: "small" | "medium" | "large";
size = "medium";   // ✅
size = "huge";     // ❌ Error — not in the list!

// Traffic light:
let light: "red" | "yellow" | "green";
light = "red";     // ✅
light = "purple";  // ❌

// Order status:
let status: "pending" | "processing" | "delivered" | "cancelled";
status = "pending";    // ✅
status = "lost";       // ❌

// Dice roll (number literals):
let roll: 1 | 2 | 3 | 4 | 5 | 6;
roll = 3;   // ✅
roll = 7;   // ❌
```

---

## 13. Nullable Types

### 🈳 What is it?
By default TypeScript prevents `null`/`undefined` bugs. But sometimes a value genuinely might not exist. Use a union with `null` or `undefined` to allow it.

### ✅ Why use it?
To safely handle values that might be empty — like a user who hasn't logged in yet, or data that hasn't loaded.

### 📌 When to use it?
API responses, user inputs, optional data, loading states.

```ts
// Without nullable — must always have a value
let username: string = "Ali";
username = null;  // ❌ Error

// With nullable — can be null
let username: string | null = null;  // Not logged in yet
username = "Karim";                  // Now logged in ✅

// Safe access with optional chaining (?.)
console.log(username?.toUpperCase()); // Won't crash even if null

// Real world example:
function getUser(): { name: string } | null {
  // might return a user or nothing
  return null;
}

const user = getUser();
console.log(user?.name); // Safe — won't crash if null
```

---

## 14. Type Alias

### 🏷️ What is it?
A type alias gives your type a **nickname** using the `type` keyword. Instead of writing the same long type everywhere, you write it once and reuse the name.

### ✅ Why use it?
- No repetition
- Easier to read
- Change in one place, updates everywhere

### 📌 When to use it?
When you use the same type in multiple places, or when you want to give a meaningful name to a complex type.

```ts
// Without alias — repetitive:
let userId: string | number;
let postId: string | number;
let commentId: string | number;

// With alias — clean:
type ID = string | number;

let userId: ID;
let postId: ID;
let commentId: ID;

// Object alias:
type User = {
  name: string;
  age: number;
  email: string;
};

const alice: User = { name: "Alice", age: 25, email: "alice@example.com" };
const bob: User   = { name: "Bob",   age: 30, email: "bob@example.com" };

// Status alias:
type Status = "active" | "inactive" | "banned";
let myStatus: Status = "active";  // ✅
let bad: Status = "deleted";      // ❌ Not in the list
```

---

## 15. Intersection Types

### 🔗 What is it?
Intersection combines multiple types into one. The value must have **ALL properties from ALL types**. Use `&` between types.

### ✅ Why use it?
To combine/merge types together — like mixing two contracts into one.

### 📌 When to use it?
When an object needs to satisfy multiple type requirements at once.

```ts
type HasName   = { name: string };
type HasSalary = { salary: number };
type HasAge    = { age: number };

type Employee = HasName & HasSalary & HasAge;

// Must have ALL: name, salary, AND age
const emp: Employee = {
  name: "Sara",
  salary: 50000,
  age: 28
};

// ❌ Missing salary — error:
const bad: Employee = {
  name: "Ali",
  age: 25
  // salary is missing!
};
```

> 💡 **Easy memory trick:** `|` = OR (one or the other). `&` = AND (must have both/all).

---

## 16. Arrays

### 📋 What is it?
An array is a **list of values**. With TypeScript, you say what type ALL items in the list must be.

### ✅ Why use it?
Prevents you from accidentally mixing types in a list.

### 📌 When to use it?
Any time you have a list of things.

```ts
// Two ways to write array types — both are the same:
let names:  string[]       = ["Ali", "Sara", "Rahim"];
let scores: Array<number>  = [90, 85, 92];

// Adding items:
names.push("Karim");   // ✅
names.push(42);        // ❌ 42 is not a string!

// Array of objects:
type User = { name: string; age: number };
let users: User[] = [
  { name: "Alice", age: 25 },
  { name: "Bob",   age: 30 }
];

// 2D array (array of arrays):
let matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matrix[0][1]); // 2 (row 0, column 1)
```

---

## 17. Tuples

### 📦 What is it?
A tuple is like an array, but **fixed** — you decide exactly how many items there are and what type **each position** is.

### ✅ Why use it?
When you have a specific structure with a fixed number of items and each position means something different.

### 📌 When to use it?
Returning multiple values from a function, coordinates (x, y), key-value pairs.

```ts
// Position 0 = string, position 1 = number
let person: [string, number] = ["Ali", 30];

person[0] = "Sara";    // ✅ string is fine
person[1] = 25;        // ✅ number is fine
person[0] = 42;        // ❌ position 0 must be string!
person[1] = "thirty";  // ❌ position 1 must be number!

// Real world — return [error, result] pattern:
function divide(a: number, b: number): [string | null, number | null] {
  if (b === 0) return ["Cannot divide by zero", null];
  return [null, a / b];
}

const [error, result] = divide(10, 2);
// error = null, result = 5

// Coordinates:
let point: [number, number] = [100, 200]; // x, y
```

> 💡 **Difference from array:** `number[]` = any number of numbers. `[string, number]` = exactly 2 items, first is string, second is number.

---

## 18. Enums

### 🎛️ What is it?
An enum is a **group of named constants**. Instead of using raw strings or numbers, you give them clear readable names.

### ✅ Why use it?
- Much more readable than `0`, `1`, `2`
- Prevents typos (TypeScript checks the name)
- All related options are grouped in one place

### 📌 When to use it?
Directions, statuses, roles, categories — anything with a fixed list of options.

```ts
// Number enum (auto-assigned 0, 1, 2...)
enum Direction {
  Up,     // = 0
  Down,   // = 1
  Left,   // = 2
  Right   // = 3
}

let move: Direction = Direction.Up;
console.log(move);  // 0

// String enum — MUCH easier to read and debug!
enum Status {
  Pending   = "PENDING",
  Active    = "ACTIVE",
  Inactive  = "INACTIVE",
  Banned    = "BANNED"
}

let userStatus: Status = Status.Active;
console.log(userStatus);  // "ACTIVE"

// Usage in a function:
function checkStatus(s: Status): string {
  if (s === Status.Banned) return "You are banned!";
  return "Welcome!";
}
```

> ✅ **Always prefer string enums** — you see the actual word when debugging, not just a number.

---

## 19. Interfaces

### 📜 What is it?
An interface defines the **shape of an object** — what properties it must have and what types they are. It's like a contract.

### ✅ Why use it?
- Forces objects to have all required properties
- Reusable across many parts of your code
- Great for describing data from APIs, databases, etc.

### 📌 When to use it?
When describing the shape of objects, especially for classes and APIs.

```ts
interface User {
  name: string;
  age: number;
  email: string;
  isAdmin?: boolean;  // optional (the ? means not required)
}

// Must match the interface:
const alice: User = {
  name: "Alice",
  age: 25,
  email: "alice@example.com"
};  // ✅ isAdmin is optional, so OK without it

// ❌ Missing email — error:
const bob: User = {
  name: "Bob",
  age: 30
  // email is missing!
};

// ❌ Wrong type — error:
const carol: User = {
  name: "Carol",
  age: "twenty-five",  // must be number!
  email: "carol@example.com"
};
```

---

## 20. Interface Methods

### 🔧 What is it?
Interfaces can also describe **methods** (functions) that an object must have.

### ✅ Why use it?
Ensures that any object following this interface will have the required functions available.

### 📌 When to use it?
When objects need to have specific behaviors/functions.

```ts
interface Animal {
  name: string;
  speak(): string;                    // must have speak()
  move(distance: number): string;     // must have move()
  eat?(food: string): void;           // optional method
}

const dog: Animal = {
  name: "Rex",
  speak() { return "Woof!"; },
  move(d) { return `Ran ${d} meters`; }
};

const cat: Animal = {
  name: "Whiskers",
  speak() { return "Meow!"; },
  move(d) { return `Crept ${d} meters`; },
  eat(food) { console.log(`Eating ${food}`); }
};
```

---

## 21. Re-opening an Interface

### 🔓 What is it?
You can declare the same interface **multiple times** and TypeScript will **merge** them into one.

### ✅ Why use it?
Useful when you want to add more properties to an existing interface — especially in large projects or when extending third-party types.

### 📌 When to use it?
Extending existing interfaces without modifying the original file.

```ts
interface Car {
  brand: string;
}

// Same interface name — TypeScript merges them!
interface Car {
  speed: number;
}

// Now Car has BOTH brand AND speed:
const myCar: Car = {
  brand: "Toyota",
  speed: 120
};  // ✅

// Note: Type aliases CANNOT be re-opened like this
// type Car = { brand: string }  ← can't add to it later
```

---

## 22. Interface vs Type Alias

### ⚖️ What's the difference?
Both can describe object shapes. Here's when to use which:

| Feature | Interface | Type Alias |
|---------|-----------|------------|
| Describe object shape | ✅ Yes | ✅ Yes |
| Can use union types | ❌ No | ✅ Yes |
| Can be re-opened/merged | ✅ Yes | ❌ No |
| Can extend another | ✅ Yes (extends) | ✅ Yes (&) |
| Best for classes | ✅ Yes | ❌ Less common |

```ts
// Interface — good for objects and classes
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

// Type Alias — good for unions, primitives, complex combos
type ID = string | number;           // interface can't do this
type Status = "on" | "off";          // interface can't do this
type Animal2 = { name: string } & { age: number }; // intersection
```

> 💡 **Simple rule:** Use `interface` for objects/classes. Use `type` for unions and primitive combinations.

---

## 23. Classes

### 🏗️ What is it?
A class is a **blueprint** for creating objects. You define the structure and behavior once, then create many objects from it using `new`.

### ✅ Why use it?
- Organize related data and functions together
- Create many similar objects easily
- Foundation of object-oriented programming (OOP)

### 📌 When to use it?
When you need multiple objects with the same structure — users, products, orders, etc.

```ts
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age  = age;
  }

  greet(): string {
    return `Hi, I'm ${this.name} and I'm ${this.age} years old!`;
  }

  birthday(): void {
    this.age++;
    console.log(`Happy birthday ${this.name}! Now ${this.age}.`);
  }
}

// Create objects from the blueprint:
const alice = new Person("Alice", 25);
const bob   = new Person("Bob", 30);

console.log(alice.greet());  // "Hi, I'm Alice and I'm 25 years old!"
alice.birthday();            // "Happy birthday Alice! Now 26."
```

---

## 24. Access Modifiers

### 🔒 What is it?
Access modifiers control **who can access** a property or method.

| Modifier | Who can access? |
|----------|----------------|
| `public` | Anyone (default) |
| `private` | Only inside this class |
| `protected` | This class + subclasses |

### ✅ Why use it?
Protects sensitive data. For example, a bank balance should not be changed from outside the class directly.

### 📌 When to use it?
Use `private` for internal data that shouldn't be touched from outside. Use `protected` when subclasses need access.

```ts
class BankAccount {
  public  owner: string;      // Anyone can read/change
  private balance: number;    // Only this class can access
  protected accountId: number; // This class + child classes

  constructor(owner: string) {
    this.owner     = owner;
    this.balance   = 0;
    this.accountId = Math.floor(Math.random() * 10000);
  }

  deposit(amount: number): void {
    this.balance += amount;  // ✅ inside the class — OK
  }

  getBalance(): number {
    return this.balance;     // ✅ inside the class — OK
  }
}

const account = new BankAccount("Ali");
account.owner = "Karim";         // ✅ public — OK
account.balance = 99999;         // ❌ private — Error!
console.log(account.getBalance()); // ✅ use the public method
```

---

## 25. Getters & Setters

### 🎛️ What is it?
Getters and setters let you **control how properties are read and written**.
- `get` = runs when you READ a property
- `set` = runs when you WRITE a property

### ✅ Why use it?
- Add validation when setting a value
- Compute a value when reading (like converting Celsius to Fahrenheit)
- Keep internal data private but accessible in a controlled way

### 📌 When to use it?
When you need logic around reading or writing a property.

```ts
class Temperature {
  private _celsius: number = 0;

  // Getter — calculate Fahrenheit on the fly
  get fahrenheit(): number {
    return this._celsius * 9 / 5 + 32;
  }

  // Getter — just read celsius
  get celsius(): number {
    return this._celsius;
  }

  // Setter — validate before setting
  set celsius(value: number) {
    if (value < -273.15) {
      throw new Error("Temperature below absolute zero!");
    }
    this._celsius = value;
  }
}

const temp = new Temperature();
temp.celsius = 100;                  // Uses the setter
console.log(temp.fahrenheit);        // 212 — uses the getter
temp.celsius = -300;                 // ❌ Throws error!
```

---

## 26. Static Members

### 🔩 What is it?
Static properties/methods **belong to the class itself**, not to any individual object. You don't need `new` to use them.

### ✅ Why use it?
For shared data or utility functions that don't depend on any specific object instance.

### 📌 When to use it?
Counters, utility/helper functions, constants shared across all instances.

```ts
class Counter {
  static count: number = 0;

  static increment(): void {
    Counter.count++;
  }

  static reset(): void {
    Counter.count = 0;
  }
}

// No 'new' needed — call directly on the class:
Counter.increment();
Counter.increment();
Counter.increment();
console.log(Counter.count);  // 3
Counter.reset();
console.log(Counter.count);  // 0

// Math utility example:
class MathHelper {
  static PI = 3.14159;

  static circleArea(radius: number): number {
    return MathHelper.PI * radius ** 2;
  }
}

console.log(MathHelper.circleArea(5));  // 78.54
```

---

## 27. Implements Interface

### 📋 What is it?
A class can **promise** to follow an interface using the `implements` keyword. TypeScript then checks that the class has everything the interface requires.

### ✅ Why use it?
Guarantees that a class has all the required properties and methods.

### 📌 When to use it?
When you want multiple different classes to follow the same contract/structure.

```ts
interface Drawable {
  color: string;
  draw(): void;
}

interface Resizable {
  resize(factor: number): void;
}

// Class must have all required members:
class Circle implements Drawable, Resizable {
  color: string;
  radius: number;

  constructor(color: string, radius: number) {
    this.color  = color;
    this.radius = radius;
  }

  draw(): void {
    console.log(`Drawing a ${this.color} circle`);
  }

  resize(factor: number): void {
    this.radius *= factor;
  }
}

// ❌ Missing draw() — TypeScript will give an error:
class Square implements Drawable {
  color: string = "red";
  // draw() is missing — ERROR!
}
```

---

## 28. Abstract Classes

### 👻 What is it?
An abstract class is an **unfinished blueprint**. You can't create an object directly from it. You must first create a subclass and fill in the missing (abstract) methods.

### ✅ Why use it?
Forces all subclasses to implement specific methods. Shared behavior goes in the abstract class, unique behavior goes in each subclass.

### 📌 When to use it?
When you have a base concept (Shape, Vehicle, Animal) where the specific behavior depends on the subclass.

```ts
abstract class Shape {
  abstract area(): number;       // subclass MUST implement this
  abstract perimeter(): number;  // subclass MUST implement this

  // Shared method — all shapes can use this:
  describe(): void {
    console.log(`Area: ${this.area()}, Perimeter: ${this.perimeter()}`);
  }
}

// const s = new Shape(); ❌ Cannot create abstract class directly!

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }
  area(): number      { return Math.PI * this.radius ** 2; }
  perimeter(): number { return 2 * Math.PI * this.radius; }
}

class Rectangle extends Shape {
  constructor(private w: number, private h: number) {
    super();
  }
  area(): number      { return this.w * this.h; }
  perimeter(): number { return 2 * (this.w + this.h); }
}

const c = new Circle(5);
const r = new Rectangle(4, 6);

c.describe();  // Area: 78.54, Perimeter: 31.42
r.describe();  // Area: 24, Perimeter: 20
```

---

## 29. Polymorphism & Method Override

### 🦁 What is it?
- **Override**: A subclass replaces the parent's method with its own version using `override`.
- **Polymorphism**: The same method call does **different things** depending on which object you're calling it on.

### ✅ Why use it?
Write flexible code — treat different objects the same way, but each behaves differently.

### 📌 When to use it?
When different types share a common behavior but each does it differently.

```ts
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  speak(): string {
    return "...";
  }
}

class Dog extends Animal {
  override speak(): string {
    return "Woof!";
  }
}

class Cat extends Animal {
  override speak(): string {
    return "Meow!";
  }
}

class Duck extends Animal {
  override speak(): string {
    return "Quack!";
  }
}

// Polymorphism — same code, different behavior:
const animals: Animal[] = [
  new Dog("Rex"),
  new Cat("Whiskers"),
  new Duck("Donald")
];

animals.forEach(animal => {
  console.log(`${animal.name} says: ${animal.speak()}`);
});
// Rex says: Woof!
// Whiskers says: Meow!
// Donald says: Quack!
```

---

## 30. Generics

### 🧩 What is it?
Generics let you write a function or class that works with **any type**, while still being type-safe. You use `<T>` as a placeholder — you fill it in when you call the function.

### ✅ Why use it?
Write code **once** that works with any type instead of writing the same function multiple times for string, number, etc.

### 📌 When to use it?
Utility functions (first item, last item, wrap in array), reusable data structures (stacks, queues, lists).

```ts
// Without generics — loses type info:
function firstItem(arr: any[]): any {
  return arr[0];
}
const x = firstItem([1, 2, 3]); // x is 'any' — unsafe!

// With generics — type-safe AND flexible:
function firstItem<T>(arr: T[]): T {
  return arr[0];
}

const num = firstItem([1, 2, 3]);         // TypeScript knows: number
const str = firstItem(["a", "b", "c"]);   // TypeScript knows: string
const obj = firstItem([{ id: 1 }, { id: 2 }]); // TypeScript knows: { id: number }

// Multiple generic types:
function pair<A, B>(first: A, second: B): { first: A; second: B } {
  return { first, second };
}

const p = pair("name", 42);
// p.first = string, p.second = number ✅
```

> 💡 **Think of `<T>` like a variable for a type.** You fill it in when you use the function.

---

## 31. Generic Classes

### 📦 What is it?
Classes can also be generic — useful for building **reusable data structures** like stacks, queues, lists.

### ✅ Why use it?
One class that works safely with any type.

### 📌 When to use it?
Data structures, wrappers, containers.

```ts
// A stack that works with any type:
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

// Stack of numbers:
const numStack = new Stack<number>();
numStack.push(10);
numStack.push(20);
numStack.push(30);
console.log(numStack.pop());  // 30
console.log(numStack.peek()); // 20

// Stack of strings:
const strStack = new Stack<string>();
strStack.push("first");
strStack.push("second");
console.log(strStack.pop());  // "second"
```

---

## 32. Generics with Interfaces

### 🔗 What is it?
Interfaces can also be generic — describe a shape that works with different types.

### ✅ Why use it?
Reusable interface patterns — like an API response wrapper that works for any data type.

### 📌 When to use it?
API responses, wrappers, generic containers.

```ts
// Generic interface for API responses:
interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: string;
}

// Use it with different types:
const userResponse: ApiResponse<{ name: string; age: number }> = {
  success: true,
  data: { name: "Ali", age: 25 }
};

const listResponse: ApiResponse<string[]> = {
  success: true,
  data: ["item1", "item2", "item3"]
};

// Generic repository pattern:
interface Repository<T> {
  findById(id: number): T | null;
  save(item: T): void;
  delete(id: number): void;
}
```

---

## 33. Type Assertions

### 🔎 What is it?
Type assertions tell TypeScript "**trust me, I know the type better than you**." Use the `as` keyword.

### ✅ Why use it?
When you know more about the type than TypeScript can figure out — like when working with the DOM.

### 📌 When to use it?
DOM elements, API responses, converting between compatible types. Use carefully!

```ts
// TypeScript thinks getElementById returns HTMLElement | null
const el = document.getElementById("myInput");
// el.value ← ❌ Error — HTMLElement doesn't have .value

// You know it's an input — tell TypeScript:
const el = document.getElementById("myInput") as HTMLInputElement;
el.value = "Hello";  // ✅ Now TypeScript knows .value exists

// Another example:
const data: unknown = "Hello, World!";
const str = data as string;
console.log(str.toUpperCase());  // ✅

// Non-null assertion (!) — tells TypeScript: "this is NOT null"
const btn = document.getElementById("submitBtn")!; // The ! means "definitely not null"
btn.addEventListener("click", () => {});  // ✅
```

> 🚨 **Warning:** Only use type assertions when you are 100% sure. Wrong assertions cause runtime errors TypeScript can't catch.

---

## 34. Debugging Tips

### 🐛 What is it?
TypeScript error messages tell you exactly what's wrong and where.

### ✅ Why it matters?
Understanding the error = fixing it fast.

### Most common errors:

```ts
// ──────────────────────────────────────
// ERROR 1: Wrong type (TS2322)
// ──────────────────────────────────────
let age: number = "twenty";
// ❌ Type 'string' is not assignable to type 'number'
// FIX: age = 20

// ──────────────────────────────────────
// ERROR 2: Property doesn't exist (TS2339)
// ──────────────────────────────────────
const user = { name: "Ali" };
console.log(user.email);
// ❌ Property 'email' does not exist on type '{ name: string }'
// FIX: add email to the object, or use optional chaining

// ──────────────────────────────────────
// ERROR 3: Object is possibly null (TS18047)
// ──────────────────────────────────────
const el = document.getElementById("box");
el.style.color = "red";
// ❌ 'el' is possibly 'null'
// FIX: el?.style.color = "red"  OR  (el as HTMLElement).style.color = "red"

// ──────────────────────────────────────
// ERROR 4: Argument type mismatch (TS2345)
// ──────────────────────────────────────
function double(n: number) { return n * 2; }
double("five");
// ❌ Argument of type 'string' is not assignable to parameter of type 'number'
// FIX: double(5)

// ──────────────────────────────────────
// ERROR 5: Missing property (TS2741)
// ──────────────────────────────────────
interface User { name: string; age: number; }
const u: User = { name: "Ali" };
// ❌ Property 'age' is missing in type '{ name: string }'
// FIX: add age to the object
```

### Recommended tsconfig.json settings:

```json
{
  "compilerOptions": {
    "strict": true,         // Catch the most bugs — always enable this!
    "sourceMap": true,      // Shows errors in your .ts file, not compiled .js
    "target": "ES2020",     // Which JavaScript version to output
    "noImplicitAny": true,  // Disallow 'any' unless you write it explicitly
    "strictNullChecks": true // Catch null/undefined bugs
  }
}
```

> ✅ **Always turn on `"strict": true`** — it enables the strongest safety checks.

---

## 🚀 Quick Reference Cheat Sheet

```ts
// ─── BASIC TYPES ───────────────────────────────
let name: string = "Ali";
let age: number = 25;
let isOn: boolean = true;
let anything: any = "whatever";

// ─── OBJECTS ───────────────────────────────────
let user: { name: string; age: number } = { name: "Ali", age: 25 };

// ─── FUNCTIONS ─────────────────────────────────
function add(a: number, b: number): number { return a + b; }
const add = (a: number, b: number): number => a + b;
function log(msg: string): void { console.log(msg); }

// ─── OPTIONAL & DEFAULT ────────────────────────
function greet(name: string, title?: string) { ... }
function greet(name: string, title = "Mr") { ... }

// ─── UNION & LITERAL ───────────────────────────
let id: string | number;
let size: "small" | "medium" | "large";

// ─── TYPE ALIAS ────────────────────────────────
type ID = string | number;
type User = { name: string; age: number };

// ─── INTERFACE ─────────────────────────────────
interface User { name: string; age: number; email?: string; }

// ─── ARRAYS & TUPLES ───────────────────────────
let names: string[] = ["Ali", "Sara"];
let point: [number, number] = [10, 20];

// ─── ENUM ──────────────────────────────────────
enum Status { Active = "ACTIVE", Inactive = "INACTIVE" }

// ─── CLASS ─────────────────────────────────────
class Person {
  constructor(public name: string, private age: number) {}
  greet() { return `Hi, I'm ${this.name}`; }
}

// ─── GENERICS ──────────────────────────────────
function first<T>(arr: T[]): T { return arr[0]; }
class Stack<T> { private items: T[] = []; }

// ─── TYPE ASSERTION ────────────────────────────
const el = document.getElementById("x") as HTMLInputElement;
```

---
