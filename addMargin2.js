'use strict'

//This function add some margin-top when the mobile-navigation-bar icon is clicked, and remove that margin when is clicked again
function addMargin() {

    if (document.getElementById("h1").style.marginTop != "30vh") {
        document.getElementById("h1").style.marginTop = "30vh";
    } else {
        document.getElementById("h1").style.marginTop = "20px";
    }
    
}

//This function remove the mobile-navigation-bar when a link is clicked
function left_checker() {
    document.getElementById("check").checked = false;
    document.getElementById("h1").style.marginTop = "20px";
}


//This function detect the orientation of the screen and does some interaction 
window.addEventListener("orientationchange", function() {
    
    if (screen.orientation.angle == 90){
        document.getElementById("check").checked = false;
        document.getElementById("h1").style.marginTop = "20px";
    } else if (screen.orientation.angle == 0){
        document.getElementById("check").checked = false;
        document.getElementById("h1").style.marginTop = "20px";
    }
});