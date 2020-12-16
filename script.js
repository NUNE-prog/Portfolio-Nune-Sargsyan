function myFunction() {
    document.getElementById("dropdown-menu").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.menu_item')) {
        var dropdowns = document.getElementsByClassName("drop-menu");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        autoplay: true,
        loop: true,
        nav: true,
        responsive : {
            0:{
                items: 1,
                nav: true,
                center: true,
                dots: false,
            },

            420: {
                items: 1,
                nav: true,
                center: true,
                dots: false,
            },

            500:{
                items: 2,
                nav: true,
                dots: false,
            },
            // breakpoint from 480 up
            768 : {
                items: 3,
            },
            // breakpoint from 768 up
            992 : {
                items:4,
            },

            1200:{
                items:4,
            },
        }
    });
});