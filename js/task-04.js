'use strict'

const countTotalSalary = (employees) => {
    const empArr = Object.values(employees);
    let total = 0;

    for (const temp of empArr) {
        total += temp;
    }

return total;
}

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400