// ========================================
// BASE TYPE
// ========================================

type User = {
    name: string;
    age: number;
    email: string;
};


// ========================================
// PARTIAL<T>
// Makes all properties optional
// ========================================

type PartialUser = Partial<User>;

const user1: PartialUser = {
    name: "Sourav"
};

console.log(user1);


// ========================================
// READONLY<T>
// Makes all properties readonly
// ========================================

type ReadonlyUser = Readonly<User>;

const user2: ReadonlyUser = {
    name: "Rahim",
    age: 22,
    email: "rahim@gmail.com"
};

// Error
// user2.name = "Karim";

console.log(user2);


// ========================================
// REQUIRED<T>
// Makes all properties required
// ========================================

type OptionalType = {
    name?: string;
    age?: number;
};

type RequiredUser = Required<OptionalType>;

const user3: RequiredUser = {
    name: "Hasan",
    age: 25
};

console.log(user3);


// ========================================
// PICK<T, K>
// Select specific properties
// ========================================

type UserName = Pick<User, "name" | "email">;

const user4: UserName = {
    name: "Sourav",
    email: "sourav@gmail.com"
};

console.log(user4);


// ========================================
// OMIT<T, K>
// Remove specific properties
// ========================================

type UserWithoutEmail = Omit<User, "email">;

const user5: UserWithoutEmail = {
    name: "Sakib",
    age: 30
};

console.log(user5);


// ========================================
// RECORD<K, T>
// Create object type
// ========================================

type Users = Record<string, number>;

const marks: Users = {
    Sourav: 90,
    Rahim: 85,
    Karim: 95
};

console.log(marks);


// ========================================
// RETURNTYPE<T>
// Get function return type
// ========================================

function getUser() {
    return {
        name: "Sourav",
        age: 22
    };
}

type UserReturnType = ReturnType<typeof getUser>;

const user6: UserReturnType = {
    name: "Sourav",
    age: 22
};

console.log(user6);