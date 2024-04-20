//Selecting Side Nav bar, menuIcon

var sidenav = document.getElementById("sidenav");
var menuicon = document.getElementById("menuIcon");

menuicon.addEventListener("click", function () {
  sidenav.style.right = 0;
});

var close = document.getElementById("close-nav");
close.addEventListener("click", function () {
  sidenav.style.right = "-50%";
});

//product search functionality

var productContainer = document.getElementById("product-container");

var search = document.getElementById("Search");
var productlist = productContainer.querySelectorAll("div");

// console.log(productlist);

search.addEventListener("keyup", function () {
  var enteredValue = event.target.value.toUpperCase();

  for (count = 0; count < productlist.length; count = count + 1) {
    var productname = productlist[count].querySelector("h1").textContent;

    if (productname.toUpperCase().indexOf(enteredValue) < 0) {
      productlist[count].style.display = "none";
    } else {
      productlist[count].style.display = "block";
    }
  }

});
