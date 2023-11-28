//your JS code here. If required.
function SubmitForm() {
	var FirstName= document.getElementById('FirstName').value;
	var LastName= document.getElementById('LastName').value;
	var phoneNumber= document.getElementById('phoneNumber').value;
	var email= document.getElementById('email').value;

	var result= "First Name:" + FirstName + "/n" +
		"Last Name:" + LastName + "/n" +
		"Phone Number:" + phoneNumber + "/n" +
		"Email ID:" + email;

	alert(result);
}