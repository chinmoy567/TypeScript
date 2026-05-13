interface User {
    name: string;
    age: number;
    country: string;
}

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const user: User = {
    name: "Sourav",
    age: 22,
    country: "Bangladesh"
};

console.log(getProperty(user, "name"));
console.log(getProperty(user, "age"));
console.log(getProperty(user, "country"));

// Error
// console.log(getProperty(user, "email"));