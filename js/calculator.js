

var calculator = (function(){

	var total = 0;
	var memory = 0;
	var displayArr = [];
	var resultNum  = 0;

	

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

	//evaluate function operation in 'display'
function equalsTo(operator){
	var result = eval(document.getElementById('display').innerHTML);
	console.log(result)
	return result;

}

function display(num){
	//displayArr.push(num);  
	//var numbers = parseInt(displayArr.join(''));
	//saveMemory(numbers);
	//return numbers;
}

function recallMemory(){
  return memory;
}

  /**
   * Stores the value of `total` to `memory`
   */
function saveMemory(num){
  memory = num;
  return memory;
}

  /**
   * Clear the value stored at `memory`
   */
function clear(){
  return '';
}


function getBalance(){ 
	if(memory > 0){
 console.log(memory)
	return memory;
}else{
	return 0;
	}
}

function depositCash(num){
	memory = total + num;
	return displayArr;
	//add the amount currently in the [display] to the cash reg, then clears the display
}

function withdrawCash(num){
	memory = total - num;
	return displayArr;
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

