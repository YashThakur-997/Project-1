

/*function calculator(num1, num2, operator) {
    let result;
    switch(operator){
        case '+':
            result = num1 + num2;
            result(result);
            break;

        case '-':
            result = num1 - num2;
            result(result);
            break;

        case '*':
            result = num1 * num2;
            result(result);
            break;

        case '/':
            if (num2 === 0) {
                return "Error: Division by zero is not allowed.";
            }
            result = num1 / num2;
            result(result);
            break;

        default:
            return "Error: Invalid operator. Please use +, -, *, or /.";

    }
}*/

const buttons= document.querySelectorAll('.num');
const display1 = document.getElementById('display');
buttons.forEach(function(button){
    button.addEventListener('click',function() {
        const clickednum=this.value;

          if (clickednum === 'C') {
            display1.innerHTML = "";
            return;
        }

        if (clickednum === '=') {
           let result= eval(display1.innerHTML);
           if(typeof result === 'number' && !Number.isInteger(result)) {
            result=result.toFixed(6);
           }
            display1.innerHTML = result;
            return;
        }
       
        display1.innerHTML += clickednum;
})
    });