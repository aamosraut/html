class User {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }
  logIn() {
    return `${this.name} has logged in as ${this.role}.`;
  }
}

const admin = new User("Sarah", "Admin");
console.log(admin.logIn()); // "Sarah has logged in as Admin."
