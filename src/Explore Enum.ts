// ========================================
// ENUM IN TYPESCRIPT
// ========================================

enum Status {
    Success,
    Error,
    Loading
}

console.log(Status.Success); // 0
console.log(Status.Error);   // 1


// ========================================
// STRING ENUM
// ========================================

enum Role {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST"
}

console.log(Role.Admin);