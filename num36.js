const num = prompt('숫자를 입력하세요');

let result = "";

for(let i=1; i<10; i++){
    result += i*num + ' ';
}

console.log(result);