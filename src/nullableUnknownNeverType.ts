// tsx src/nullableUnknownNeverType.ts

// Nullable Type
type User = {
  name: string | null;
};
const user: User = {
  name: "chinmoy",
};
console.log(user.name?.toUpperCase() ?? "Name is null");

// Unknown Type
let value: unknown = "";
if (typeof value === "string") {
  console.log(value.toUpperCase());
}

// Never Type
function throwError(message: string): never {
  throw new Error(message);
}