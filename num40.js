//몸무게를 담을 변수와 인원수를 셀 변수를 만들어준다.
let total = 0;
let count = 0;

const limit = prompt('제한 무게를 입력하세요');
const n = prompt('탑승할 인원 수를 입력하세요.');

//탑승 인원 수 만큼 반복문을 돌려 인원의 몸무게를 얻어낸다.
for(let i=1; i<=n; i++){
    total += Number(prompt('몸무게를 입력하세요'));
    if(total <= limit){
        count = i;
    }
}

console.log(count);
