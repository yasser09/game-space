function isEmpty(value) {
    return value.trim() === '';
  }
  
  function isValidEmail(email) {
    // Regular expression for validating email format
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
  
  function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Check if username and password are empty
    if (isEmpty(username) || isEmpty(password)) {
      alert("Username and password are required.");
      return false;
    }
  
    // Check if username follows email rules
    if (!isValidEmail(username)) {
      alert("Please enter a valid email address as the username.");
      return false;
    }
  
    return true; // Form is valid, allow submission
  }
  