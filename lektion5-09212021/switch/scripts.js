let value = 3;

// if(value === 1) {console.log('värdet är ett');}
// else if(value === 2) {console.log('värdet är två');}
// else if(value === 3) {console.log('värdet är tre');}
// else if(value === 4) {console.log('värdet är fyra');}
// else if(value === 5) {console.log('värdet är fem');}
// else {console.log('värdet finns inte i if-satsen');}



// switch(value) {
//   case compare-value:
//     action
//     break;
//   case compare-value:
//     action
//     break;
//   case compare-value:
//     action
//     break;
//   default:
//     action
// }


// switch(value) {
//   case 1: 
//     console.log('värdet är 1'); 
//     break;
//   case 2: 
//     console.log('värdet är 2'); 
//     break;
//   case 3: 
//     console.log('värdet är 3'); 
//     break;
//   case 4: 
//     console.log('värdet är 4'); 
//     break;
//   case 5: 
//     console.log('värdet är 5'); 
//     break;

//   default: console.log('värdet finns inte i switchen');
// }



// ===
switch(value) {
  case '3':
    console.log('värdet är en text med 3');
    break;
  case 3:
    console.log('värdet är ett nummer 3');
  default:
    console.log('värdet är inte 3');
}



// let users = []


// let action = {
//   type: 'add_user'
// }

// switch(action.type) {
//   case 'add_user':
//     users.push('new_user')
//     break;

//   case 'remove_user':
//     users.pop();
// }

let color = 'black';

switch(color) {
  case 'red':
    console.log('color is red');
    break;
  case 'blue':
    console.log('color is blue');
    break;
  case 'green':
    console.log('color is green');
    break;
  case 'yellow':
    console.log('color is yellow');
    break;

  default:
    console.log('color unknown');
}