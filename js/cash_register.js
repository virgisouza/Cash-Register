
//digit event listeners

//00
document.getElementById('digit00').addEventListener('click', function(event){
	document.getElementById('display').innerHTML += this.value;
	console.log(00);
}, true);

//0
document.getElementById('digit0').addEventListener('click', function(event){
	document.getElementById('display').innerHTML += this.value;
	console.log(0);
}, true);

//1
document.getElementById('digit1').addEventListener('click', function(event){
	document.getElementById('display').innerHTML += this.value;
	console.log(1);
}, true);

//2
document.getElementById('digit2').addEventListener('click', function(event){
	document.getElementById('display').innerHTML += this.value;
	console.log(2);
}, true);

//3
document.getElementById('digit3').addEventListener('click', function(event){
	document.getElementById('display').innerHTML += this.value;
	console.log(3);
}, true);

//4
document.getElementById('digit4').addEventListener('click', function(event){
	document.getElementById('display').innerHTML += this.value;
	console.log(4);
}, true);

//5
document.getElementById('digit5').addEventListener('click', function(event){
	document.getElementById('display').innerHTML += this.value;
	console.log(5);
}, true);

//6
document.getElementById('digit6').addEventListener('click', function(event){
	document.getElementById('display').innerHTML += this.value;
	console.log(6);
}, true);

//7
document.getElementById('digit7').addEventListener('click', function(event){
	document.getElementById('display').innerHTML += this.value;
	console.log(7);
}, true);


//8
document.getElementById('digit8').addEventListener('click', function(event){
	document.getElementById('display').innerHTML += this.value;
	console.log(8);
}, true);

//9
document.getElementById('digit9').addEventListener('click', function(event){
	document.getElementById('display').innerHTML += this.value;
	console.log(9);
}, true);

//decimal
document.getElementById('digit.').addEventListener('click', function(event){
	document.getElementById('display').innerHTML += this.value;
}, true);

//operations event listeners

//add
document.getElementById('addOperation').addEventListener('click', function(event){
	document.getElementById('display').innerHTML += this.value;
}, true);

//subtract
document.getElementById('subtractOperation').addEventListener('click', function(event){
	document.getElementById('display').innerHTML += this.value;
	console.log('-'); 
}, true);

//divide
document.getElementById('divideOperation').addEventListener('click', function(event){
	document.getElementById('display').innerHTML += this.value;
}, true);

//multiply
document.getElementById('multiplyOperation').addEventListener('click', function(event){
	document.getElementById('display').innerHTML += this.value;
}, true);

//equalsTo
document.getElementById('equalsToOperation').addEventListener('click', function(event){
	document.getElementById('display').innerHTML = calculator.equalsTo();
	console.log('equalsTo')
}, true);

//clear
 document.getElementById('clearButton').addEventListener('click',function (event){
 	document.getElementById('display').innerHTML = calculator.clear();
 	console.log('clear')
 }, true);


//getBalance
document.getElementById('getBalanceButton').addEventListener('click', function(event){
	document.getElementById('display').innerHTML = calculator.getBalance();
	console.log('getBalance');
}, true);

//depositCash

//withdrawCash



/*
## cash_register.js

Write the rest of the logic to perform the necessary functions to achieve the goal.  
You may create modules within `cash_register.js` in order to separate concerns.  
For example, the function of updating the `( display )` should be handled in one place, or one module, instead of interweaved throughout the spaghetti.  

*/