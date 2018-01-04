import numeral from 'numeral';

const courseValue = numeral(1000).format("$ 0,000.00");
console.log(`I will pay ${courseValue}.`);
