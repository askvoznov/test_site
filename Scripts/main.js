var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "Image/Logo.png") {
    myImage.setAttribute("src", "Image/Logo 2.png");
  } else {
    myImage.setAttribute("src", "Image/Logo.png");
  }
};