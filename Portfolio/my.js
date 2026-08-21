// Initialize the counter tracking variable
let count = 0;

// Grab references to the HTML elements
const counterDisplay = document.getElementById('counter-value');
const decreaseBtn = document.getElementById('decrease-btn');
const resetBtn = document.getElementById('reset-btn');
const increaseBtn = document.getElementById('increase-btn');

// Function to update the screen text
function updateDisplay() {
    counterDisplay.textContent = count;
}

// Event Listeners for click interactions
increaseBtn.addEventListener('click', () => {
    count++;
    updateDisplay();
});

decreaseBtn.addEventListener('click', () => {
    count--;
    updateDisplay();
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateDisplay();
});
