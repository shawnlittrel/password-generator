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

debugger;
  //NONE OF BELOW RUNS UNTIL CLICK BUTTON IS RECEIVED
function charSelect(){
  if(document.getElementById("lowercase").checked){
    lowerCaseInput = true;
  }
  else{
    lowerCaseInput = false;
  };

  if(document.getElementById("uppercase").checked){
    upperCaseInput = true;
  }
  else{
    upperCaseInput = false;
  };

  if(document.getElementById("number-check").checked){
    numberInput = true;
  }
  else{
    numberInput = false;
  };

  if(document.getElementById("special-check").checked){
    specialCharInput = true;
  }
  else{
    specialCharInput = false;
  };

  passLength = document.getElementById("length-box").value;
  passLengthInt = parseInt(passLength);

  if(passLengthInt > 0 &&
    (lowerCaseInput == true ||
      upperCaseInput == true ||
      numberInput == true ||
      specialCharInput == true)){
      return;
  }
  else{
    alert("Please choose at least one character type and a length between 8 and 128 characters");
  }
}

//Pull random characters from each array and then loop until password length is met.

function getArray(){
  //check to see which arrays to utilize in generation
  if(lowerCaseInput == false && upperCaseInput == false && numberInput == false && specialCharInput == true){
    //USE SPECIAL ARRAY ONLY HERE
    bigArray = specialCharArray;
  }

  else if(lowerCaseInput == false && upperCaseInput == false && numberInput == true && specialCharInput == false){
    //USE NUMBER ARRAY ONLY HERE
    bigArray = numberArray;
  }

  else if(lowerCaseInput == false && upperCaseInput == false && numberInput == true && specialCharInput == true){
    //USE NUM AND SPECIAL HERE
    bigArray = numArray.concat(specialCharArray);
  }

  else if(lowerCaseInput == false && upperCaseInput == true && numberInput == false && specialCharInput == false){
    //USE UPPER ONLY HERE
    bigArray = upperCaseArray;
  }

  else if(lowerCaseInput == false && upperCaseInput == true && numberInput == false && specialCharInput == true){
    //USE UPPER AND SPECIAL HERE
    bigArray = upperCaseArray.concat(specialCharArray);
  }

  else if(lowerCaseInput == false && upperCaseInput == true && numberInput == true && specialCharInput == false){
    //USE UPPER AND NUMBER HERE
    bigArray = upperCaseArray.concat(numberArray);
  }

  else if(lowerCaseInput == false && upperCaseInput == true && numberInput == true && specialCharInput == true){
    //USE UPPER NUMBER AND SPECIAL HERE
    bigArray = upperCaseArray.concat(numberArray, specialCharArray);
  }

  else if(lowerCaseInput == true && upperCaseInput == false && numberInput == false && specialCharInput == false){
    //USE LOWER ONLY HERE
    bigArray = lowerCaseArray;
  }

  else if(lowerCaseInput == true && upperCaseInput == false && numberInput == false && specialCharInput == true){
    //USE LOWER AND SPECIAL HERE
    bigArray = lowerCaseArray.concat(specialCharArray);
  }

  else if(lowerCaseInput == true && upperCaseInput == false && numberInput == true && specialCharInput == false){
    //USE LOWER AND NUMBER HERE
    bigArray = lowerCaseArray.concat(numberArray);
  }

  else if(lowerCaseInput == true && upperCaseInput == false && numberInput == true && specialCharInput == true){
    //USE LOWER NUMBER AND SPECIAL HERE
    bigArray = lowerCaseArray.concat(numberArray, specialCharArray);
  }

  else if(lowerCaseInput == true && upperCaseInput == true && numberInput == false && specialCharInput == false){
    //USE LOWER AND UPPER HERE
    bigArray = lowerCaseArray.concat(upperCaseArray);
  }

  else if(lowerCaseInput == true && upperCaseInput == true && numberInput == false && specialCharInput == true){
    //USE LOWER UPPER AND SPECIAL HERE
    bigArray = lowerCaseArray.concat(upperCaseArray, specialCharArray);
  }

  else if(lowerCaseInput == true && upperCaseInput == true && numberInput == true && specialCharInput == false){
    //USE LOWER UPPER NUMBERS HERE
    bigArray = lowerCaseArray.concat(upperCaseArray, numberArray);
  }

  else{
    //USE ALL ARRAYS HERE
    bigArray = lowerCaseArray.concat(upperCaseArray, numberArray, specialCharArray);
    //FOR THIS AND ALL MULTI ARRAYS, PULL RANDOM ELEMENTS FROM EACH AND GENERATE A NEW ARRAY
  };
};

//FUNCTION TO TAKE NEW ARRAY AND PULL RANDOM ELEMENTS FROM IT FOR THE LENGTH OF THE PASSWORD
function generate(){
  var i;
  var passStr = "";
  for (i = 0; i < passLengthInt; i++) {
    var randomChar = bigArray[Math.floor(Math.random()*bigArray.length)];
    passChar = randomChar;
    passStr += passChar;
  };
  document.getElementById('password').value = passStr;
  alert("Please copy your password from the textbox below.  Click Generate again for a new one!");
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function clickEvent(){
charSelect();
//passLengthChooser();
getArray();
generate();
};