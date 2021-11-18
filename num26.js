//이름과 영문 이름을 객체로 관리를 한 다음 key로 접근 할 수 있게 한다.
const solarSystem = {'수성':'Mercury',
                    '금성':'Venus',
                    '지구':'Earth',
                    '화성':'Mars',
                    '목성':'Jupiter',
                    '토성':'Saturn',
                    '천왕성':'Uranus',
                    '해왕성':'Neptune'
                    }; 

const planet = prompt('행성 이름을 입력하세요.');

console.log(solarSystem[planet]);