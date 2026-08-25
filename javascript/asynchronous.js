async function fetchUserData() {
  try {
    const response = await fetch("https://github.com");
    const data = await response.json();
    console.log(data.name);
  } catch (err) {
    console.log("Failed to fetch data", err);
  }
}

fetchUserData();
