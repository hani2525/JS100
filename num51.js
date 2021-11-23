function mergeSort(arr){
    //배열의 길이가 0또는 1이면 정렬 할 필요가 없으니 바로 return
    if(arr.length <= 1){
        return arr;
    }

    //배열을 반으로 쪼개기
    const mid = Math.floor(arr.length/2);
    //slice() 메소드를 사용해서 길이 0부터 mid 까지 배열로 잘라주기
    const left = arr.slice(0,mid);
    //slice() 메소드를 사용해서 mid 부터 끝까지 배열로 잘라주기
    const right = arr.slice(mid);

    //재귀함수로 배열을 다 쪼개준다.
    //다 쪼개지면 그때서야 merge함수 인자에 넣어준다
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
    //빈 배열을 만들어 준다.
    let result = [];
    //왼쪽의 배열과 오른쪽의 배열을 비교하여 맨 첫번째 수를 비교
    while (left.length && right.length){
        //오른쪽 배열의 첫 수가 크다면 왼쪽 배열 중 첫번째 수를 result에 넣기
        if(left[0] < right[0]){
            result.push(left.shift());
        } else {
          //왼쪽 배열의 첫 수가 크다면 오른쪽 배열 중 첫번째 수를 result에 넣기
            result.push(right.shift());
        }
    }
    while (left.length){
        //왼쪽 배열만 숫자가 남는다면 순서대로 넣어주기
        result.push(left.shift());
    }
    while (right.length){
        //오른쪽 배열만 숫자가 남는다면 순서대로 넣어주기
        result.push(right.shift());
    }

    return result;
}