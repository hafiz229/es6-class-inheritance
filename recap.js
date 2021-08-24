// 1. let and const
const first = "MAC";
let phone = "iphone 15";
phone = "Samsung Galaxy S17";
// 2. default parameter
// 5. spread / ...
function maxNumber(array = []) {
  const max = Math.max(...array);
  return max;
}
const biggest = maxNumber();
// console.log(biggest);

// 3. template string
const myNotes = `I got a new phone, ${phone} is my new phone`;
// console.log(myNotes);

// 4. arrow function
// function square(x) {
//   return x * x;
// }
const square = (x) => x * x;
console.log(square(8));
