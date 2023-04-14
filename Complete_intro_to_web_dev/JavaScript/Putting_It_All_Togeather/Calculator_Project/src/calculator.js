

//string.parseInt() will turn string to number

const currentDisplay = document.querySelector(".display");
const erase = document.querySelector(".erase");
const digit = document.querySelector(".digit");
const operator = document.querySelector(".operator");


if (!currentDisplay) {
  console.error("Error: Could not find element with class 'display'");
}


// turn this to true if you want console log for testing
const test = false;

let displayNumberString = null;

  const getAnswer = () => {
    return calculate(equation);
}


const getDisplay = () => {
    const num = currentDisplay.innerText;

    if (typeof parseInt(num,0) !== "number" || isNaN(num)) {
        console.error("Incorrect type");
        return;
      }
    
        return parseInt(num,0);

    // Print only when testing
    if (test) {

        console.log(num);

    }

}

const setDisplay = (num) => {
    displayNumberString = num;
    currentDisplay.innerText = num;

}


const equation = [];


// This function takes an array of numbers and operators, and calculates the result based on the operators and operands in the array

const calculate = (arr) => {

  // Set the first value in the array as the initial result
  let result = arr[0];

  // Loop through the array, starting at index 1 and incrementing by 2 each time
  // This skips the operands, and only looks at the operators
  for (let i = 1; i < arr.length; i += 2) {

      // Get the operator at the current index
      const operator = arr[i];

      // Get the operand (number) at the next index
      const operand = arr[i + 1];

      // Check if the operand is not a number
      if (isNaN(operand)) {
          return "Error: Invalid input";
      }

      // Based on the operator, perform the appropriate calculation and update the result
      switch (operator) {
          case "+":
              result += operand;
              break;
          case "-":
              result -= operand;
              break;
          case "x":
              result *= operand;
              break;
          case "÷":

              //could make this more robust, but should be fine for this exercise
              //trying to divide by zero will just make everything into zero, i think this is a decent workaround
              if (operand === 0) {
                return 0;
              }

              result /= operand;
              break;
          default:
              return "Error: Invalid operator";
      }
  }

  // Return the final result
  return result;
}


  const clear = ()=> {
    setDisplay(null);
    equation.length = 0;
  }

  const backSpace = () => {

    //test
    if (test) {
        console.log(displayNumberString);
    }

    if (displayNumberString !== null || displayNumberString.length > 0) {
        if (typeof displayNumberString ==="number" || displayNumberString !== null) {displayNumberString = displayNumberString.toString()}
        displayNumberString = displayNumberString.slice(0, -1); // remove last character from string
        setDisplay(displayNumberString);
    }


  }


digit.addEventListener("click", function() {

    if (displayNumberString === null) {

        displayNumberString = event.target.innerText;

    }

    else {

        displayNumberString = displayNumberString + event.target.innerText;
    }

    setDisplay(displayNumberString);


    // Testing
    if (test) {
        console.log(event.target.innerText);
        console.log(displayNumberString);
    }
});


operator.addEventListener("click", function() {

    let operatorValue = event.target.innerText;
    const equationLastValue  = equation[equation.length - 1]

    // test
    if (test) {
        console.log(equationLastValue);
    }

        if (operatorValue === "=") {
            equation.push(getDisplay());
            const equationValue = calculate(equation);
            setDisplay(equationValue);
            equation.length = 0;
        }

        /*
        This else if condition checks if the equation array is empty or if the last value in the equation array is a number. 
        If either of these conditions is true, the current display value is added to the equation array, followed by the operator value. 
        The display is then set to null to prepare for the next input.
        */

          else if (equation.length === 0 || !isNaN(equationLastValue)) {
        
            equation.push(getDisplay());
            equation.push(operatorValue);
            setDisplay(null);
        

        }
    
        else {
    

        }
    
        // Test
    
        if(test) {
            console.log(event.target.innerText);
            console.log(equation);
        }

});



erase.addEventListener("click", function(){

    eraseValue = event.target.innerText;
 
    switch (eraseValue ) {
        case "C":
            clear();
            break;
        case "✨":
            backSpace();
            break;
        default:
            return "Error: Invalid Input"

    }
 
    

});