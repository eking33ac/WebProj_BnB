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
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();

    // Validate fields have information, shouldn't be necessary since both name fields are required but included just in case
    if (firstName === '' || lastName === '') {
        alert("Please fill out both the first name and last name fields.");
        return false;
    }
    // Validate first name capitalization
    if (firstName.charAt(0) !== firstName.charAt(0).toUpperCase()) {
        alert("The first letter of the first name must be capitalized.");
        return false;
    }

    // Validate last name capitalization
    if (lastName.charAt(0) !== lastName.charAt(0).toUpperCase()) {
        alert("The first letter of the last name must be capitalized.");
        return false;
    }

    // If all validations pass
    return true;
}