// 1)

const firstLetterToUpperCase = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

console.log(firstLetterToUpperCase('heLLO My FRIend'));

// 2

const sayHello = (str) => {
    let name = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

    if(name === 'Mark') {
        alert(`Hi, ${name}`);
    } else {
        alert(`Hello, ${name}`);
    };
};

setTimeout(() => sayHello('John'), 1500);
setTimeout(() => sayHello('Mark'), 1500);

// 3)

const filterStrings = (mass, maxValue) => {
    return mass.filter(el => el.length < maxValue)
};

console.log(filterStrings(['I love u', 'cats', 'smth very very extra-ordinary'], 9));
console.log(filterStrings(['I love u', 'cats', 'sunrise'], 8));





  