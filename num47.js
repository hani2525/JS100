const people = {
    이호준: "01050442903",
    이호상: "01051442904",
    이준호: "01050342904",
    이호준: "01050442903",
    이준: "01050412904",
    이호: "01050443904",
    이호준: "01050442903"
  };

  //새로운 set 객체를 만들어준다.
  let result = new Set();
  //for in 반복문을 통해 people에 있는 객체에 접근하고
  //result에 담아준다 (set객체에는 중복된 값이 들어갈 수 없다)
  for(let key in people){
      result.add(people[key]);//set에는 새로운 객체를 넣을 때 add()메소드를 사용
  }
  //size는 set 객체 내 값의 개수를 반환한다.
  console.log(result.size)