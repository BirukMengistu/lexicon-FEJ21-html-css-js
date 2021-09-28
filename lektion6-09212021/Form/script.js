const regForm = document.querySelector('#regForm');

regForm.addEventListener('submit', e => {
  e.preventDefault();

  /*  if(e.currentTarget.tac.checked) {
      let user = {
         firstName: e.currentTarget.firstName.value,
         lastName: e.currentTarget.lastName.value,
         addressName: e.currentTarget.address.value,
        role: e.currentTarget.role.value
         }
  
        console.log(user)
     } else {
     return false
  } */

  // let firstName = e.currentTarget[0].value;
  // let lastName = e.currentTarget.lastName.value;
  // let address = e.currentTarget['address'].value;
  // let role = document.querySelector('#role').value;


  // // console.log(firstName, lastName, address, role);

  // let user = {
  //   name: firstName,
  //   lastName,
  //   address,
  //   role
  // }

  if(!(e.currentTarget.tac.checked)){
    alert('You must accept the terms!')
    return false
  }

  let user = {
    firstName: e.currentTarget.firstName.value,
    lastName: e.currentTarget.lastName.value,
    addressName: e.currentTarget.address.value,
    role: e.currentTarget.role.value
  }

  console.log(user)

})
