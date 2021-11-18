const word = prompt('문장을 입력하세요.');

//reverse메소드는 배열에서만 가능하다.
//따라서 문자열을 배열로 만들어주고 (split 메소드를 통해)
//reverse 메소드를 통해 순서를 반전시키고
//join 메소드를 통해 배열을 문자열로 만들어준다.

console.log(word.split('').reverse().join(''));