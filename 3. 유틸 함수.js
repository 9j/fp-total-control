function pipe(...fns) {
    return (...x) => {
        const [first, ...others] = fns;
        return others.reduce((val, fn) => fn(val), first(...x));
    };
}
function pipeWith(...fns) {
    return pipe(...fns)();
}

const map = (f) => (iter) => {
    let res = [];
    for (const a of iter) {
        res.push(f(a));
    }
    return res;
};

const filter = (f) => (iter) => {
    let res = [];
    for (const a of iter) {
        if (f(a)) res.push(a);
    }
    return res;
};

const reduce = (f) => (iter) => {
    let acc = 0;
    if (!iter) {
        iter = acc[Symbol.iterator]();
        acc = iter.next().value;
    }
    for (const a of iter) {
        acc = f(acc, a);
    }
    return acc;
};

// EXAM
const products = [
    { name: '반팔티', price: 15000 },
    { name: '긴팔티', price: 20000 },
    { name: '핸드폰케이스', price: 15000 },
    { name: '후드티', price: 30000 },
    { name: '바지', price: 25000 },
];

const getPrice = (a) => a.price;
const exceptPhoneCase = (a) => a.name !== '핸드폰케이스';
const add = (a, b) => a + b;
const getTotalPrice = (a) => reduce(add)(a);

const total_price = pipeWith(() => products, filter(exceptPhoneCase), map(getPrice), getTotalPrice);
console.log(total_price);
