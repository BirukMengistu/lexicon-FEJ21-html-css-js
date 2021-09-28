function Cat()
{
this.name = 'boby',
this.color ='white',
this.behave = function(){
  console.log('')
}
}

Cat.speak = function()
{
    console.log('meaoaw')
}

console.log(Cat.behave());