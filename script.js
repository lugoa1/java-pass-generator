// Assignment Code
var generateBtn = document.querySelector("#generate");
let uppercase = ['A', 'B', 'C',];
let numbers = [0,1,2,3,4,5,6,7,8,9]
var special = ["!" ,"@"]
var lowercase = ["a","b","c", "d", "e", "f", "g", "h", "i", "j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password; 
  
}


function generatePassword(){
  // ask the user for the password
  // create an if statement that will check that the password length is not less than 8 characters and no more than 128

  let password_length = prompt("how long do you want your password to be")
  if (password_length < 8 || password_length > 128){
    alert("password length invalid, must be greater than 8 and less than 128 characters")
    return null;
  }

// write confirm statment asking user for numeric, special, lowercase, and uppercase characters 
// if one character type is not selected, the application will not proceed 
  
let numericEntry = confirm("would you like numbers in your password");
let specialEntry = confirm("would you like special characters in your password");
let upperEntry = confirm("would you like uppercase letters in your password");
let lowerEntry = confirm("would you like lowercase letters in your password");
let choices = []
if (numericEntry === false && specialEntry === false && upperEntry === false && lowerEntry === false){ 
  alert("please select at least one parameter for your password")
   
}
 if (numericEntry === true){
  numbers.forEach((element) => { 
    choices.push(element)
})
}

 if (specialEntry === true){
  special.forEach((element) => { 
    choices.push(element) 
})
 }
 if (upperEntry === true){
  uppercase.forEach((element) => { 
    choices.push(element)
})
}
 if (lowerEntry === true){
  lowercase.forEach((element) => { 
    choices.push(element)
})
  
 }

  
 function shuffle(choices) {
  

  let currentIndex = choices.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random(2) * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [choices[currentIndex], choices[randomIndex]] = [
      choices[randomIndex], choices[currentIndex]];
  }

  
}


shuffle(choices);
console.log(choices);
return choices; 

console.log(choices)


  


//if numericEntry is true then add the numbers array to a local array





}

// Write password to the #password input

// Add event listener to generate button

generateBtn.addEventListener('click', writePassword)

// generateBtn.addEventListener("click", function() {
//   let entry = (confirm("would you like special characters in your pasword"))
//   let entry2 = (confirm("would you like numbers in your password"))
  
 
  
//   if (entry === false){
//     numLetchar.splice(0, 7)}
//   else if (entry === true){
//     secondPrompt()
//     }
  
//   function secondPrompt(){
//     if (entry2 = false){
//       numLetchar.splice(8, 17)}
//     else if (entry2 === true){
    
//     }
    
//   }
  
 
//   console.log(numLetchar)
  



//  });