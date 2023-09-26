const arr = ["jezus","antanas","grybas"];
const numbers = [1,2,3,4,5,6,7,8,9,10,11,-53,-12,-22];
console.group('1. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{


     const LastArrElementIndex = (arr: string[] ) =>  arr.length;
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  console.log(LastArrElementIndex(arr))
}
console.groupEnd();

console.group('2. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');

{
     const ShowEveryArrIndex = (arr: string[] | number[]) => {
          for( let i = 0; i < arr.length;i++ ){
               console.log(i)
          }
     }
    ShowEveryArrIndex(numbers)
    ShowEveryArrIndex(arr)
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
}
console.groupEnd();

console.group('3. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
     const ShowSomething = (arr: string[]|number[]) => {
          for(let i = 0; i < arr.length; i++){
               console.log(arr[i])
          }
     }

     ShowSomething(arr)
     ShowSomething(numbers)
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
}
console.groupEnd();

console.group('4. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
{
     const ShowSomething = (arr: string[]|number[]) => {
          for(let i = 0; i < arr.length; i++){
               console.log(`[${[i +1]}] => ${arr[i]}`)
          }
     }
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  ShowSomething(arr)
  ShowSomething(numbers)
}
console.groupEnd();

console.group('5. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
     const ShowSomething = (arr: string[]|number[]) => {

          for (let i = arr.length; i >= 0; i--) console.log(arr[i]);
     }
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  ShowSomething(arr)
  ShowSomething(numbers)
}
console.groupEnd();

console.group('6. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
     const ShowSomething = (arr: string[]|number[]) => {
          return console.log(arr.map ((_, i) => i).join(" "))

     }
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  ShowSomething(arr)
  ShowSomething(numbers)
}
console.groupEnd();

console.group('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48 ...');
{
     const ShowSomething = (arr: string[]|number[]) => {
          return console.log(arr.join(" "))

     }
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  ShowSomething(arr)
  ShowSomething(numbers)
}
console.groupEnd();

console.group('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
//  [0]=>17, [1]=>8, [2]=>88 ..
{
     const ShowSomething = (arr: string[]|number[]) => {
          return arr.forEach((item,i )=> console.log(`[${[i]}] => ${item}`))
     }
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  ShowSomething(arr)
  ShowSomething(numbers)
}
console.groupEnd();

console.group('9. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų padaugintų iš 2');
{
     const ShowSomething = (arr: number[]) => {
     
          console.log(arr.map(item => item * 2));
     }
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  ShowSomething(numbers)
}
console.groupEnd();

console.group('10. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų pakeltų kvadratu');
{
     const ShowSomething = (arr: number[]) => {
     
          console.log(arr.map(item => item ** 2));
     }
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  ShowSomething(numbers)
}
console.groupEnd();

console.group('11. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų ir jų indeksų sandaugos');
{
     const ShowSomething = (arr: number[]) => {
     
          console.log(arr.map((item, i) => item * i));
     }
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  ShowSomething(numbers)
}
console.groupEnd();

console.group('12. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo teigiamų elementų');
{
     const ShowSomething = (arr: number[]) => {
          const res = arr.filter(item => item > 0)
          console.log(res);
     }
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  ShowSomething(numbers)
}
console.groupEnd();

console.group('13. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo NE-teigiamų elementų');
{
     const ShowSomething = (arr: number[]) => {
          const res = arr.filter(item => item < 0)
          console.log(res);
     }
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  ShowSomething(numbers)
}
console.groupEnd();

console.group('14. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo lyginių elementų');
{
     //
}
console.groupEnd();

console.group('15. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo nelyginių elementų');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
}
console.groupEnd();

console.group('16. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo, paverstų teigiamais, elementų');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
}
console.groupEnd();