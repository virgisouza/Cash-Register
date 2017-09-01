
//shows numbers on display screen 
//add event listener to keyboard to initialize display function with correct number showing.

window.addEventListener('keydown', function(event){
	var regDisplay = document.getElementById('display');
	regDisplay.innerHTML = calculator.display(event.key);
}, true);


var clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', calculator.clear(), true);
//document.getElementById('display').innerHTML = calculator.clear();


/*
## cash_register.js

Write the rest of the logic to perform the necessary functions to achieve the goal.  
You may create modules within `cash_register.js` in order to separate concerns.  
For example, the function of updating the `( display )` should be handled in one place, or one module, instead of interweaved throughout the spaghetti.  

*/