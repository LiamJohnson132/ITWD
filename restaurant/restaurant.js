function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["contactForm"].elements.length; 
        loopCounter++) {
        if (document.forms["contactForm"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["contactForm"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
} 
function validateItems() {
	var name = document.forms["contactForm"]["name"].value;
	var email = document.forms["contactForm"]["email"].value;
	var phone = document.forms["contactForm"]["phone"].value;
	document.forms.contactForm.name.parentElement.className = "form-group row mb-3"
	if (!name) {
		alert("Please fill in a name.");
		document.forms["contactForm"]["name"].parentElement.className += " has-error";
		document.forms["contactForm"]["name"].focus();
	}
	if (!email) {
		alert("Please fill in an email.");
		document.forms["contactForm"]["email"].parentElement.className += " has-error";
		document.forms["contactForm"]["email"].focus();
	}
	if (!phone) {
		alert("Please fill in a phone number.");
		document.forms["contactForm"]["phone"].parentElement.className += " has-error";
		document.forms["contactForm"]["phone"].focus();
	}
	return false
}