const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Sequoia_Lab.png") {
    myImage.setAttribute("src", "images/WostiT.png");
  } else {
    myImage.setAttribute("src", "images/Sequoia_Lab.png");
  }
});
