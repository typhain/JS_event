// Exercie 1
var footer = document.getElementsByTagName("footer")[0];
var count = 1
footer.addEventListener("click", function()
  {
    console.log("clic numéro" + " " + count);
    count += 1
 });

//Exercice 2
 var navbarHeader = document.getElementById("navbarHeader");
 var navBtn = document.querySelector(".navbar-toggler-icon");
 navBtn.addEventListener("click", function() {
   navbarHeader.classList.toggle("collapse");
 });


//Exercice 3
 var textCard = document.querySelectorAll(".card-body p");
 var editBtn = document.querySelectorAll(".card .btn");
 editBtn[1].addEventListener("click", function() {
   textCard[0].style.color = "red";
 });

//Exercice 4
textCard[1].style.color = "rgb(33, 37, 41)";
editBtn[3].addEventListener("click", function() {
      if (textCard[1].style.color == "rgb(33, 37, 41)") {
       textCard[1].style.color = "green";
     } else {
       textCard[1].style.color = "rgb(33, 37, 41)";
     }
   });

//Exercice 5
var header = document.getElementsByTagName("header")[0];
var headerOnClick = function(){
  if (document.styleSheets[0].disabled == false) {
  document.styleSheets[0].disabled = true;
} else {
  document.styleSheets[0].disabled = false;
  }
}
header.addEventListener("dblclick", headerOnClick)

//Exercice 6
function reduceCard() {
  let cards = document.querySelectorAll(".card");

  for (let index in cards) {
    let cardImg = cards[index].querySelector(".card-img-top");
    let textCard = cards[index].querySelector(".card-body p");
    let viewBtn = cards[index].querySelector(".card .btn");

    viewBtn.addEventListener("mouseover", function() {
      if (viewBtn.classList.contains("mouse-over")) {
        textCard.style.display = "";
        cardImg.style.width = "";
        cardImg.style.margin = "";
      } else {
        textCard.style.display = "none";
        cardImg.style.width = "20%";
        cardImg.style.margin = "auto";
      }
      viewBtn.classList.toggle("mouse-over");
    });
  }
}

reduceCard()

//Exercice 7
