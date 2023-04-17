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
		.getElementById("firstButton")
		.addEventListener("click", addFirstNameToLocalStorage);
	document
		.getElementById("lastButton")
		.addEventListener("click", addLastNameToLocalStorage);
	document
		.getElementById("seeButton")
		.addEventListener("click", receiveFromLocalStorage);

	//!  10123.1609 functions

	function addFirstNameToLocalStorage(str) {
		const tempValue = document.getElementById("firstName").value;
        localStorage.setItem('tester', tempValue)
        c('clicked '+tempValue);
	}
	function addLastNameToLocalStorage(str) {
		const tempValue = document.getElementById("lastName").value;
        localStorage.setItem('tester', tempValue)
        c('clicked '+tempValue);
	}

	function receiveFromLocalStorage() {
        const tempHolder = localStorage.getItem('tester');
        c(tempHolder);
	}

    function stringifyToLocalStorage(str) {
return 


    } 

	//!  10123.161 0  MAIN
};
//!  123122.1839  END
