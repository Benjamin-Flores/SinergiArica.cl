'use strict'

window.addEventListener('load', () => {


    var button = document.querySelector('.checkbtn');

    button.addEventListener("click", function(){
        menuLateral();
    });

    function menuLateral(){
        
        var lateral_menu = document.getElementById('menu');
        addMargin();

        if(lateral_menu.style.left == "0px"){
            lateral_menu.style.left = "-100%";
            lateral_menu.style.background = "transparent";
        }else{
            lateral_menu.style.left = "0px";
            lateral_menu.style.background = "#333333";
        }
        console.log(lateral_menu);
        
        
    }

        //This function add some margin-top when the mobile-navigation-bar icon is clicked, and remove that margin when is clicked again
    function addMargin() {

        if (document.getElementById("h1").style.marginTop != "30vh") {
            document.getElementById("h1").style.marginTop = "30vh";
        } else {
            document.getElementById("h1").style.marginTop = "20px";
        }
        
    }

    document.querySelectorAll('.left-checker').forEach(element => element.addEventListener('click', function(){
        left_checker();
    }));
    

    //This function remove the mobile-navigation-bar when a link is clicked
    function left_checker() {
        console.log('hola');
        var lateral_menu = document.getElementById('menu');
        lateral_menu.style.left = "-100%";
        lateral_menu.style.background = "transparent";
        document.getElementById("h1").style.marginTop = "20px";
    }


    //This function detect the orientation of the screen and does some interaction 
    window.addEventListener("orientationchange", function() {
        
        if (screen.orientation.angle == 90){
            var lateral_menu = document.getElementById('menu');
            lateral_menu.style.left = "-100%";
            lateral_menu.style.background = "transparent";
            document.getElementById("h1").style.marginTop = "20px";
        } else if (screen.orientation.angle == 0){
            var lateral_menu = document.getElementById('menu');
            lateral_menu.style.left = "-100%";
            lateral_menu.style.background = "transparent";
            document.getElementById("h1").style.marginTop = "20px";
        }
    });


});