const userRoles = new Map();

userRoles.set("alice", "admin");
userRoles.set("bob", "editor");

console.log(userRoles.get("alice")); // "admin"
console.log(userRoles.has("bob"));   // true
