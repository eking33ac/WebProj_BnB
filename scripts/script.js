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
    // add normal validation for the zip code
    document.getElementById("zip").addEventListener("change", validateForm);
    // add zipcode verification as soon as user starts typing it
    document.getElementById("zip").addEventListener("keyup", zipListener);
    // validate on country input
    document.getElementById("country").addEventListener("change", validateForm);
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
        // fetch country input element
        const country = document.getElementById("country")
        // fetch zipcode input element
        const zip = document.getElementById("zip")

        // create the regular expression to check that the email address isn't @clubemp
        const emailRegex = /(@clubemp.com)/gm;
        // create regex to ensure message contains only letters (for country)
        const onlyLettersRgx = /^[a-zA-Z]+$/


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
            myEmail.setCustomValidity("Email cannot be from the 'clubemp.com' domain.")
            // return false from the validation, meaning the content won't submit
            return false;
        }
        // otherwise
        else {
            // Remove validity rules
            myEmail.setCustomValidity("");
        }
        
        // verify the country name is extactly two characters long.
        if (country.value.trim().length != 2) {
            // set custom validity to warn that the name must be 2 characters long.
            country.setCustomValidity("Country must be 2 characters long. e.g. US, UK, CA, FR, etc.")
        }
        // verify the country name is only alpha characters.
        else if ( !( onlyLettersRgx.test(country.value.trim()) ) ) {
            // tell user to inlcude only alphabet characters from a-z
            country.setCustomValidity("Country may only include letters. i.e. a-z and A-Z.")
        }
        else {
            // remove validity rules
            country.setCustomValidity("");
        }

        // verify zipcode is exactly 5 digits
        if (zip.value.length != 5) {
            // set custom validity to warn that the name must be 2 characters long.
            zip.setCustomValidity("Zip Code must be 5 digits long.")
        }
        else {
            // remove validity rules
            zip.setCustomValidity("");
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

// create function to validate zipcode in real-time
function zipListener() {
    //Using the form on your website, build a ZIP code verifier using AJAX. 
    // Your program should start verifying the ZIP code against a database
    // or file on a server as soon as the user starts entering the ZIP code

    // get the value of the zipcode field without leading or trailing spaces
    let zipcode = document.getElementById("zip").value.trim();
    // fetch country input element value and remove trailing and leading whitespace
    let country = document.getElementById("country").value.trim();
    // put api key in a variable
    const apiKey = `zip_live_N7ElHokqIV6rz7lLkPMVin1JIo5kjNCJfpBwA6cy`;
    // declare variable to hold the zipElem element
    let zipElem = document.getElementById("zip");

    // create warning div
    let warning = document.getElementById("warning");
    // set warning text color
    warning.style.color = "red";

    // check if country is falsy by seeing if not-country is truthy
    if (!country || country.length != 2) {
        // tell user to include accurate country before zipcode.
        warning.innerHTML = "Include accurate country before zipcode.";
    }
    // otherwise, continue function
    else {
        warning.innerHTML = ""
        

        // create XML object
        let xhttp = new XMLHttpRequest();
        // open server request
        xhttp.open("GET", `http://api.zipcodestack.com/v1/search?apikey=${apiKey}&codes=${zipcode}&country=${country}`, true);
        // send server request
        xhttp.send();

        // when the server sends information back
        xhttp.onreadystatechange = function() {
            // mark the processes
            console.log("Ready state status: " + this.readyState);
        }
        
        xhttp.onloadend = function() {
            // mark the process
            console.log("loadend");
            console.log("Results: " + this.results)
            // if it is valid information
            if (this.readyState == 4 && this.status == 200 && this.responseText.includes(`"results":{`)) {
                // remove warning innerhtml
                warning.innerHTML = "";

                console.log("Ran if: 1")
                // remove custom validities
                zipElem.setCustomValidity("");
    
                console.log("Initial response text:\n" + this.responseText)
                console.log("Initial status and object properties " + this.statusText)
                let response = JSON.parse(this.responseText);
                console.dir("JSONed response text:\n" + response);
                console.log("JSONed status and object properties " + response);
            }
            // if the status is 404
            else if (this.status == 404) {
                console.log("Ran else if: 2")
                console.warn("Zipcode Validation Page not found.")
                warning.innerHTML = "Zipcode Validation could not connect. Try again. If error persists, check server connection."
            }
            // if something else is wrong
            else {
                console.log("Ran else: 3")
                // log/warn a failure
                console.warn("Zipcode Validation Failed. Check Zipcode Input and Server Connection.");
                //  set the validity to indicate failure
                warning.innerHTML= "Zipcode Validation Failed. Ensure country and zipcode are correct.\nIf error continues, check server connections.";
            }
        }
    }
}

/*
https://api.zipcodestack.com/v1/search?apikey=zip_live_N7ElHokqIV6rz7lLkPMVin1JIo5kjNCJfpBwA6cy&codes=79101&country=US
https://api.zipcodestack.com/v1/locations?apikey=zip_live_N7ElHokqIV6rz7lLkPMVin1JIo5kjNCJfpBwA6cy&codes=79101&country=US
https://api.zipcodestack.com/v1/search?apikey=zip_live_N7ElHokqIV6rz7lLkPMVin1JIo5kjNCJfpBwA6cy&codes=79101&country=US

*/


/* Zipcode Fetch API

// create function to validate zipcode in real-time
function zipListener() {
    // get the value of the zipcode field without leading or trailing spaces
    let zipcode = document.getElementById("zip").value.trim();
    // put api key in a variable
    const apiKey = `zip_live_N7ElHokqIV6rz7lLkPMVin1JIo5kjNCJfpBwA6cy`
    let zipElem = document.getElementById("zip");
    // fetch country input element value and remove trailing and leading whitespace
    let country = document.getElementById("country").value.trim();

    // check if country is falsy by seeing if not-country is truthy
    if (!country) {
        // tell user to include accurate country before zipcode.
        zipElem.setCustomValidity("Include accurate country before zipcode.")
    }
    // otherwise, continue function
    else {
        // remove custom validities
        zipElem.setCustomValidity("");
        
        fetch(`http://api.zipcodestack.com/v1/search?apikey=${apiKey}&codes=${zipcode}&country=${country}`)
        // convert api response
        .then(response => response.json())
        // log the data in the console
        .then(data => { console.log(data); })
        // continue as normal
        // if something goes wrong
        .catch( data => {
            // log/warn a failure
            console.warn("Zipcode Validation Failed.");
            //  set the validity to indicate failure
            zipElem.setCustomValidity("Zipcode Validation Failed. Ensure country and zipcode are correct.")
        } );
    }
}

*/