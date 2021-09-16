const array = [0, 1, 2, 3, 4];


// SÅHÄR VILL VI INTE GÖRA!
const multiArray = ['12', 12, true, {firstName: 'Joakim'}]

const users = [
  {firstName: 'Joakim', lastName: 'Wahlström', age: 34},
  {firstName: 'Hans', lastName: 'Mattin-Lassei', age: 37},
  {firstName: 'Jeanette', lastName: 'Wahlström', age: 33}
]

const names = ['Joakim', 'Jeanette', 'Hans'];

 //console.log(names);
// console.log(names[0]);
// console.log(users[1].firstName);


// Lägger till information i början av en array
names.unshift('Colin');
console.log('Med unshift ' + names);

// Ta bort information i början av en array
names.shift();
// console.log('Med shift ' + names);

// Lägga till i slutet av en array
names.push('Colin');
// console.log('Med push ' + names);

// Ta bort i slutet av en array
names.pop();
// console.log('Med pop ' + names);


// Ändrar ett värde på en specifik index i en array
names[1] = 'Nytt Namn';
// console.log('Ändrat ' + names);

// delete - tar bort värdet från en specifik plats men den tar inte bort platsen
// delete names[1];
// console.log(names.indexOf('Nytt Namn'))
delete names[names.indexOf('Nytt Namn')];
names[names.indexOf('Hans')] = 'Colin';
console.log(names);

// splice() - tar bort och / eller lägger till ett värde på en specifik position
names.splice(1, 1); // tar bort 1 från index plats 1
names.splice(1, 0, 'Hans', 'Jeanette'); // tar bort 0 och lägger till Hans och Jeanette
names.splice(1, 2, 'Jack'); // Tar bort 2 från index plats 1 och lägger till Jack

console.log(names);

// Hur lång är en array?
console.log(names.length);

// Lägga ihop 2 arrayer
newNames = names.concat(['Hans', 'Jeanette']);
console.log(newNames);

// newNames.sort();
// console.log(newNames);
// newNames.reverse();
// console.log(newNames);
newNames.sort().reverse();
console.log(newNames);