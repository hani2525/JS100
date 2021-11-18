const a = Number(prompt('숫자를 입력하세요'));
const b = Number(prompt('숫자를 입력하세요'));


//배열 생성
let arr = [];
//더한 값을 담을 변수 선언
let sum = 0;
//주어진 숫자만큼 반복하고 숫자를 문자열로 배열에 저장한다.
for(let i=a; i<=b; i++){
    arr.push(i);
} 
//문자열로 붙여준 다음에 다시 배열로 나눠주고 숫자형으로 변환
arr = arr.join('');
arr = arr.split('').map(x => parseInt(x,10));
//반복문을 통해 arr에 접근하여 값을 더해준다.
for(let i=0; i<arr.length; i++){
    sum += arr[i];
}


console.log(sum);

//JS100제 제시 답안

/*

let arr = [];
let sum = 0;

for (let i=0; i<20; i++){
    arr[i] = i+1;
}
//forEach()메소드는 주어진 함수를 배열 요소 각각에 대해 실행
arr.forEach((n)=> {
    while(n !== 0){
        sum += (n%10);
        n = Math.floor(n/10);
    }
})

console.log(sum);
*/