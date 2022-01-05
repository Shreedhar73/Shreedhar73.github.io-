function dateTime(){
    var x = new Date();
    var days = [];
    days[0] = "Sunday";
    days[1] = "Monday";
    days[2] = "Tuesday";
    days[3] = "Wednesday";
    days[4] = "Thursday";
    days[5] = "Friday";
    days[6] = "Saturday";



    var months = [];
    months[0] = "January";
    months[1] = "February";
    months[2] = "March";
    months[3] = "April";
    months[4] = "May";
    months[5] = "June";
    months[6] = "July";
    months[7] = "August";
    months[8] = "September";
    months[9] = "October";
    months[10] = "November";
    months[11] = "December";


    var m = months[x.getMonth()+1];
    var d = days[x.getDay()];
    var h = x.getHours();
    var min = x.getMinutes();
    var s = x.getSeconds();

    var amPm = x.getHours() >= 12 ? 'PM' : 'AM';

    var time = h+ ":" +min + amPm;
    var date = x.getDate() + " /"+ (x.getMonth()+1) +" / "+ x.getFullYear();

    document.getElementById("time").innerHTML = time;
    document.getElementById("date").innerHTML = date;


display();

}

function display(){
    var refresh = 1000;
    mytime = setTimeout('dateTime()',refresh)
}
display();