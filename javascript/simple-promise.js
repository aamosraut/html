const checkServerStatus = new Promise((resolve, reject) => {
  let online = true; 
  if (online) {
    resolve("Server is running smoothly.");
  } else {
    reject("Server is down.");
  }
});

checkServerStatus
  .then(message => console.log(message))
  .catch(error => console.error(error));
