function multiply(a, b) {
  return a * b;
}

let multiplyByTwo = multiply.bind(this, 2); // partially given 2

console.log(multiplyByTwo(4)); // then carried 2 in multiplyByTwo function and multiplied it with 4

let multiplyByTen = multiply.bind(this, 10); // partially given 10

console.log(multiplyByTen(4)); // then carried 10 and multiply it by 4
