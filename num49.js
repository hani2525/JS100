//split()메소드로 공백을 기준으로 배열로 만들어준다.
//sort()메소드를 통해 오름차순으로 배열을 정렬한다.
const nums = prompt('숫자를 입력하세요').split(' ').sort((a,b)=>{
    return a-b;
});
//오름차순 정리로 인해 가장 큰 수가 맨 뒤에 있으니 pop()메소드를 통해 가져온다.
console.log(Number(nums.pop()));