// Assignment code here

//Global variables
var lowerCaseInput = false;
var upperCaseInput = false;
var numberInput = false;
var specialCharInput = false;
var passLength = '0';
var passLengthInt = 0;

let lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let numberArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let specialCharArray = [' ', '!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~']

//Click button to start prompts for password criteria (lowercase, uppercase, numbers, special char)
  //NONE OF BELOW RUNS UNTIL CLICK BUTTON IS RECEIVED

function charSelect(){  

  //confirm box for lowercase letters - OK to add, cancel to leave out
    lowerCaseInput = confirm("Would you like lower case letters?");
    console.log(lowerCaseInput);

  //confirm box for uppercase letters - OK to add, cancel to leave out
    upperCaseInput = confirm("Would you like upper case letters?");
    console.log(upperCaseInput);

  //confirm box for numbers - OK to add, cancel to leave out 
    numberInput = confirm("Would you like numbers?");
    console.log(numberInput);

  //confirm box for special char - OK to add, cancel to leave out
    specialCharInput = confirm("Would you like special characters?");
    console.log(specialCharInput);

  //Validate and choose at least one of each selected criteria
    if( lowerCaseInput == true || upperCaseInput == true || numberInput == true || specialCharInput == true){
      alert("Thanks for your input. Engaging code tumblers.")
      console.log(lowerCaseInput + upperCaseInput + numberInput + specialCharInput);
    }
    else{
      alert("Please choose at least one character type.");
      charSelect();
    }; 
};

//After password criteria, choose length of password (8-128 char)
  //text input box that asks for length (8-128), and asks again if blank or not in that range
function passLengthChooser(){
  passLength = prompt("How long should your password be?  Please choose from 8 to 128 characters.")
  passLengthInt = parseInt(passLength);
  console.log(passLengthInt);

  if(passLengthInt >= 8 && passLengthInt <= 128){
    alert("Configuring time dilator for a length of " + passLengthInt + " characters.")
  }
  else{
    alert("Please choose a length within the available parameters.")
    passLengthChooser();
  };
};

//Pull random characters from each array and then loop until password length is met.

function getArray(){
  //check to see which arrays to utilize in generation
  if(lowerCaseInput == false && upperCaseInput == false && numberInput == false && specialCharInput == true){
    //USE SPECIAL ARRAY ONLY HERE
  }

  else if(lowerCaseInput == false && upperCaseInput == false && numberInput == true && specialCharInput == false){
    //USE NUMBER ARRAY ONLY HERE
  }

  else if(lowerCaseInput == false && upperCaseInput == false && numberInput == true && specialCharInput == true){
    //USE NUM AND SPECIAL HERE
  }

  else if(lowerCaseInput == false && upperCaseInput == true && numberInput == false && specialCharInput == false){
    //USE UPPER ONLY HERE
  }

  else if(lowerCaseInput == false && upperCaseInput == true && numberInput == false && specialCharInput == true){
    //USE UPPER AND SPECIAL HERE
  }

  else if(lowerCaseInput == false && upperCaseInput == true && numberInput == true && specialCharInput == false){
    //USE UPPER AND NUMBER HERE
  }

  else if(lowerCaseInput == false && upperCaseInput == true && numberInput == true && specialCharInput == true){
    //USE UPPER NUMBER AND SPECIAL HERE
  }

  else if(lowerCaseInput == true && upperCaseInput == false && numberInput == false && specialCharInput == false){
    //USE LOWER ONLY HERE
  }

  else if(lowerCaseInput == true && upperCaseInput == false && numberInput == false && specialCharInput == true){
    //USE LOWER AND SPECIAL HERE
  }

  else if(lowerCaseInput == true && upperCaseInput == false && numberInput == true && specialCharInput == false){
    //USE LOWER AND NUMBER HERE
  }

  else if(lowerCaseInput == true && upperCaseInput == false && numberInput == true && specialCharInput == true){
    //USE LOWER NUMBER AND SPECIAL HERE
  }

  else if(lowerCaseInput == true && upperCaseInput == true && numberInput == false && specialCharInput == false){
    //USE LOWER AND UPPER HERE
  }

  else if(lowerCaseInput == true && upperCaseInput == true && numberInput == false && specialCharInput == true){
    //USE LOWER UPPER AND SPECIAL HERE
  }

  else if(lowerCaseInput == true && upperCaseInput == true && numberInput == true && specialCharInput == false){
    //USE LOWER UPPER NUMBERS HERE
  }

  else{
    //USE ALL ARRAYS HERE
    //FOR THIS AND ALL MULTI ARRAYS, PULL RANDOM ELEMENTS FROM EACH AND GENERATE A NEW ARRAY
  }
}


//FUNCTION TO TAKE NEW ARRAY AND PULL RANDOM ELEMENTS FROM IT FOR THE LENGTH OF THE PASSWORD



//Print generated password into textarea id=password

charSelect();
passLengthChooser();

/*
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
*/