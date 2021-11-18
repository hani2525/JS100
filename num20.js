const nums = prompt('숫자를 입력하세요').split(' ');
//split을 통해 배열을 만들어준 것은 문자열이기 때문에 숫자형으로 변환
const firNum = Number(nums[0]);
const secNum = Number(nums[1]);

const quot = firNum/secNum;
const rem = firNum%secNum;

console.log(quot, rem);