// use strict js rules
"use strict";

function firstFloorButton() {
	// set variable to be the ID/class of the table
	const button = document.getElementById('firstFloorTable');
	
    // When it began with if-collapse else-visible, this ALWAYS needs
    // to be clicked twice at first. It changes to collapse for some reason,
    // and it thinks it does not start already collapsed. Not sure why.

	// if the tableID isn't visible
	if (button.style.visibility == 'visible') {
		// onclick, set the table with the id to be visible
		console.log("button clicked to collapse");
		button.style.visibility = "collapse";
	}
	// else if table id is visible 
    else {
		// onclick, set the table with the id to be non-visible
        console.log("button clicked to visible");
		button.style.visibility = "visible";
    }
}

function secondFloorButton() {
	// set variable to be the ID/class of the table
	const button = document.getElementById('secondFloorTable');
	
    // When it began with if-collapse else-visible, this ALWAYS needs
    // to be clicked twice at first. It changes to collapse for some reason,
    // and it thinks it does not start already collapsed. Not sure why.

	// if the tableID isn't visible
	if (button.style.visibility == 'visible') {
		// onclick, set the table with the id to be visible
		console.log("button clicked to collapse");
		button.style.visibility = "collapse";
	}
	// else if table id is visible
    else {
		// onclick, set the table with the id to be non-visible
        console.log("button clicked to visible");
		button.style.visibility = "visible";
    }
}

function outdoorSuiteButton() {
	// set variable to be the ID/class of the table
	const button = document.getElementById('outdoorSuiteTable');
	
    // When it began with if-collapse else-visible, this ALWAYS needs
    // to be clicked twice at first. It changes to collapse for some reason,
    // and it thinks it does not start already collapsed. Not sure why.

	// if the tableID isn't visible
	if (button.style.visibility == 'visible') {
		// onclick, set the table with the id to be visible
		console.log("button clicked to collapse");
		button.style.visibility = "collapse";
	}
	// else if table id is visible
    else {
		// onclick, set the table with the id to be non-visible
        console.log("button clicked to visible");
		button.style.visibility = "visible";
    }
}


// ensure this only checks forms in the contact page
if (document.URL.includes("contact.html")) {
    // on loading the contact page, use customized validity messages from the start
    document.onload = validateForm();

    // These are included because the function wouldn't run on submit if 
    // html caught errors, meaning we didn't get the custom validity messages
    
    // validate the whole form when first name has been changed
    document.getElementById("firstName").addEventListener("change", validateForm);
    // validate the whole form when first name has been changed
    document.getElementById("lastName").addEventListener("change", validateForm);
    // validate the whole form when first name has been changed
    document.getElementById("reservation").addEventListener("change", validateForm);
    // validate the whole form when first name has been changed
    document.getElementById("myEmail").addEventListener("change", validateForm);
}




// would be good to separate these into different functions, 
// that way each event listener can only check their own event

function validateForm() {
    // Attempt to validate form
    try {
        // Retrieve values from form fields
        // Fetch first name element
        const firstName = document.getElementById('firstName');
        // Fetch last name element
        const lastName = document.getElementById('lastName');
        // fetch the reservation element
        const reservationElem = document.getElementById('reservation');
        // Fetch the reservation date and ensure it is formatted as a date object
        const reservation = new Date(document.getElementById('reservation').value);
        // Fetch the email element from the document
        const myEmail = document.getElementById('myEmail');
        // Fetch the subject string
        const subject = document.getElementById('subject').value.toLowerCase();
        // Fetch the message string
        const message = document.getElementById('message').value.toLowerCase();
        
        // create the regular expression to check that the email address isn't @clubemp
        const emailRegex = /(@clubemp)/gm;


        // Validate fields have information, shouldn't be necessary since both name fields are required but included just in case
        if (firstName.validity.valueMissing || lastName.validity.valueMissing) {
            // Alert the user of the error at the top of the window
            firstName.setCustomValidity("Please fill out both the first name and last name fields.");
            // return false from the validation, meaning the content won't submit
            return false;
        }
        // Validate first name capitalization
        else if (firstName.value.charAt(0) !== firstName.value.charAt(0).toUpperCase()) {
            // // Alert user the first letter of their first name must be capitalized
            firstName.setCustomValidity("The first letter of the first name must be capitalized.");
            // return false from the validation, meaning the content won't submit
            return false;
        }
        // Otherwise
        else {
            // Remove validity rules
            firstName.setCustomValidity("");
        }


        // Validate last name capitalization
        if (lastName.value.charAt(0) != lastName.value.charAt(0).toUpperCase()) {
            // Alert user the first letter of their last name must be capitalized
            lastName.setCustomValidity("The first letter of the last name must be capitalized.");
            // return false from the validation, meaning the content won't submit
            return false;
        }
        else {
            // Remove validity rules
            lastName.setCustomValidity("");
        }

        // Ensure the email is filled out
        if (myEmail.validity.valueMissing) {
            // Inform user the email box must be filled out
            myEmail.setCustomValidity("Email is required.")
            // return false from the validation, meaning the content won't submit
            return false;
        }
        // Validate the email address is not from the domain clubemp
        else if (emailRegex.test(myEmail.value)) {
            // Inform user their email cannot be from the clubemp domain
            myEmail.setCustomValidity("Email cannot be from the 'clubemp' domain.")
            // return false from the validation, meaning the content won't submit
            return false;
        }
        // otherwise
        else {
            // Remove validity rules
            myEmail.setCustomValidity("");
        }
        



        // declare opening date to compare to
        const openingDate = new Date("1950-01-01");
        // validate the date is no older than a hypothetical opening date (1/1/1950)
        if (reservation < openingDate) {
            // inform user the entered a date older than the establishment
            reservationElem.setCustomValidity("WOAH!\nThat date is older than we are!\nPlease enter the correct date or remove the date if you didn't mean to add one.")
            // return false from the validation, meaning the content won't submit
            return false;
        }
        // otherwise
        else {
            // Remove validity rules
            reservationElem.setCustomValidity("");
        }


        // check if message contains the if the subject or message contain the words "squire" or "shack"
        if (subject.includes("squire") || subject.includes("shack") || message.includes("squire") || message.includes("shack")) {
            // angrily tell user to not inquire about squire's shack
            window.alert("DO. NOT. INQUIRE. ABOUT. SQUIRE'S SHACK.")
            // return false from the validation, meaning the content won't submit
            return false;
            // throw new "Forbidden words included." // I have no idea how this is supposed to work. I must need to define this, I think
        }

        return true;
    }
    
    // if exception is thrown or something else goes wrong, catch
    catch {
        // tell user something went horribly wrong.
        window.alert("Validation didn't work, so no message can be sent. Feel free to be angry about this.")
        // Don't let user submit
        return false;
    }

}
