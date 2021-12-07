//하노이의 탑
//원반이 옮겨지는 과정을 기록할 배열
const route = [];

function hanoi(num, start, end, temp){ //원반의 수, 시작기둥, 목표기둥, 보조기둥
    //원판이 한 개 일때는 바로 옮기면 된다. (base case)
    if (num == 1){
        route.push([start, end]);
        return 1;
    }

    //원반의 n-1개를 경유 기둥으로 옮긴다.(recursive case)
    hanoi(num-1, start, temp, end);
    //가장 큰 원반은 목표 기둥으로
    route.push([start, end]);
    //경유 기둥과 시작 기둥을 바꾼다.
    hanoi(num-1, temp, end, start); 
}

hanoi(3, 'A', 'B', 'C');
console.log(route);
console.log(route.length);