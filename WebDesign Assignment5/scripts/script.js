
var nameCheck = /^[A-Za-z0-9 ]{3,20}$/;
var emailCheck = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
var usernameCheck = /^[A-Za-z0-9_]{1,20}$/;
var passwordCheck =  /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;
var phoneCheck=/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;

function validateFeedbackForm(){
	var name = form.username.value;
	var email = form.email.value;
	var phone = form.phone.value;
	var comments = form.comments.value;

	if(name=="" || email=="" || phone=="" || comments==""){
		alert("Please enter all the mandatory fields!!");
		return false;
	}

	if (!emailCheck.test(email)) {
		alert("You must enter a valid email address."); return false;
	}

	if (!phoneCheck.test(phone)) {
		alert("You must enter a valid phone number."); return false;
	}

	return true;

}

function validateEmail(){
	var email = form.email.value;
	if (!emailCheck.test(email)) {
		alert("You must enter a valid email address."); return false;
	}
	return true;
}

function validateRegisterationForm(form){

	var name = form.name.value;
	var email = form.email.value;
	var phone = form.phone.value;
	var username = form.username.value;
	var password = form.password.value;
	var gender = form.gender.value;
	var address =form.address.value;
	var issues = [];

	if (!nameCheck.test(name)) {
		issues[issues.length] = "You must enter a valid Name(Min:3)";
	}

	if (!emailCheck.test(email)) {
		issues[issues.length] = "You must enter a valid email address.";
	}
	if (!usernameCheck.test(username)) {
		issues[issues.length] = "You must enter valid User Name with no special char .";
	}

	if (!passwordCheck.test(password)) {
		issues[issues.length] = "You must enter a valid Password min 6 char.";
	}
	if (gender==0) {
		issues[issues.length] = "Select Gender";
	}

	if (!phoneCheck.test(phone)) {
		issues[issues.length] = "You must enter a valid phone number."; 
	}



	if (issues.length > 0) {
		reportErrors(issues);
		return false;
	}
	return true;
}

function reportErrors(errors){
	var msg = "Please enter the following mandatory data:\n\n\n";
	for (var i = 0; i<errors.length; i++) {
		var errorNumber = i + 1;
		msg += "\n" + errorNumber + ". " + errors[i];
	}
	alert(msg);
}