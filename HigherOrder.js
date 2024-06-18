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

powerArray(prompt("Please enter an array of integers").split(""));
