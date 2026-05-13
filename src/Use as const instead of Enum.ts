// ========================================
// USING "as const" INSTEAD OF ENUM
// ========================================

const Role = {
    Admin: "ADMIN",
    User: "USER",
    Guest: "GUEST"
} as const;


// Create type from object values
type RoleType = typeof Role[keyof typeof Role];


// Variable using the type
let userRole: RoleType = Role.Admin;

console.log(userRole);


// Valid
userRole = "USER";


// Invalid
// userRole = "MANAGER";