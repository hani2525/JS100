//띄어쓰기를 기준으로 나눠 배열로 담는다.
const scores = prompt('성적을 입력하세요').split(' ');
//전체 점수의 합을 변수로 만들어준다.
let sum = 0;

for(let i=0; i<scores.length; i++){
    //propmt로 받은 값은 문자열이므로 숫자형으로 변환해준다.
    sum += Number(scores[i]);
}

console.log(Math.floor(sum/scores.length));
