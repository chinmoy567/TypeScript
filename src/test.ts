// tsx src/test.ts



function add(...nums: number[]) {
  return nums.reduce((a, b) => a + b, 0);
}

const arr = [2, 2, 3];

console.log(add(...arr)); // spread + rest