

//ternary operator
const age: number = 20;
const result = age >= 18 ? "Adult" : "Minor";
console.log(result);


// Nullish Coalescing
const userName: string | null = null;
const displayName = userName ?? "Guest";
console.log(displayName);


// Optional Chaining
type User = {
  profile?: {
    name?: string;
  };
};
const user: User = {};
console.log(user?.profile?.name);