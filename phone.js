// JavaScript File xdfgh

var OneBtn = document.getElementById("OneBtn");

var TwoBtn = document.getElementById("TwoBtn");

var ThreeBtn = document.getElementById("ThreeBtn");

var FourBtn = document.getElementById("FourBtn");

var FiveBtn = document.getElementById("FiveBtn");

var SixBtn = document.getElementById("SixBtn");

var SevBtn = document.getElementById("SevBtn");

var EightBtn = document.getElementById("EightBtn");

var NineBtn = document.getElementById("NineBtn");

var AstBtn = document.getElementById("AstBtn");

var ZeroBtn = document.getElementById("ZeroBtn");

var PouBtn = document.getElementById("PouBtn");

var numInfo = document.getElementById("numInfo");

OneBtn.addEventListener("click", function(){
  numInfo.innerHTML = "1";
});

TwoBtn.addEventListener("click", function(){
  numInfo.innerHTML = "2";
});

ThreeBtn.addEventListener("click", function(){
  numInfo.innerHTML = "3";
});

FourBtn.addEventListener("click", function(){
  numInfo.innerHTML = "4";
});

FiveBtn.addEventListener("click", function(){
  numInfo.innerHTML = "5";
});

SixBtn.addEventListener("click", function(){
  numInfo.innerHTML = "6";
});

SevBtn.addEventListener("click", function(){
  numInfo.innerHTML = "7";
});

EightBtn.addEventListener("click", function(){
  numInfo.innerHTML = "8";
});

NineBtn.addEventListener("click", function(){
  numInfo.innerHTML = "9";
});

AstBtn.addEventListener("click", function(){
  numInfo.innerHTML = "*";
});

ZeroBtn.addEventListener("click", function(){
  numInfo.innerHTML = "0";
});

PouBtn.addEventListener("click", function(){
  numInfo.innerHTML = "#";
});