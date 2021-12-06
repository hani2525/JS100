
//quick정렬을 해주는 함수 (매개변수로 array를 받는다)
function quickSort(arr){
  //만약 array의 길이가 1이나 그보다 작다면 바로 리턴
  if(arr.length <= 1){
    return arr;
  }
  const pivot = arr[0] //기준점
  const left = []; //기준점보다 작은 수를 넣기 위한 빈 배열
  const right = []; //기준점보다 큰 수를 넣기 위한 빈 배열

  //반복문을 통해 정렬한다.
  for(let i=1; i<arr.length; i++){
    if(arr[i] < pivot){
      //만약 arr[i]가 기준점보다 작다면
      left.push(arr[i]); //left 배열에 집어넣기
    }else {
      //만약 arr[i]가 기준점보다 크다면
      right.push(arr[i]);//right 배열에 집어넣기
    }
  }

  return quickSort(left).concat(pivot, quickSort(right)); //재귀함수를 통해 퀵정렬
}

const array = prompt('배열을 입력하세요.').split(' ').map(n=> parseInt(n,10));
console.log(quickSort(array));