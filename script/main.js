$(document).ready(function () {
    $('.carrousel').slick({
        slidesToShow: 5, 
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024, 
                settings: {
                    slidesToShow: 1,  
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000
                }
            }
        ]
    });
});
