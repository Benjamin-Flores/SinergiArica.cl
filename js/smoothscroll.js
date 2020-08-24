'use strict'


    //This is for the bookmark
    $(function () {
        $('a[href*=\\#]:not([href=\\#])').on('click', function () {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.substr(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 300);
                return false;
            }
        });
    });


    function goBack(){
        window.history.go(-1);
    }













