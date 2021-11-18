const dec = Number(prompt('숫자를 입력하세요'));

//toString()메소드를 사용하면 10진수 숫자를 2진수로 쉽게 바꿀 수 있다.
function toBinary(num){
    return num.toString(2);//대신 문자열로 반환
}

console.log(toBinary(dec));

//JS100제 제시 답안
let dec = prompt('10진수를 입력해주세요.');
/*
    10진수 숫자를 2진수로 구하는 방법 중 하나는
    2로 0이 몫이 1이 될 때까지 나누는 것이다.
*/
//2로 나눈 나머지와 몫을 넣어준다.
let arrBinary = [];
let result = '';

//주어진 숫자가 0이 될 때 까지 계속 반복한다.
while (dec) {
    //a를 2로 나눈 나머지를 배열에 집어 넣는다.
    arrBinary.push(dec%2);
    //문자열인 a를 2로 나눈 뒤 숫자로 바꿔준다.
    dec = Math.floor(dec/2);
}

console.log(arrBinary.reverse().join(""));