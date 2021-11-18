const names = prompt('이름을 입력하세요').split(' ');
const scores = prompt('수학 점수를 입력하세요').split(' ');

//먼저 객체를 생성한 다음
const students = {};

//반복문을 통해 객체에 저장해준다.
//단 value의 값은 숫자형으로 저장해줘야 하기 때문에 형변환을 해준다.
for(let i=0; i<names.length; i++){
    students[names[i]]= Number(scores[i]);
}
console.log(students);