function show_alert() {
    alert("Thanks! We'll be launching soon.");
}
    
    function validateForm() {
        let x = document.forms["form-group"]["fname"].value;
        if (x == "") {
            alert("Name must be filled out");
            return false;
        }
        }

    function validateForm() {
        let x = document.forms["form-group"]["address"].value;
        if (x == "") {
            alert("Address must be filled out");
            return false;
        }
        }

    function validateForm() {
        let x = document.forms["form-group"]["email"].value;
        if (x == "") {
            alert("Email must be filled out");
            return false;
        }
        }

    function validateForm() {
        let x = document.forms["form-group"]["phone"].value;
        if (x == "") {
            alert("phone must be filled out");
            return false;
        }
    }
