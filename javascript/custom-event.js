// Listen for the custom event
document.addEventListener("userLoggedIn", (e) => {
  console.log(`Welcome back, ${e.detail.username}`);
});

// Create and trigger the custom event
const loginEvent = new CustomEvent("userLoggedIn", { detail: { username: "Mike" } });
document.dispatchEvent(loginEvent);
