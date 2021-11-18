const nums = prompt('숫자를 입력하세요').split(' ').map(x => parseInt(x,10));
//console.log(nums.reverse());

//또는 for문으로 하려면
const result = [];
for(let i=0; i<nums.length; i++){
    result.unshift(nums[i])
}

console.log(result);