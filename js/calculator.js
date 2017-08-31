

var calculator =(function(){

	var total = 0;
	var memory = 0;

function add(num){
	total += num;
	return total;
}

function subtract(num){
	total -= num;
	return total;
}

function divide(num){
	total = total / num;
	return total;
}

function multiply(num){
	total = total * num;
	return total;
}

function display(){

}

function clear(){
	//will clear out display
}

function getBalance(){
	//will display current balance
}

function depositCash(){
	//add the amount currently in the [display] to the cash reg, then clears the display
}

function withdrawCash(){
	//will remove the amount currently in the [display] to the cash reg, then clears the display
}

return {

	add: add,
	subtract: subtract,
	divide: divide,
	multiply:multiply,
	display: display,
	clear: clear,
	getBalance: getBalance,
	depositCash: depositCash,
	withdrawCash: withdrawCash

}

})();

/*
## Goal

Create an html5 single page app that looks like a cash register with these buttons. The cash register starts with `$0.00` funds

```
[________________] <-----( display )

[7] [8]  [9]   [÷]  [clear]
[4] [5]  [6]   [×]  [get balance]
[1] [2]  [3]   [-]  [deposit cash]
[0] [00] [.]   [+]  [withdraw cash]
               [=]

```

`( display )` is the primary ui that prints all results  
`[clear]` will clear the display  
`[get balance]` will display the current balance  
`[deposit cash]` will add the amount currently in the `( display )` to the cash register, then clears the display  
`[withdraw cash]` will remove the amount currently in the `( display )` to the cash register, then clears the display  

## calculator.js

Write all calculator logic in `calculator.js` using the [revealing module pattern](http://slides.com/jasonsewell/object-literals-and-ze-module-pattern)  
The module should be named `Calculator` and should only be concerned with performing mathematical computation. 
*/