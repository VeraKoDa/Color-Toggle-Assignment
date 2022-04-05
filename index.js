// Toggle menu

let toggleMenuStatus = false;
let getMenu = document.querySelector(".color-menu");
let listItem = document.querySelector("input");
let menuBtn = document.getElementById("menu-btn");

function visibleMenu() {
  console.log("visible geactiveerd");
  getMenu.style.visibility = "visible";
  getMenu.style.width = "100px";
  getMenu.style.opacity = "1";

  toggleMenuStatus = true;
}
function hiddenMenu() {
  console.log("hidden geactiveerd");
  getMenu.style.visibility = "hidden";
  getMenu.style.width = "0";
  getMenu.style.opacity = "0";

  toggleMenuStatus = false;
}

let toggleMenu = function () {
  if (toggleMenuStatus === false) {
    getMenu.style.visibility = "visible";
    getMenu.style.width = "100px";
    getMenu.style.opacity = "1";

    toggleMenuStatus = true;
  } else if (toggleMenuStatus === true) {
    getMenu.style.visibility = "hidden";
    getMenu.style.width = "0";
    getMenu.style.opacity = "0";

    toggleMenuStatus = false;
  }
};
menuBtn.onfocus = visibleMenu;
menuBtn.onblur = hiddenMenu;

// Choose color

const background = document.getElementById("body");
const colorInfo = document.getElementById("userInformation");

let home = document.getElementById("home");
let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let green = document.getElementById("green");
let blue = document.getElementById("blue");
let newText = document.getElementById("userInformation");

function keyNumber(event) {
  let i = event.key;
  if (i == "1") {
    classHome;
  } else if (i == "2") {
    classRed;
  } else if (i == "3") {
    classYellow;
  } else if (i == "4") {
    classGreen;
  } else if (i == "5") {
    classBlue;
  }
}

home.addEventListener("click", classHome);
red.addEventListener("click", classRed);
yellow.addEventListener("click", classYellow);
green.addEventListener("click", classGreen);
blue.addEventListener("click", classBlue);
listItem.addEventListener("focusin", visibleMenu);

function classHome() {
  background.className = "home";
  let homebtn = document.getElementById("colorH");
  homebtn.checked = true;
  getMenu.style.visibility = "hidden";
  newText.textContent = `De achtergrondkleur is nu grijs, en de kleurcode is ${
    window.getComputedStyle(home, "").backgroundColor
  }`;
}

function classRed() {
  background.className = "red";
  let redbtn = document.getElementById("colorR");
  redbtn.checked = true;
  getMenu.style.visibility = "hidden";
  newText.textContent = `De achtergrondkleur is nu rood, en de kleurcode is ${
    window.getComputedStyle(red, "").backgroundColor
  }`;
}

function classYellow() {
  background.className = "yellow";
  let yellowbtn = document.getElementById("colorY");
  yellowbtn.checked = true;
  getMenu.style.visibility = "hidden";
  newText.textContent = `De achtergrondkleur is nu geel, en de kleurcode is ${
    window.getComputedStyle(yellow, "").backgroundColor
  }`;
}

function classGreen() {
  background.className = "green";
  let greenbtn = document.getElementById("colorG");
  greenbtn.checked = true;
  getMenu.style.visibility = "hidden";
  newText.textContent = `De achtergrondkleur is nu groen, en de kleurcode is ${
    window.getComputedStyle(green, "").backgroundColor
  }`;
}
function classBlue() {
  background.className = "blue";
  let bluebtn = document.getElementById("colorB");
  bluebtn.checked = true;
  getMenu.style.visibility = "hidden";
  getMenu.style.transition = "none";
  newText.textContent = `De achtergrondkleur is nu blauw, en de kleurcode is ${
    window.getComputedStyle(green, "").backgroundColor
  }`;
}

/* 
red.addEventListener("click", function () {
  background.className = "red";
  document.getElementById("colorList").classList.toggle("show");
});

yellow.addEventListener("click", function () {
  background.className = "yellow";
  yellow.addEventListener("click", function () {
    document.getElementById("colorList").classList.toggle("show");
  });
});

green.addEventListener("click", function () {
  background.classname = "green";
  document.getElementById("colorList").classList.toggle("show");
});

blue.addEventListener("click", function () {
  background.classname = "blue";
  document.getElementById("colorList").classList.toggle("show");
});
 */
