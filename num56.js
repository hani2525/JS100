
//한국의 면적과 가장 비슷한 국가와 그 차이를 출력하세요.

//입력 값
const nationWidth = {
         'korea': 220877,
         'Rusia': 17098242,
         'China': 9596961,
         'France': 543965,
         'Japan': 377915,
         'England' : 242900,
    }

//기준 값 (한국의 면적)
const w = nationWidth['korea'];
//Object에서 한국의 면적을 제거
delete nationWidth['korea'];

//Object 내장 함수를 이용해서 nationWidth의 key name-value를 배열로 저장
const entry = Object.entries(nationWidth);
//Object 내장 함수를 이용해서 nationWidth의 value를 배열로 저장
const values = Object.values(nationWidth);

//gap에 nationWidth 중 면적의 최댓값 저장
let gap = Math.max.apply(null, values);
//정답을 담을 배열 생성
let item = [];

for(let i in entry){
    //면적의 차이가 gap보다 작다면
    if(gap > Math.abs(entry[i][1]-w)){
        //다음 수와 비교하기 위해 gap에 재할당
        gap = Math.abs(entry[i][1]-w);
        item = entry[i];
    }
}
//item[0에는 국가명이 들어있고 item[1]에는 면적이 들어있다.
//면적의 차이를 출력하라고 했으니 item[1] - w (korea 면적)을 해준다.
console.log(item[0], item[1] - w);