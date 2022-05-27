//Create a time data function
function currentTime() {
    //Declare Variables
    var d = new Date(); //Get current Date
    var hr = d.getHours(); //Get Current hours
    var min = d.getMinutes(); //Get current minutes
    var sec = d.getSeconds(); //Get current Seconds
    var ampm; //Declare empty variable to store AM or PM

    //Add 0 to single digits for seconds
    if (sec < 10) {
        sec = "0"+ sec;
    };
    //Add 0 to single digits for minutes
    if (min < 10) {
        min = "0" + min;
    }

    //Determine AM or PM string
    if (hr == 12) {
        ampm = " PM"; //Set to PM
    } else if ( hr > 12) {
        hr -=12; //Deduct 12 from hours greater than 12 (military time)
        ampm = " PM"; //Set to PM //Added space before to separate from the time
    } else {
        ampm = " AM"; //Set to AM //Added space before to separate from the time
    }

    var utchr = d.getUTCHours(); //Get current Greenwich Mean Time (GMT)
    utchr -=12;

    var timeDiff = utchr - hr; //To store time difference between GMT hour and local hour
    var adjTimeDiff; //To store time difference converted to positive number

        if (timeDiff < 0) {
            adjTimeDiff = timeDiff + 12;
        } else {
            adjTimeDiff = timeDiff;
        }

    var timeZone; //To store the 4 time zone (PT,MT,CT,ET)
    if (adjTimeDiff == 4) {
        timeZone = " ET";
    } else if (adjTimeDiff == 5) {
        timeZone = " CT";
    } else if (adjTimeDiff == 6) {
        timeZone = " MT";
    } else if (adjTimeDiff == 7) {
        timeZone = " PT";
    }
    
//Assemble time format to display
var time = hr + ":" + min + ":" + sec + ampm + timeZone; //adding the space was giving error

//Display current local time and time zone on HTML elements
document.getElementById("clock").innerText = time; //adding time


//Run time data function every 1 second
setInterval(currentTime, 1000); //Setting timer
}

//Initial run of time data function
currentTime();

