// Store a reference to the <h1> in a variable
const myHeading = document.querySelector("h1");
const listItems = document.querySelectorAll("li");
// Update the text content of the <h1>
myHeading.textContent = "Hello world!";

function toggleDone(e) {
  if (!e.target.className) {
    e.target.className = "done";
  } else {
    e.target.className = "";
  }
}

listItems.forEach((item) => {
  item.addEventListener("click", toggleDone);
});
