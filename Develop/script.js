

// (Assignment Code
var generateBtn = document.querySelector("#generate");
var buttonClick = document.getElementById('generate');
// Write password to the #password input
function writePassword() {
  // ask the lenght of the password
 var passwordLength = prompt ('the lenght of your password , 8 to 128');
 
 if (passwordLength >= 8 && passwordLength <= 128){
  console.log('Requirement met');
 }else{
  console.log('Requirement not met');
 }
// var password = eneratePassword();
// var passwordText = document.querySelector("#password");

//  passwordText.value = password;
console.log(passwordLength);
// prompt to ask which character to include (uppercase,lowercase,Numbers,symbols);
var wantupperCase = confirm('Do you want to include uppercase characters ?');
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','N','O','P','Q','R','S','T','U','V','X','Y','Z'];
console.log(wantupperCase)
if (upperCase === upperCase) {
  console.log('upperCase')
}

  var wantlowerCase = confirm('do you want include lowewrcase charactor ?');
  var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  console.log(wantlowerCase)
  if(lowerCase === lowerCase){
    console.log('lowercase')
  }


  var wantNumbers = confirm('do you want include Numbers ?');
  var Numbers = [ 0,1,2,3,4,5,6,7,8,9];
  console.log(wantNumbers)
  if(Numbers === Numbers){
    console.log('Numbers')
  }


  var wantspecialCharactors = confirm('do you want include special Charactors ?');
  var specialCharactors = ['!','@','#','$','%','^','&','*','(',')'];
  console.log(wantspecialCharactors)
  if(specialCharactors === specialCharactors){
    console.log('specialCharactors')
var password = ""
// for(i = 0 ; i<= Number(passwordLength); i++ ){
// // 
//  //  passwif (wantlowerCase){ord += lowerCase[Math.floor(Math.random()*lowerCase.length)]
// }
// }
 var mainarray = []
 if (wantupperCase){

  mainarray = mainarray.concat(upperCase)
 }

 for ( i=0; i < mainarray.length; i++){
  password += mainarray[Math.floor(Math.random()*mainarray.length)];
 }
console.log(password)
}
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
