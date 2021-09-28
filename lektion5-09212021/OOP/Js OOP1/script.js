// CONSTRUCTOR

/* function Product(name, price, description) {
   this.productName = name
  this.price = price
  this.desc = description

  this.summary = function() {
    return `The product ${this.productName} costs ${this.price} kr.`
   }
 }


const product1 = new Product('Produkt 1', 100, 'this is a product description');
const product2 = new Product('Produkt 2', 300, 'this is a product description');



console.log(product1);

 console.log(product2.summary())
 console.log(product1.summary()) */





// PROTOTYPES
function Book(title, author, year) {
    this.title = title
    this.author = author
    this.year = year
    this.revised = false
  
  }
  
  
  Book.prototype.summary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
  
  Book.prototype.bookAge = function() {
    const years = new Date().getFullYear() - this.year;
  
    switch(years) {
      case 0: 
        return `${this.title} is less then 1 year old.`
      case 1:
        return `${this.title} is 1 year old.`
      default:
        return `${this.title} is ${years} year old.`
    }
  }
  
  
  const book1 = new Book('Book 1', 'Joakim', '2010');
  const book2 = new Book('Jockes Äventyr', 'Jeanette', '2021');
  
  // console.log(book1);
   console.log(book1.bookAge());
  
   console.log(book2.summary());
  
  
  
  // INHERITENCE
  
  function Animal(name) {
    this.name = name;
  }
  Animal.prototype.makeSound = function() {
    return `${this.name} makes a generic sound!`
  }
  Animal.prototype.jump = function() {
    return `${this.name} jumps!`
  }
  
  function Dog(name, year) {
    Animal.call(this, name)
    this.year = year;
  }
  
  Dog.prototype = Object.create(Animal.prototype);
  
  Dog.prototype.bark = function() {
    return `${this.name} is barking!`
  }
  
  
  
  const dog = new Dog('Fido', 4);
  
  console.log(dog.makeSound());
  console.log(dog.bark());
  console.log(dog)