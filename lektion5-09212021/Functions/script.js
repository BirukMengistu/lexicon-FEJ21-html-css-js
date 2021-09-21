// // Scope

// let age = 34; // global scope

// if(true) {
  //   let age = 50; // local scope
  //   let name = 'Joakim';
  
  
  //   if(true) {
    //     let age = 100;
    //     let name = 'Jeanette';
    //     console.log('inne i kodblock 1.2', age, name);
    //     var globalt = 'var';
    //   }
    
    //   console.log('inne i 1a kodblocket', age);
    //   console.log('inne i 1a kodblocket', name);
    
    // }
    
    // if(true) {
      //   let age = 66;
      //   let name = 'Hans';
      //   console.log('inne i 2a kodblocket', age);
      //   console.log('inne i 2a kodblocket', name);
      // }
      
      // console.log('utanför något block', age);
      // console.log('utanför något block', name);
      // console.log('utanför något block', globalt);
      
      
      
      
      // Funktioner
      
      // Deklarera en funktion
      
      function hej() {
        console.log('hej på dig');
      }
      
      const greet = function() {
        console.log('hur är läget?')
      }
      
      
      hej();
      greet();
      
      
      
      
      // Kalla på en funktion

      