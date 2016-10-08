// LAB 1

var inputUnit = "F";
var inputTemp = 75;

var outputTemp;

if(inputUnit === "F"){
  outputTemp = (inputTemp - 32) * (5/9);
  console.log("The temperature " + inputTemp + " degrees Fahrenheit is equal to " + outputTemp + " degrees Celsius.")
}
else if (inputUnit === "C"){
  outputTemp = (inputTemp * (9/5)) + 32;
  console.log("The temperature " + inputTemp + " degrees Celsius is equal to " + outputTemp + " degrees Fahrenheit.")
}

//figure it out - FizzBuzz!

for (var i = 0; i <= 100; i++) {
    if (((i%3)===0) && ((i%5)===0)){
      console.log("FizzBuzz");
    } else if ((i%5)===0) {
      console.log("Buzz");
    } else if ((i%3)===0) {
      console.log("Fizz");
    } else {
      console.log(i);
      }
}
