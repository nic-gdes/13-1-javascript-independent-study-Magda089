
let add = document.querySelector("#add");
let decrement = document.querySelector("#decrement");
let output = document.querySelector("#output");

// Add click event listener for the 'add button'

        add.addEventListener("click", function () {
            updateCounter(1); 
        });


// Add click event listener for the 'decrement button'
        decrement.addEventListener("click", function (){
            updateCounter(-1); 
        });

// Function to update the counter value
function updateCounter(value) {
    let result = Number (output.innerText) + value;


// The counter stays between 0 - 10
if (result < 0) {
    result= 0;
} else if (result > 10) {
    result = 0;
}
output.innerText = result;
}
