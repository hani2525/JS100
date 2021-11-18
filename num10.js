function makeStar(num){  
    for(let i=1; i<=num; i++){
        //star라는 빈 변수를 만들어주고 반복문이 실행될 때 마다 초기화 시켜준다.
      let star="";
      for(let k=1; k<=num-i; k++){
        //별 앞에 들어갈 공백을 만드는 반복문
        //점점 내려갈수록 공백이 줄어들기 때문에 범위는 i씩 줄여준다.
        star= star + " ";
      }
      for(let j=1; j<=i*2-1; j++){
        //별 찍기
        star = star + "*";
      }
    console.log(star);
    }
  }
  
  makeStar(5);