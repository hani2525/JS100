//문자열을 배열로 만들어준다.
let word = prompt('문자를 입력하세요').split('');

//빈 배열을 만든다.
let arr = [];
//반복문을 통해 각각의 문자에 접근한다.
for(let i=0; i<word.length; i++){
    //만약 문자가 대문자와 같다면
    if(word[i] === word[i].toUpperCase()){
        //새로운 배열에 소문자로 변환해서 집어넣기
        arr.push(word[i].toLowerCase());
    }else{ //만약 문자가 소문자와 같다면
        //새로운 배열에 대문자로 변환해서 집어넣기
        arr.push(word[i].toUpperCase());
    }
}
//출력할 땐 join()메소드를 통해 배열을 문자열로 만들어주기
console.log(arr.join(''));