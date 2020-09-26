/*
Pasiteisinimai:D :
Pirma uzduotis: Atsakiau tik i 10 klausimu, nes galvojau, kad
ju tik tiek ir yra, tai visa laika jiem ir isnaudojau:D

Paskutine uzduoti planavau daryt su Python nes galvojau, kad bus labiau logine
Pamates uzduoti nusprendziau daryt su Java bet kazkas blogai buvo su Intellij
Tai galiausiai dariau su JavaScript kuria pradejau mokytis pries 2 dienas, pavyko geriau nei tikejaus
tik su sekmadieniu nesusitvarkiau:Dd


*/

const Shop = {
  _name: 'Toy Shop',
  _adress: 'Vytauto g. 12', 
  _WorkSchedule: {
    monday: "09:00 - 21:00",
    tuesday: "09:00 - 21:00",
    wednesday: "09:00 - 21:00",
    thursday: "10:00 - 21:00",
    friday: "Closed",
    saturday: "09:00 - 21:00",
    sunday: "09:00 - 21:00",
  },
  get name() {
    return this._name;
  },
  get adress(){
    return this._adress
  },
  get WorkSchedule(){
    let arr = Object.entries(this._WorkSchedule);
    let startDay = null
    for(let x = 0; x < arr.length-1; x++){
      
      if(arr[x][1] === arr[x+1][1] && x != arr.length) {
        if(!startDay) {
          startDay = arr[x];
        }

      } else {
        if(startDay) {
          console.log(startDay[0] + '-' + arr[x][0] + ': '+ arr[x][1]);
         
        }
        console.log(arr[x+1][0] + ': '+ arr[x+1][1])
        startDay = null;
      }
    }
     
 return this._WorkSchedule;
  }
};

console.log(Shop.WorkSchedule)
