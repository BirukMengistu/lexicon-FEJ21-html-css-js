class User {
    constructor (id, firstName , secondName, email , role= 'user'){
        this._id= id;
        this._firstName = firstName;
        this._secondName = secondName;
        this._email= email   ; 
        this._role=role ;
        this.loggedIn = false;  

    }
    login() {
        this.loggedIn = true;
        console.log(`${this._firstName} has logged in`)
        return this
      }
      logout() {
        this.loggedIn = false;
        console.log(`${this._firstName} has logged out`)
        return this
      }

    get fullName(){
        return `user full name ${_firstName} ${_secondName} `;
    }
}


const user1 = new User(01, 'bob' , 'dev', 'gdef@gmail.com')
const user2 = new User(02, 'talk-b' , 'dev', 'gdef@gmail.com', 'reviewer')
 
class Admin extends User{
    constructor (id, firstName , secondName, email , role)
    {
        super(id, firstName , secondName, email, role);
        console.log('Admin class');
    }
}

Admin.prototype.addUser = function() {}

Admin.prototype.addRemove = function(){
    
}

console.log(user1._role)
console.log(user1.logout())
console.log(user2._role)
const user3 = new Admin(03, 'talk-b' , 'dev', 'gdef@gmail.com', 'admin')
console.log(user3._role)

console.log( user3)