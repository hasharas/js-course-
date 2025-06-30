

// const new = Math.max(...newArr);

// console.log('numbers :', new );

// const sum = newArr.reduce((acc, curr) => acc + curr, 0)

// console.log('Sum of Arr :', sum);
const newArr = [1, 3, 4, 2, 4, 20, 30, 13, 4, 58];
// const evenNum = () => {
//       for (let i = 0; i < newArr.length; i++) {
//             if (newArr[i] % 2 === 0) {
//                   console.log(newArr[i]);
//             }
//       }
// }

// evenNum();

const eventNum = newArr.filter(num => num % 2 === 0);

console.log('even numbers :', eventNum)