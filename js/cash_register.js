
//digit event listeners

//00
document.getElementById('digit00').addEventListener('click', function(event){
	var digit00 = document.getElementById('display');
	digit00.innerHTML = calculator.display(00);
	console.log(00);
}, true);

//0
document.getElementById('digit0').addEventListener('click', function(event){
	var digit0 = document.getElementById('display');
	digit0.innerHTML = calculator.display(0);
	console.log(0);
}, true);

//1
document.getElementById('digit1').addEventListener('click', function(event){
	var digit1 = document.getElementById('display');
	digit1.innerHTML = calculator.display(1);
	console.log(1);
}, true);

//2
document.getElementById('digit2').addEventListener('click', function(event){
	var digit2 = document.getElementById('display');
	digit2.innerHTML = calculator.display(2);
	console.log(2);
}, true);

//3
document.getElementById('digit3').addEventListener('click', function(event){
	var digit3 = document.getElementById('display');
	digit3.innerHTML = calculator.display(3);
	console.log(3);
}, true);

//4
document.getElementById('digit4').addEventListener('click', function(event){
	var digit4 = document.getElementById('display');
	digit4.innerHTML = calculator.display(4);
	console.log(4);
}, true);

//5
document.getElementById('digit5').addEventListener('click', function(event){
	var digit5 = document.getElementById('display');
	digit5.innerHTML = calculator.display(5);
	console.log(5);
}, true);

//6
document.getElementById('digit6').addEventListener('click', function(event){
	var digit6 = document.getElementById('display');
	digit6.innerHTML = calculator.display(6);
	console.log(6);
}, true);

//7
document.getElementById('digit7').addEventListener('click', function(event){
	var digit7 = document.getElementById('display');
	digit7.innerHTML = calculator.display(7);
	console.log(7);
}, true);

//8
document.getElementById('digit8').addEventListener('click', function(event){
	var digit8 = document.getElementById('display');
	digit8.innerHTML = calculator.display(8);
	console.log(8);
}, true);

//9
document.getElementById('digit9').addEventListener('click', function(event){
	var digit9 = document.getElementById('display');
	digit9.innerHTML = calculator.display(9);
	console.log(9);
}, true);

//operations event listeners

//add
document.getElementById('addOperation').addEventListener('click', function(event){
	document.getElementById('display').innerHTML = calculator.add();
	console.log('+');
}, true);

//subtract
document.getElementById('subtractOperation').addEventListener('click', function(event){
	document.getElementById('display').innerHTML = calculator.subtract();
	console.log('-'); 
}, true);

//divide
//document.getElementById('divideOperation').addEventListener('click', function(event){

//}, true);

//multiply

//equalsTo

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