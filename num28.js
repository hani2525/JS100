//먼저 문자열을 입력 받고
const str = prompt('문자열을 입력하세요');
//반복문을 통해 두 글자를 출력한다.
//길이에서 -1을 해주는 이유는 맨 마지막 글자까지만 나오게 하기 위해서
for(let i=0; i<str.length-1; i++){
    console.log(`${str[i]} ${str[i+1]}`);
}