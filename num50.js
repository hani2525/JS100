function bubble(arr) {
    //slice()메소드 인자에 아무것도 없다면 똑같이 가져와 복사한다.
    let result = arr.slice(); 
  
    for (let i = 0; i < result.length - 1; i++) {
        //큰 수가 순서대로 뒤에서 부터 정해지기 때문에 i만큼 횟수를 빼준다.
      for (let j=0; j < result.length - i; j++) {
        if (result[j] > result[j + 1]) {
           let tmp = result[j];
           result[j] = result[j+1];
           result[j+1] = tmp;
        }
      }
    }
    return result;
  }
  
  const items = prompt('입력해주세요.').split(' ').map((n) => {
    return parseInt(n, 10);
  });
  
  console.log(bubble(items));