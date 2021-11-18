//Date객체를 통해 현재 날짜를 받아낸다.
let today = new Date();
//geTime()은 1970년 1월 1일 00:00:00 UTC와 주어진 날짜 사이의 경과 시간(밀리 초)을 나타낸다.
let answer = today.getTime();
//1970년부터 흐른 년수를 구하기 : getTime을 통해 초를 얻어내면 3600(60초, 60분), 24(시간), 365(일), 1000(밀리)로 나눠준다.
//그리고 난 뒤 1970을 더하면 주어진 날짜의 연도를 알 수 있다.
answer = Math.floor(answer/(3600*24*365*1000))+1970;

console.log(answer);