//문자열을 입력 받아 상수에 담아준다.
const str = prompt('알파벳 입력하세요');
//문자열을 대문자로 변환한 뒤 다른 상수에 담아준다.
const upper = str.toUpperCase();
//두 상수를 비교한 뒤 같으면 YES, 아니면 NO를 출력한다.
if(str === upper){
    console.log('YES');
}else{
    console.log('NO');
}
