let num = Number(prompt('숫자를 입력하세요'));

//자리수의 합을 넣어줄 변수 선언
let result = 0;

//반복문을 통해 숫자를 조각낸다.
//num이 0이 될 때 까지 계속 반복한다. -> 0은 false
while(num){
    //10으로 나누면서 가장 마지막에 있는 숫자를 조각낸다.
    let value = num%10;
    //조각낸 숫자를 result 변수에 더해준다.
    result = result + value;
    //num을 10으로 나눈다.
    num=Math.floor(num/10);
}

console.log(result);