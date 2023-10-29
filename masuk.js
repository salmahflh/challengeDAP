const passwordField = document.getElementById("myInput");

function togglePasswordVisibility() {
    if (passwordField.type === "password") {
        passwordField.type = "text";
        document.getElementById("eyeIcon").src = "public/external/eye-open.svg"
      } else {
        passwordField.type = "password";
        document.getElementById("eyeIcon").src = "public/external/outlineeyeoffi321-64ar.svg"
      }
}
function masuk() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("myInput").value;

  if (username === "" || password === "") {
    alert("Username dan password harus diisi!!!!");
    return;
  } else {
    if (password.length < 8) {
      alert("Password harus lebih dari 8 karakter");
      return;
    } else {
      alert("Anda berhasil login");
    }
  }
}