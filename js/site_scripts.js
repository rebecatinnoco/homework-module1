//partners
var photo = [];
var fileNames = [];
var imageList = [];
var image;
var openList = "<li id='photo'>";
var closeList = "</li>"

//loop
for (var i=0; i<6; i++) {
    fileNames.push ("partner"+(i+1));
    photo.push ("<img src='images-2/partners/"+fileNames[i]+".png'>")
    image = openList + photo[i] + closeList;
    imageList.push(image)
}

//Display the images
document.getElementById("partners").innerHTML = imageList.join("");


/* ----- RANDOM CODES ------- */
//Function to generate combination of characters
function generateCode() {
    //create variables to store generate codes and the type  of characters we want  to show  as codes
    var code = ' '; //initialize to null value
    var getCode = ' '; //to store entered code
    var btnvalue; // for button boolean value
    //create a variable to holf the type of characters we want to show as codes
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789@#$';

    //generate characters multiple times using a loop
    for (i = 1; i <= 8; i++) {
        var char = Math.random()* str.length; //random select a character from the variable and then store in anew variable
        code += str.charAt(char) //acumulate the generated character into a string of 8 character
    }
    return code; //return the final accumulated string when loop ends
}

//get HTMLelement to display
document.getElementById("codes").innerHTML = generateCode();

//determine when to able or disable button
function disableButton(btnvalue) {
   document.getElementById("submit").disable = btnvalue;//able/disable button
    if (btnvalue == true) {
        //set button and label color translucent
        document.getElementById("submit").style.backgroundColor = "rgba(73,119,209,0.3)";
        document.getElementById("submit").style.color = "rgba(255, 255, 255, 0.5)";
    } else {
        //set button and label color with no tranparence
        document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 1)";
        document.getElementById("submit").style.color = "rgba(255, 255, 255, 0.5)";
    }
}

//listen to user input code
var codebox = document.getElementById("codeentered"); //get textbox
codebox.addEventListener("input", evaluateCode); //listen to the code entered in textbox

//run fuction if detected user had entered a character in textbox
function evaluteCode() {
    getCode = document.getElementById("codeentered").value; //getcharacter entered
    var charset1 = getCode.trim(); //remove any hidden characters entered
    var charset2 = code.trim(); //remove any hidden characters generated
    //test if code entered matches the number of generated characters
    if (charset1.length == charset2.length && charset1 == charset2) {
        disableButton(false); //if match, run the function to enable button
    }
}
//Activate button
disableButton();

// /* ----- JQuery Activities ------- */
// $(document).ready(function(){

//     $(document).bind("click", function(e){
//         $(e.target).closest("td").toggleClass("highlight");
//         });  
//     });

    $(document).ready(function(){
        //select grides
        $(document).bind("click", function(e){
            $(e.target).closest(".table").toggleClass("highlight");
        });
    
        //user interation with table cells
        $(document).ready(function() {
            $("td").click(function () {
                var content = $(this).text();
                var cliff = ["west cliff","north cliff","east cliff","south cliff"]
                var row_index = $(this).parent().index();
                var col_index = $(this).index();
                var test = $("#mytable").find("th").eq(col_index).html();
                
                
    
                if (content != "Not Available") {
                    $(this).toggleClass("tdhighlight");
    
                    if ($(this).hasClass("tdhighlight")) {
                        $('#displaySelected').css("visibility","visible");
                        $('#displaySelected').css("margin-top","2em");
                        $('#result').append("<p>"+content+" at "+ test +"</p>");
    
                    } else {
                        $('#result p:contains('+content+')').remove();
    
                        if ($('#result').has('p').length == false) {
                            $('#displaySelected').css("visibility","hidden");
                            $('#displaySelected').css("margin-top","0");
                        };
                    };
                };
    
            });
        });
    });