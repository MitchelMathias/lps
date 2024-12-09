$(document).ready(function () {
    if ($('.carrousel').hasClass('slick-initialized')) {
        $('.carrousel').slick('unslick');
    }
    
    $('.carrousel').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 650, 
                settings: {
                    slidesToShow: 1,  
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    arrows: false,
                }
            }
        ]
    });
});
