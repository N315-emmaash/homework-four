var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

function init () {
    $("#submit").on("click", function (e){
e.preventDefault();
let un = $("#uName").val();
let pd = $("#pWord").val();

if (un == "") {
    Swal.fire('Enter your username.')
} else if (pd == "") {
    Swal.fire('You need to enter your password.')
} else{
    Swal.fire('You are signed in!')
    $("#uName").val("");
    $("#pWord").val("");
} 
    });
}

$(document).ready(function () {
    init();
});