// /* ----- RANDOM CODES ------- */
// //Function to generate combination of characters
// function generateCode() {
//     //create variables to store generate codes and the type  of characters we want  to show  as codes
//     var code = ' '; //initialize to null value
//     var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789@#$';

//     //generate characters multiple times using a loop
//     for (i = 1; i <= 4; i++) {
//         var char = Math.random()* str.length; //random select a character from the variable and then store in anew variable
//         code += str.charAt(char); //acumulate the generated character into a string of 8 character
//  //   }
//     return code; //return the final accumulated string when loop ends
//     }
// }

// //get HTMLelement to display
// document.getElementById("codes").innerHTML = generateCode();

// //disable button
// function disableButton() {
//     document.getElementById("submit").disable = true;
// }

// //Activate button
// disableButton();
