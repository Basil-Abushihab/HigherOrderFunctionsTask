//ex1

function isString(str) {
  return typeof str === "string";
}

function powerArray(arr) {
  if (
    arr instanceof Array &&
    arr.every((num) => Number.isInteger(parseInt(num, 10)))
  ) {
    let newArr = [];
    arr.forEach((element) => {
      console.log(element);
    });
    newArr = arr.map((element) => parseInt(element, 10));
    newArr = newArr.map((element) => Math.pow(element, 2));
    newArr.forEach((element) => {
      console.log(element);
    });
  } else {
    alert("please enter a valid array of integers");
  }
}

// powerArray(prompt("Please enter an array of integers").split(""));

//ex2

function arrEvenOdd(arr) {
  const parts = arr.match(/\d+|[a-zA-Z]+/g);

  // Convert each part, splitting digits into individual numbers
  arr = parts.flatMap((part) => {
    if (/\d/.test(part)) {
      return part.split("").map(Number);
    } else {
      return part;
    }
  });
  arr = arr.map((element) => {
    if (isString(element)) {
      return "N/A";
    } else if (element % 2 == 0) return "Even";
    else return "Odd";
  });
  return arr;
}

// console.log(arrEvenOdd(prompt("Enter a string")));

//ex3

function printArr(arr) {
  arr.forEach((element) => {
    console.log(element);
  });
}

printArr(["Rawan", "Wesam", "Hind", "Muhamed", "Esraa", "Dareen"]);

//ex4

function fizzBuzz(arr) {
  let outputArr = [];
  arr.forEach((element) => {
    if (parseInt(element, 10) % 3 == 0) outputArr.push("Fizz");
    else if (parseInt(element, 10) % 5 == 0) outputArr.push("Buzz");
    else if (parseInt(element, 10) % 3 == 0 && parseInt(element, 10) % 5 == 0)
      outputArr.push("FizzBuzz");
    else outputArr.push(element);
  });
  return outputArr;
}

// console.log(fizzBuzz(prompt("Enter array of numbers").split("")));
