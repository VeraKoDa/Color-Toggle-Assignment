// Toggle menu

let getMenu = document.querySelector(".color-menu");
let menuList = document.getElementById("parent-menu");
let menuBtn = document.getElementById("menu-btn");

menuBtn.onfocus = visibleMenu;
menuBtn.onmouseover = visibleMenu;
menuBtn.onblur = hiddenMenu;
menuBtn.onmouseout = hiddenMenu;

menuList.addEventListener("focusin", visibleMenu);

function visibleMenu() {
  getMenu.style.visibility = "visible";
  getMenu.style.width = "100px";
  getMenu.style.opacity = "1";
}
function hiddenMenu() {
  getMenu.style.visibility = "hidden";
  getMenu.style.width = "0";
  getMenu.style.opacity = "0";
}

function keyNumber(event) {
  let i = event.key;
  if (i == "1") {
    classHome();
    hiddenMenu();
  } else if (i == "2") {
    classRed();
    hiddenMenu();
  } else if (i == "3") {
    classYellow();
    hiddenMenu();
  } else if (i == "4") {
    classGreen();
    hiddenMenu();
  } else if (i == "5") {
    classBlue();
    hiddenMenu();
  } else if (i == "Enter") {
    hiddenMenu();
  }
  return;
}

// Background Color

const background = document.getElementById("body");
const colorInfo = document.getElementById("userInformation");

let home = document.getElementById("home");
let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let green = document.getElementById("green");
let blue = document.getElementById("blue");
let newText = document.getElementById("userInformation");

home.addEventListener("click", classHome);
red.addEventListener("click", classRed);
yellow.addEventListener("click", classYellow);
green.addEventListener("click", classGreen);
blue.addEventListener("click", classBlue);

function classHome() {
  background.className = "home";
  let homebtn = document.getElementById("colorH");
  homebtn.checked = true;
  newText.textContent = `De achtergrondkleur is nu grijs, en de kleurcode is ${
    window.getComputedStyle(home, "").backgroundColor
  }`;
}

function classRed() {
  background.className = "red";
  let redbtn = document.getElementById("colorR");
  redbtn.checked = true;
  newText.textContent = `De achtergrondkleur is nu rood, en de kleurcode is ${
    window.getComputedStyle(red, "").backgroundColor
  }`;
}

function classYellow() {
  background.className = "yellow";
  let yellowbtn = document.getElementById("colorY");
  yellowbtn.checked = true;
  newText.textContent = `De achtergrondkleur is nu geel, en de kleurcode is ${
    window.getComputedStyle(yellow, "").backgroundColor
  }`;
}

function classGreen() {
  background.className = "green";
  let greenbtn = document.getElementById("colorG");
  greenbtn.checked = true;

  newText.textContent = `De achtergrondkleur is nu groen, en de kleurcode is ${
    window.getComputedStyle(green, "").backgroundColor
  }`;
}
function classBlue() {
  background.className = "blue";
  let bluebtn = document.getElementById("colorB");
  bluebtn.checked = true;

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
