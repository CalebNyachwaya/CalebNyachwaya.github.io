function showContainer2() {
  // Get references to the containers
  var container1 = document.getElementById("console");
  var container2 = document.getElementById("container2");

  // Hide container 1 and show container 2
  container1.style.display = "none";
  container2.style.display = "block";
}

function showContainer1() {
  // Get references to the containers
  var container1 = document.getElementById("console");
  var container2 = document.getElementById("container2");

  // Hide container 1 and show container 2
  container1.style.display = "block";
  container2.style.display = "none";
}
function changeS(newText) {
  document.getElementById("links-widget").textContent = newText;
}

function resetS() {
  document.getElementById("links-widget").textContent = "";
}

window.onresize = screen;
window.onload = screen;

function screen() {
  myWidth = window.innerHeight;
  document.getElementById("size").innerHTML = "Height : " + myWidth + "px";
}
