//JavaScript, use pictures as buttons, sends and receives values to/from the Rpi

//These are all the buttons

var button_0 = document.getElementById("button_0");

var button_1 = document.getElementById("button_1");

var button_2 = document.getElementById("button_2");

var button_3 = document.getElementById("button_3");





//this function sends and receives the pin's status

function change_pin (pin, status) {

	//this is the http request

	var request = new XMLHttpRequest();

	request.open( "GET" , "gpio.php?pin=" + pin + "&status=" + status );

	request.send(null);

	//receiving information

	request.onreadystatechange = function () {

		if (request.readyState == 4 && request.status == 200) {

			return (parseInt(request.responseText));

		}

	//test if fail

		else if (request.readyState == 4 && request.status == 500) {

			alert ("server error");

			return ("fail");

		}

	//else 

		else { return ("fail"); }

	}

}



//these are all the button's events, it just calls the change_pin function and updates the page in function of the return of it.

button_0.addEventListener("click", function () { 

	//if red

	if ( button_0.alt === "off" ) {

		//use the function

		var new_status = change_pin ( 0, 0);

		if (new_status !== "fail") { 

			button_0.alt = "on"

			button_0.src = "pic/on0.png"; 

			return 0;

			}

		}

	//if green

	if ( button_0.alt === "on" ) {

		//use the function

		var new_status = change_pin ( 0, 1);

		if (new_status !== "fail") { 

			button_0.alt = "off"

			button_0.src = "pic/off0.png"; 

			return 0;

			}

		}

} );

	

button_1.addEventListener("click", function () { 

	//if red

	if ( button_1.alt === "off" ) {

		//use the function

		var new_status = change_pin ( 1, 0);

		if (new_status !== "fail") { 

			button_1.alt = "on"

			button_1.src = "pic/on1.png"; 

			return 0;

			}

		}

	//if green

	if ( button_1.alt === "on" ) {

		//use the function

		var new_status = change_pin ( 1, 1);

		if (new_status !== "fail") { 

			button_1.alt = "off"

			button_1.src = "pic/off1.png"; 

			return 0;

			}

		}

} );

	

button_2.addEventListener("click", function () { 

	//if red

	if ( button_2.alt === "off" ) {

		//use the function

		var new_status = change_pin ( 2, 0);

		if (new_status !== "fail") { 

			button_2.alt = "on"

			button_2.src = "pic/on2.png"; 

			return 0;

			}

		}

	//if green

	if ( button_2.alt === "on" ) {

		//use the function

		var new_status = change_pin ( 2, 1);

		if (new_status !== "fail") { 

			button_2.alt = "off"

			button_2.src = "pic/off2.png"; 

			return 0;

			}

		}

} );

	

button_3.addEventListener("click", function () { 

	//if red

	if ( button_3.alt === "off" ) {

		//use the function

		var new_status = change_pin ( 3, 0);

		if (new_status !== "fail") { 

			button_3.alt = "on"

			button_3.src = "pic/on3.png"; 

			return 0;

			}

		}

	//if green

	if ( button_3.alt === "on" ) {

		//use the function

		var new_status = change_pin ( 3, 1);

		if (new_status !== "fail") { 

			button_3.alt = "off"

			button_3.src = "pic/off3.png"; 

			return 0;

			}

		}

} );


	
