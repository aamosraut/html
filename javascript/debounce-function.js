function debounce(func, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

const processSearch = debounce(() => console.log("Searching API..."), 500);
// Triggered repeatedly but executes only once 500ms after typing stops
