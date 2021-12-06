//연속되는 수인지 판별하는 함수
function continuity(arr){
    
    //반복문을 통해 확인
    for(let i=0; i<arr.length-1; i++){
        //i번째 숫자와 그 다음 숫자가 1씩 차이가 나지 않는다면
        if(arr[i]+1 !== arr[i+1]){
            return false //false를 리턴
        }
    }

    return true; //아니면 true리턴
}

const array = prompt('숫자를 입력하세요').split(' ').map(n => parseInt(n,10));
if(continuity(array)===true){
    console.log('YES');
}else{
    console.log('NO');
}