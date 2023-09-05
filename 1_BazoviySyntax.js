// https://www.youtube.com/watch?v=xJn3k1f4BiM

'use strict';

// ! 1 ornek
const INTERVAL = 1000;
let counter = 0;
const MAX_VALUE = 10;
let timer = null;

let event = () => {
  if (counter === MAX_VALUE) {
    console.log('The end');
    clearInterval(timer);
    return;
  }
  console.dir({ counter, date: new Date() });
  counter++;
};

console.log('Begin');
timer = setInterval(event, INTERVAL);

/************************************************************************************ */
// ! 2 ornek (Object ornegi)
const welcome = (person) => {
  console.log(person);
  console.log(`Ave , ${person.name}`);
};

const marcus = { name: 'Marcus Ave' };
const mao = { name: 'Mao Ave' };
const cartesius = { name: 'Rene Ave' };

welcome(marcus);
welcome(mao);
welcome(cartesius);

/********************************************* */

// ! 3 ornek (Array ornegi);

const welcome1 = (person1) => {
  console.log(`Ave , ${person1.name}`);
};

const persons = [
  { name: 'Marcus Ave' },
  { name: 'Mao Ave' },
  { name: 'Rene Ave' },
];

for (const person1 of persons) {
  welcome1(person1);
  console.log(person1.name);
}
