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

// ! 3 ornek (Array ornegi for of);

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

// ! 4 ornek (Object ornegi for in);

const welcome2 = (person2) => {
  //   console.log(`Ave , ${person2}`); // keyleri donmek icin marcus, mao,rene
  console.log(`Ave , ${person2.name}`); // { name: 'Marcus Ave' }{ name: 'Mao Ave' }{ name: 'Rene Ave' }
};

const persons2 = {
  marcus: { name: 'Marcus Ave' },
  mao: { name: 'Mao Ave' },
  rene: { name: 'Rene Ave' },
};

for (const name in persons2) {
  //   welcome2(name); // keylerini doner ; marcus, mao,rene
  welcome2(persons2[name]); // { name: 'Marcus Ave' } { name: 'Mao Ave' }{ name: 'Rene Ave' } valuelari doner
  console.log(persons2[name]);
}

/********************************************************************************* */
//Constants
// ! 4 ornek ;
const SALUTATION = 'Ave';

const COLORS = [
  /* 0 */ 'black',
  /* 1 */ 'red',
  /* 2 */ 'green',
  /* 3 */ 'yellow',
  /* 4 */ 'blue',
  /* 5 */ 'magenta',
  /* 6 */ 'cyan',
  /* 7 */ 'white',
];

// Functions

const colorer = (s, color) => `\x1b[3${color}m${s}\x1b[0m`;

const colorize = (name) => {
  let res = '';
  const letters = name.split('');
  let color = 0;
  for (const letter of letters) {
    res += colorer(letter, color++);
    if (color > COLORS.length) color = 0;
  }
  return res;
};

const greetings = (name) =>
  name.includes('Augustus')
    ? `${SALUTATION}, ${colorize(name)}!`
    : `Hello, ${name}!`;

// Usage

const fullName = 'Marcus Aurelius Antoninus Augustus';
console.log(greetings(fullName));

const shortName = 'Marcus Aurelius';
console.log(greetings(shortName));

/****************************************************************************** */

const adder = (initial = 0) => ({
  value: initial,
  steps: [initial],
  add(value) {
    this.steps.push(value);
    this.value += value;
    return this;
  },
});

const Adder = class {
  constructor(initial = 0) {
    this.steps = [initial];
    this.value = initial;
  }

  add(value) {
    this.steps.push(value);
    this.value += value;
    return this;
  }
};

// Usage

{
  const { value, steps } = adder(5).add(-8).add(11);
  console.log(value);
  const [a, b, c] = steps;
  console.log(a, b, c);
}

{
  const { value, steps } = new Adder(5).add(-8).add(11);
  console.log(value);
  const [a, b, c] = steps;
  console.log(a, b, c);
}
