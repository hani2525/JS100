function circle(radius){
    return radius*radius*3.14;
}
// prompt로 숫자를 입력 받고 그 값을 상수에 저장
const r = prompt('원의 반지름을 입력하세요');

console.log(circle(r));