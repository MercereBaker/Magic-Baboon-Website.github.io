function scriptTest(){
    alert("The Script is running. Delete Alert in defaultscripts later.");

}

function greeting(){
    var customerName = document.getElementById("firstScriptName");
	var customerMood = document.getElementById("firstScriptMood");
	if ((customerName != null) && (customerMood != null)){
		document.getElementById("welcome").innerHTML = "Hello " + customerName.value + "! Glad you're feeling " + customerMood.value +"!";
	}
}

(function today_date(){
    let currentDate = new Date();
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    let monthname;
    let year = currentDate.getFullYear();
    let hour = currentDate.getHours();
    let minute = currentDate.getMinutes();
    if (hour >12 ){
	   var hours = "0" + (hour - 12);
       am_pm = "PM";}
    else if (hour <12){
	  hours = "0" + hour;
	  am_pm = "AM";}
    else{
	  hours = hour;
	  am_pm = "PM";}

    if(minute<10)
        minute = "0" + minute;

    switch(month){
    case 1: 
        monthname = "January";
        break;
    case 2:
		monthname = "February";
		break;
	case 3:
		monthname = "March";
		break;
	case 4:
		monthname = "April";
		break;
	case 5:
		monthname = "May";
		break;
	case 6:
		monthname = "June";
		break;
	case 7:
		monthname = "July";
		break;
	case 8:
		monthname = "August";
		break;
	case 9:
		monthname = "September";
		break;
	case 10:
		monthname = "October";
		break;
	case 11:
		monthname = "November";
		break;
	case 12:
		monthname = "December";
		break;
    }

    let timeString = day +  "-" + monthname + "-" + year + " and " + hours + ":" + minute + " " + am_pm;
    document.getElementById('showDate').innerHTML = timeString;
}());



function user_magic(){
    magic_power = Math.floor(Math.random() * 101);
    alert(magic_power + "%");
}

function user_primate(){
    var primates = ['Baboon', 'Gorilla', 'Orangutan', 'Chimpanzee', 'Bonobo'];
    var randomnumber = Math.floor(Math.random() * (primates.length));
    alert(primates[randomnumber] + "! At least you didn't get human!");
}

function user_power(){
	var powers = ['Pyrokinesis', 'Hydrokinesis', 'Aerokinesis', 'Geokinesis', 'Banana Kinesis'];
	var randomnumber = Math.floor(Math.random() * (powers.length));
	alert(powers[randomnumber]);
}

function user_wizard(){
	var adjectives = ['Terrifying', 'Great', 'Expert', 'Pensive', 'Meditative', 'New', 'Sad', 'Happy'];
	var nouns = ['Wizard', 'Sage', 'Lackey', 'Apprentice', 'Master', 'Novice'];
	var randomnumber1 = Math.floor(Math.random() * (adjectives.length));
	var randomnumber2 = Math.floor(Math.random() * (nouns.length));
	alert("The " + adjectives[randomnumber1] + " " + nouns[randomnumber2]);
}

function user_moral(){
	var side = ['good', 'evil'];
	var randomnumber = Math.floor(Math.random() * (side.length));
	alert("You are a " + side[randomnumber] + " wizard!");
}

