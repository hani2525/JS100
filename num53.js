//괄호 문자열을 확인하는 함수
function checkBrackets(arr){
    //괄호의 개수를 확인할 변수
    let count = 0;

    //괄호 개수가 같지 않으면 false를 return
    for(let i=0; i<arr.length; i++){
        if (arr[i] === '('){
            count ++;
        }
        if (arr[i] === ')'){
            count --;
        }
    }

    if(count !==0){
        return false;
    }

    //괄호 배치 확인
    let tmp = [];
    //반복문을 통해 배열을 모두 돈다
    for (let i in arr){
        //'('이라면 tmp 배열에 넣기
        if(arr[i] === '('){
            tmp.push('(');
        }
        //')'이라면 tmp 배열에서 빼기
        if(arr[i] === ')'){
            //tmp에 아무것도 없다면 잘못 된거니 false를 리턴
            if(tmp.length === 0){
                return false;
            }
            tmp.pop();
        }
    }
    
    return true;
}

const n = prompt('입력해주세요.').split('');

if(checkBrackets(n) === true){
    console.log('YES');
} else {
    console.log('NO');
}