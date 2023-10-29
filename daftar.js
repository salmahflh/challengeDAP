var state= false;
function showHide(){
  if(state){
    document.getElementById("password").setAttribute("type", "password");
    document.getElementById("eyeIcon").src = "public/eye-off.svg"
    state = false;
  }else{
    document.getElementById("password").setAttribute("type", "text");
    document.getElementById("eyeIcon").src = "public/eye.svg"
    state = true;
  }
}

var state= false;
function showHide2(){
  if(state){
    document.getElementById("password11").setAttribute("type", "password");
    document.getElementById("eyeIcon11").src = "public/eye-off.svg"
    state = false;
  }else{
    document.getElementById("password11").setAttribute("type", "text");
    document.getElementById("eyeIcon11").src = "public/eye.svg"
    state = true;
  }
}

function signup() {
    return alert("Anda berhasil login");
}