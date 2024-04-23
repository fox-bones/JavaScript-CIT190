document.getElementById('sub').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('lastnameError').innerHTML = '';
    document.getElementById('firstnameError').innerHTML = '';
    document.getElementById('emailError').innerHTML = '';
    document.getElementById('seasonError').innerHTML = '';
    document.getElementById('accomodationError').innerHTML = '';
    var fName = document.getElementById("firstname").value;
	var lName = document.getElementById("lastname").value;
	var email = document.getElementById("email").value;
    var seasons = document.getElementById('seasonList').value;
    var star5 = document.getElementById('star5').checked;
    var rentalHouse = document.getElementById('rentalhouse').checked;
    var pool = document.getElementById('pool').checked;
    var fitness = document.getElementById('fitness').checked;
    var dining = document.getElementById('dining').checked;
    var golf = document.getElementById('golf').checked;
    var ammenities = document.getElementById('roomammenities').checked;
    var beach = document.getElementById('beach').checked;
    var errorFlag = false;

    if (fName == '') {
        document.getElementById('firstnameError').innerHTML = 'Please enter a first name';
        errorFlag = true;
    }
    if (lName == '') {
        document.getElementById('lastnameError').innerHTML = 'Please enter a last name';
        errorFlag = true;
    }
    if (seasons == '') {
        document.getElementById('seasonError').innerHTML = 'Please choose a season preference';
        errorFlag = true;
    }
    if (star5 == false && rentalHouse == false && pool == false && fitness == false && 
        dining == false && golf == false && ammenities == false && beach == false) {
            document.getElementById('accomodationError').innerHTML = 'Please choose at least one accomidation';
            errorFlag = true;
    }
    if (email == '') {
        document.getElementById('emailError').innerHTML = 'Please enter an email';
        errorFlag = true;
    }
    if (email) {
		var atposition=email.indexOf("@");  
		var dotposition=email.lastIndexOf(".");  
		if (atposition < 1 || dotposition < atposition+2 || dotposition +2 >= email.length){  
	 	  document.getElementById("emailError").innerHTML = 'The email address you entered is invalid.';
	      errorFlag = true;		  
		}
    }
    if (errorFlag == false) {
        localStorage.firstname = fName;
        localStorage.lastname = lName;
        localStorage.email = email;
        localStorage.seasons = seasons;
        localStorage.star5 = star5;
        localStorage.rentalHouse = rentalHouse;
        localStorage.pool = pool;
        localStorage.firness = fitness;
        localStorage.dining = dining;
        localStorage.golf = golf;
        localStorage.ammenities = ammenities;
        localStorage.beach = beach;
        window.location.assign('vacationConfirmation.html');
    }
})