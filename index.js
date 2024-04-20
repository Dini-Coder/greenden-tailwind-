//Selecting Side Nav bar, menuIcon

var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuIcon")

menuicon.addEventListener("click", function(){
    sidenav.style.right=0
})

var close = document.getElementById("close-nav")
close.addEventListener("click", function(){
    sidenav.style.right="-50%"  
    
})