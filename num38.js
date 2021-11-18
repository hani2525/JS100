//점수 입력을 받은 뒤 배열로 만들어주고 숫자형으로 변환함 (map 메소드를 통해서)
const scores = prompt('점수 입력').split(' ').map(function(n){
    return parseInt(n, 10);
});

//sort() 메소드를 통해 오름차순 정렬
scores.sort((a,b) => {
    return a-b;
});

//몇명을 사줘야하는지 셀 count 변수 선언
let count = 0;
//상위 3위의 점수를 담을 배열 선언
let arr = [];
//상위 3위 점수를 담을 때 까지만 반복문 선언
while(arr.length<3){
    //배열 끝에서 항목(가장 큰 수)를 제거한 후 변수 n에 담아준다.
    let n = scores.pop();
    //arr 배열에 n이 없다면 arr 배열에 n을 넣어준다.
    if(!arr.includes(n)){
        arr.push(n);
    }
    //count를 세준다.
    count += 1;
}

console.log(count);