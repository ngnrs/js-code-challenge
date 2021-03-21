function isEmpty() {
  if (document.forms["form"]["input-address"].value === "") {
    alert("Please fill in bitcoin address");
    return false;
  } else if (document.forms["form"]["input-amount"].value === "") {
    alert("Input amount cannot be empty");
    return false;
  } else if (document.forms["form"]["input-otp"].value === "") {
    alert("Invalid OTP");
    return false;
  } else {
    alert("Application successful.");
    location.reload();
    return true;
  }
}
