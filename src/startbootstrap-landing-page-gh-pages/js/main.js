$(document).ready(function() {
	$("body").hide().fadeIn(2000);
 });

var today = new Date();
today = today.getHours();
document.getElementById('time').innerHTML=today;