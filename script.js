const ham = document.querySelector(".hamburger");
const ul = document.querySelector("#ul1");

ham.addEventListener("click", () => {
  ul.classList.toggle("show");

  if (ul.classList.contains("show")) {
    ham.innerHTML = "&times;";
  } else {
    ham.innerHTML = "&#9776;";
  }
});

const resumebtn = document.getElementById("resumebtn");
const dropdown = document.getElementById("dropdowncontent");

resumebtn.addEventListener("click", (e) => {
  e.stopPropagation();
  dropdown.classList.toggle("show");
});

window.addEventListener("click", () => {
  dropdown.classList.remove("show");
});
