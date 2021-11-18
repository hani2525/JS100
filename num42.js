function solution(a,b){
    //먼저 요일을 배열에 저장한다.
    const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    //Date객체를 통해 날짜를 myDate 변수에 설정한다.
    const myDate = new Date('2020-'+a+'-'+b);
    //getDay()메소드를 통해 해당 날짜의 요일을 숫자로 받아낸다.
    //getDay()메소드는 일요일(0)~토요일(6)을 숫자로 반환한다.
    return week[myDate.getDay()];
    //getDay()를 통해 반환된 숫자를 이용해 week 배열에 접근한 뒤 return
}

console.log(solution(5,24));