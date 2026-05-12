// ========================================
// GENERIC CONSTRAINT IN TYPESCRIPT
// ========================================

// T can be any datatype
// BUT it must have a name property

function printName<T extends { name: string }>(person: T): void {
    console.log(person.name);
}

// Valid
printName({ name: "Sourav", age: 22 });

// Invalid
// printName({ age: 22 });


// ========================================
// CONSTRAINT USING LENGTH PROPERTY
// ========================================

// T must contain length property

function printLength<T extends { length: number }>(item: T): void {
    console.log(item.length);
}

// Valid
printLength("Hello");
printLength([1, 2, 3, 4]);

// Invalid
// printLength(100);