// ========================================
// CONDITIONAL TYPE EXAMPLE
// ========================================

type IsString<T> = T extends string ? "STRING" : "NOT STRING";

type A = IsString<string>;
type B = IsString<number>;


// ========================================
// CONDITIONAL TYPE WITH ARRAY
// ========================================

type ArrayType<T> = T extends string ? string[] : number[];

type C = ArrayType<string>;
type D = ArrayType<number>;


// ========================================
// FUNCTION EXAMPLE
// ========================================

function showType<T>(value: T): IsString<T> {
    if (typeof value === "string") {
        return "STRING" as IsString<T>;
    }

    return "NOT STRING" as IsString<T>;
}

console.log(showType("Hello"));
console.log(showType(100));