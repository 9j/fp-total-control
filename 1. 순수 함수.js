// 변수나 데이터에 할당 할 수 있음
function add10(a) {
    return a + 10;
}

const add10Arrow = add10;
console.log(add10Arrow);

// 함수를 인자로 사용 할 수 있음
function result(r) {
    return r(100);
}

console.log(result(add10));

// 함수의 결과로 사용 할 수 있음
const fn = () => () => 'fp is better';
console.log(fn());
