/* 
  Javascript Datatyper
  --------------------------------------------------------------------------------
  String      =   Text
  Number      =   Tal, decimaltal, stora tal, små tal
  Boolean     =   Sant / Falskt   true / false
  null        =   null dvs tomt, ingenting alls (mauellt)
  undefined   =   tomt, har ej blivit definerat än (automatiskt)
  Object      =   ett objekt/klass som innehåller en eller flera värden, Array är en objekttyp.
  Symbol      =   symbolder använda med objekt, kommer vi inte att använda.
*/


/* 
  Deklarera variabler
  ----------------------------------------------------------------------------------
  var name = 'Joakim';
  let name = 'Joakim;
  const name = 'Joakim';
  name = 'Joakim';
  var = Global variabel - accessbar överallt i koden.
  let = lokal variabel - accessbar bara inom det angivna området
  const = konstant, kan inte skrivas över (undantag finns)
  C# exempel.
    string name = "Joakim";
    int age = 35;
  JS exempel
    let name = 'Joakim';
    let age = 35;
*/


/* 
  Strings:
    let name = "Joakim";    - Använd inte
    let name = 'Joakim';    - Denna ska du använda
    let name = `Joakim`;    - Använd denna när du gör en template string (shift + ´, tryck mellansalag)
    avsluta varje rad med ett ; (det behövs inte men det är bra att göra.)
*/

let doNotUse = "Joakim";
let useThis = 'Joakim';
let number = 33;

console.log(useThis, number);

let string = 'Mitt namn är \'nisse\' ' + useThis + ' och "jag" är ' + number + ' år gammal.';
let template = `Mitt namn är 'nisse' ${useThis} och "jag" är ${number} år gammal`;
let quote = "Mitt namn är 'nisse' " + doNotUse

console.log(string);
console.log(template);
console.log(quote);