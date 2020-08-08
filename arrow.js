// function doubleIt(num) {
//     return num * 2;
// }
// const doubleIt = function (num) {
//     return num * 2;
// }
const doubleIt = num => num * 2;
const result = doubleIt(5);
// console.log(result);

const moreFun = (a, b) => a + b;
const total = moreFun(10, 10);
// console.log(total);
const oneMoreFun = (p, q) => {
    const sum = p + q;
    const multiply = p * q;
    return multiply;
}
const output = oneMoreFun(2, 3);
// console.log(output);
const empty = () => 15;
const show = empty();
console.log(show);