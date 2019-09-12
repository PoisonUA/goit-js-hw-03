'use strict'

const countProps = (obj) => { 
    let i = 0; 
    for (const tempVar in obj) { 
        i += 1;
    }
    return i;
}

console.log(countProps({})); // 0
console.log(countProps({ name: 'Mango', age: 2 })); // 2
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));