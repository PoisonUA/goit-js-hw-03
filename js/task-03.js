'use strict'

const findBestEmployee = (employees) => {
    const employeesObj = Object.entries(employees);
    let checkValue = 0;
    let bestEmployees;
    
    for (const temp of employeesObj) {
      const employeesKey = temp[0];
      const employeesValue = temp[1];

      if (checkValue < employeesValue) {
        checkValue = employeesValue;
        bestEmployees = employeesKey;
      }

    }
  return bestEmployees;
}
   

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux