
function validateForm() {
    // Get the value of the input field with id="email"
    var user = document.getElementById("username").value;
    // Get the value of the input field with id="password"
    var password = document.getElementById("password").value;
    // Check if the email is empty
    if (user == "") {
      alert("الرجاء ادخال اسم الحساب");
      return false;
    }
    // Check if the password is empty
    if (password == "") {
      alert("الرجاء ادخال الرقم السري");
      return false;
    }else {
        if(password.length < 6){
        alert(" الرجاء ادخال الرقم السري بشكل صحيح");
      return false;
    } }
    // Send a request to the server to check the user's credentials
    // If the credentials are correct, return true to submit the form
    // If the credentials are incorrect, display an error message and return false to prevent the form from being submitted
    return true;
  }
