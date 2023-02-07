const text1 = 'powiększ mnie!';
const text2 = 'ZAPISZ MNIE MAŁYMI LITERAMI';
const text3 = '$#%#^ wytnij te dziwne znaki na początku!';
const text4 = 'sprawdź, czy zawieram słowo "czy"';
const text5 =
	'wyLoguj w konsoli tylko literę "L", która znajduje się w wyrazie "Wyloguj"';
const text6 = 'pies zamień każde słowo pies, na słowo kot pies';
const text7 = 'podziel, ten, string, od, przecinków';

const text11 = text1.toUpperCase();
console.log(text11);
const text22 = text2.toLowerCase();
console.log(text22);
const text33 = text3.slice(6);
console.log(text33);
const text44 = text4.includes('czy');
console.log(text44);
const text55 = text5.charAt(2);
console.log(text55);
const text66 = text6.replaceAll('pies', 'kot');
console.log(text66);
const text77 = text7.split(',');
console.log(text77);
