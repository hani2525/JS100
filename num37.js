const names = ['원범', '원범', '혜원', '혜원', '혜원', '유진', '유진'];

//학생의 이름과 받은 표를 정리할 객체 생성
let result = {};
//다득표자를 담을 변수 생성
let winner = "";
//반복문을 통해 객체에 넣어준다.
for(index in names){
    let val = names[index];
    result[val] = result[val] === undefined? 1: result[val] = result[val]+1;
}
/*
Object.keys() 메소드는 주어진 객체의 속성 이름들을 
반복문과 동일한 순서로 된 배열로 반환한다.

reduce() 메소드는 배열의 각 요소에 대해 주어진 함수를 실행하고 결과값을 반환한다.
*/
winner = Object.keys(result).reduce(function(a,b){
    return result[a] > result[b] ? a : b
});

console.log(`${winner}(이)가 총 ${result[winner]}표로 당선되었습니다.`)