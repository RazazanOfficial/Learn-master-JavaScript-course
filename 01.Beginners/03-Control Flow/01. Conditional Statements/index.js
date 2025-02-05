let password;
if (password === 8) {
  console.log("welcome");
} else if (password <= 8) {
  console.log("password is too short");
} else if (password >= 8) {
  console.log("Too long password");
  console.log("Password should be 8 characters");
} else {
  console.log("Please provide a password");
}
