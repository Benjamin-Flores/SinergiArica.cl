'use strict'



    var service_image = document.querySelector('.articles');
    
    service_image.addEventListener('click', () => {
        service_image.style.opacity = "0.4";
    });

    setInterval(() => {
        service_image.style.opacity = "1";
    }, 1000);


    

    

