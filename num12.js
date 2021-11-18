class Wizard{
    constructor (health, mana, armor){
        //js에서 클래스 생성자
      this.health = health;
      this.mana = mana;
      this.armor = armor;
    }
    
    attack(){
      console.log('파이어 볼')
    }
  }
  
  const x = new Wizard(545, 210, 10);
  console.log(x.health, x.mana, x.armor);
  x.attack();