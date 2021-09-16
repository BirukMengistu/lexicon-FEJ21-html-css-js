const array = [0, 1, 2, 3, 4];


// SÅHÄR VILL VI INTE GÖRA!
const multiArray = ['12', 12, true, {firstName: 'Joakim'}]
const userNameArry =['Jokiam', 'hans','kiam', 'Theodra','deve', 'bob']
const users = [
  {firstName: 'Joakim',email:'jokim@gmali.com' , lastName: 'Wahlström', age: 34},
  {firstName: 'Hans',email:'hans@gmali.com' , lastName: 'Mattin-Lassei', age: 37},
  {firstName: 'Jeanette',email:'dev@gmali.com' , lastName: 'Wahlström', age: 33},
  {firstName: 'Hans',email:'gor@gmali.com' , lastName: 'Mattin-Lassei', age: 37},
  {firstName: 'Jeanette',email:'lok@gmali.com' , lastName: 'Wahlström', age: 33}
]

//for loop 
for(let i =0 ; i< userNameArry.length ; i++){
  console.log(userNameArry[i]);
}
//for(let x of aryObj)
for( let name of users){
 console.log(name.firstName,name.age);
}
// foreach
users.forEach(user =>{
  console.log(user.email,user.age);
})


//map obj method

const userEmail = users.map(
  user =>{
   return user.email;
  }
)

console.log(userEmail[1])
console.log(userEmail.length)

// Filter

const newUserEmail = users.filter(
  user =>{
   return (user.email !== 'hans@gmali.com')
  }
)
const filterMapUserEmail = newUserEmail.map(user => {
 return user.email;
})

console.log(newUserEmail.length)

console.log(filterMapUserEmail)