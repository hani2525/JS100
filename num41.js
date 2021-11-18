const num = prompt('숫자를 입력하세요');

//소수인지 확인해주는 함수를 만들어준다.
function check(num){
    //2부터 num까지 반복문을 통해 주어진 숫자를 순차적으로 나눠본다.
    for(let i=2; i<num; i++){
        const result = num % i;
        //num을 나눴을 때 딱 떨어지면 소수가 아니므로 NO를 출력
        if(result === 0){
            console.log('NO');
            return false;
        }
    }
    //1도 소수는 아니니 NO를 출력
    if(num === 1){
        console.log('NO');
        return;
    }
    //1을 제외하고 2부터 자신보다 작은 수까지 나눴을 때
    //나누어 떨어지지 않으면 소수이므로 YES를 출력
    console.log('YES');
}

check(num);