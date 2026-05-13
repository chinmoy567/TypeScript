// ========================================
// MAPPED TYPES EXAMPLE
// ========================================

type User = {
    name: string;
    age: number;
    email: string;
};


// ========================================
// MAKE ALL PROPERTIES OPTIONAL
// ========================================

type OptionalUser = {
    [K in keyof User]?: User[K];
};


// ========================================
// ORIGINAL OBJECT
// ========================================

const user1: User = {
    name: "Sourav",
    age: 22,
    email: "sourav@gmail.com"
};


// ========================================
// OPTIONAL OBJECT
// ========================================

const user2: OptionalUser = {
    name: "Rahim"
};

console.log(user1);
console.log(user2);