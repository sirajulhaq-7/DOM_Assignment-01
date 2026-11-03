// Change Text Using JavaScript
let head = document.getElementById("head");
head.textContent = "Welcome to JavaScript DOM";

// Change Paragraph Text on Button Click
function changeT() {
  const para = document.querySelector("#para");
  para.textContent = "Paragraph text changed!";
}

// Change Background Color on Button Click
function changeB() {
  const back = document.getElementById("back");
  back.style.backgroundColor = "lightblue";
}

// Show Alert Message on Button Click
function message() {
  alert("DOM is working!");
}

// Update Text Using Input Field
const input = document.getElementById("input");
const paragraph = document.getElementById("paragraph");
const update = document.querySelector("#update");
update.addEventListener("click", () => {
  paragraph.innerText = input.value;
});
