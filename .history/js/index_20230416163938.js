//!  121822.0830        VARIABLES

//!  121822.0826        FUNCTIONS

const init = function () {
	main();
};

window.onload = function () {
	init();
};

//!  123122.1839        MAIN

const main = function () {

	//!  10123.1609  variables

	const myJson = {
		name: "Randy",
		age: "64",
		hobby: "coding",
	};
    const myJsonStringified = JSON.stringify(myJson);
    const myJsonParsed = JSON.parse(myJsonStringified);


	//!  10123.1609 Event Listeners

	document
		.getElementById("addButton")
		.addEventListener("click", addToStorage);
	document
		.getElementById("seeButton")
		.addEventListener("click", viewStorage);

	//!  10123.1609 functions

	function addToStorage() {
		const tempValue = document.getElementById("firstName").value;
        c('clicked '+tempValue);
	}

	function viewStorage() {
        c
        c('clicked');
	}

	//!  10123.161 0  MAIN
};
//!  123122.1839  END
