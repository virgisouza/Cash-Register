

var calculator =(function(){

	var total = 0.00;
	var memory = [];
	var disArr = [];

function add(num1, num2){
	num1 = memory;
	console.log(num1)
	total = num1 + num2;
	return total;
}

function subtract(num1, num2){
	total = num1 - num2;
	return total;
}

function divide(num1, num2){
	total = num1 / num2;
	return total;
}

function multiply(num1, num2){
	total = num1 * num2;
	return total;
}

function equalsTo(num){

	return total;
	//initialize function operation 
}

function display(num){
	disArr.push(num);    
	var number = disArr.join(''); 
	memory.push(number);
	return number;
}


function clear(){
	memory = 0;
	disArr.push(memory);
	var clearedOut = disArr.pop();
	return clearedOut;   //will clear out display and show 0.
}


function getBalance(){  //will display current balance
	if(memory.length > 0){
	var newMem = memory.pop();
	return newMem;
}else{
	return memory;
	}
}

function depositCash(num){
	memory = total + num;
	return disArr;
	//add the amount currently in the [display] to the cash reg, then clears the display
}

function withdrawCash(num){
	memory = total - num;
	return disArr;
	//will remove the amount currently in the [display] to the cash reg, then clears the display
}

return {

	add: add,
	subtract: subtract,
	divide: divide,
	multiply:multiply,
	equalsTo:equalsTo,
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