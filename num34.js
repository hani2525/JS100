//먼저 정렬되지 않은 키를 입력 받는다.
const unsorted = prompt('키를 입력하세요');
let sorted = unsorted
            //먼저 띄어쓰기를 기준으로 나누어 배열로 만든다.
            .split(" ")
            //sort()메소드를 통해 오름차순으로 정렬한다.
            .sort(function(a,b){
                    return a-b;
                })
            //다시 띄어쓰기를 기준으로 문자열로 합쳐준다.
            .join(" ");

//문자열끼리 비교
if(unsorted === sorted){
    console.log('YES');
}else{
    console.log('NO');
}