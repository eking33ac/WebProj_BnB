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





function validateForm() {
    // Retrieve values from form fields
    // Fetch first name and remove extra white space
    const firstName = document.getElementById('firstName').value.trim();
    // Fetch last name and remove extra white space
    const lastName = document.getElementById('lastName').value.trim();
    // Fetch the reservation date and ensure it is formatted as a date object
    const reservation = new Date(document.getElementById('reservation').value);
    // Fetch the subject string
    const subject = document.getElementById('subject').value.toLowerCase();
    // Fetch the message string
    const message = document.getElementById('message').value.toLowerCase();


    // Validate fields have information, shouldn't be necessary since both name fields are required but included just in case
    if (firstName === '' || lastName === '') {
        // Alert the user of the error at the top of the window
        alert("Please fill out both the first name and last name fields.");
        // return false from the validation, meaning the content won't submit
        return false;
    }
    // Validate first name capitalization
    if (firstName.charAt(0) !== firstName.charAt(0).toUpperCase()) {
        // Alert the user of the error at the top of the window
        alert("The first letter of the first name must be capitalized.");
        // return false from the validation, meaning the content won't submit
        return false;
    }
    // Validate last name capitalization
    if (lastName.charAt(0) !== lastName.charAt(0).toUpperCase()) {
        alert("The first letter of the last name must be capitalized.");
        // return false from the validation, meaning the content won't submit
        return false;
    }

    // NEW VALIDATION HERE
    // declare opening date to compare to
    const openingDate = new Date("1950-01-01");
    // validate the date is no older than a hypothetical opening date (1/1/1950)
    if (reservation < openingDate) {
        // inform user the entered a date older than the establishment
        window.alert("WOAH!\nThat date is older than we are!\nPlease enter the correct date or remove the date if you didn't mean to add one.")
        // return false from the validation, meaning the content won't submit
        return false;
    }

    // TRY to validate the subject and message
    try {
        // check if message contains the if the subject or message contain the words "squire" or "shack"
        if (subject.includes("squire") || subject.includes("shack") || message.includes("squire") || message.includes("shack")) {
            // if it does, throw an exception
            throw "Forbidden words included."
        }
    }
    // if exception is thrown or something else goes wrong, catch
    catch {
        // angrily tell user to not inquire about squire's shack
        window.alert("DO. NOT. INQUIRE. ABOUT. SQUIRE'S SHACK.")
        // return false from the validation, meaning the content won't submit
        return false;
    }

    // If all validations pass
    return true;
}