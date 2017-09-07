

var calculator = (function(){

	var total = 0;
	var memory = 0;
	
/*
function add(num){
	total += num;
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
*/
	//evaluate function operation in 'display'
function equalsTo(operator){
	if (document.getElementById('display').innerHTML === ''){
	return '';
	}else{
	total = eval(document.getElementById('display').innerHTML);
	return total;
	}
}

function clear(){
  return '';
}

function getBalance(){ 
	console.log(total)
	return total;

}
	//add the amount currently in the [display] to the cash reg, then clears the display
function depositCash(num){
	memory = eval(document.getElementById('display').innerHTML);
	total += memory;
	return '';

}
	//will remove the amount currently in the [display] to the cash reg, then clears the display
function withdrawCash(num){
	memory = eval(document.getElementById('display').innerHTML);;
	total -= memory;
	return '';

}

	return {

	equalsTo:equalsTo,
	clear: clear,
	getBalance: getBalance,
	depositCash: depositCash,
	withdrawCash: withdrawCash

	//add: add,
	//subtract: subtract,
	//divide: divide,
	//multiply:multiply,
	//display: display,

}

})();

