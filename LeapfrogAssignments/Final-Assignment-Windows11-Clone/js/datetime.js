//function to get datetime 


function dateTime() {
  var x = new Date();
  var h = x.getHours();
  var min = x.getMinutes();
  var amPm = x.getHours() >= 12 ? "PM" : "AM";
  var time = h + ":" + min + amPm;
  var date = x.getDate() + " /" + (x.getMonth() + 1) + " / " + x.getFullYear();
  document.getElementById("time").innerHTML = time;
  document.getElementById("date").innerHTML = date;
}

function display() {
  var refresh = 1000; //time refreshes every 1 second
  mytime = setTimeout("dateTime()", refresh);
}

display();
