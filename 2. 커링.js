function add(a, b) {
    return a + b;
}

console.log(add(10, 5));

console.log([1, 2, 3, 4, 5].map((x) => add(10, x)));

const addCurry = (a) => (b) => a + b;

const add10 = addCurry(10);

console.log(add10(5));

console.log([1, 2, 3, 4, 5].map(add10));

const mult = (a) => (b) => a * b;
