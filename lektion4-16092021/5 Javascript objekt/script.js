const user={
    firstName: 'Bob',
    lastName: 'Stamp',
    age : 34,
    
    address : {
        stree: 'en gata',
        nr :22,
        zipCode: '72345' ,
        city:'Västras'
       },
       mobile :[
           0704075567 ,
           0745606776
       ],
       isActive: true
}
user.email = 'bob.stamp@gmail.com'
user.pets={
    dog:'kira',
    cat:'Juni'
}


console.log(user.lastName)
console.log(`Användern heter ${user.firstName} och bor i ${user.address.city} ock email ${user.email}`)
console.log(user.lastName)