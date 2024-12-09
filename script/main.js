$(document).ready(function () {
    if ($('.carrousel').hasClass('slick-initialized')) {
        $('.carrousel').slick('unslick');
    }
    
    $('.carrousel').slick({
        infinity:true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 650, 
                settings: {
                    slidesToShow: 1,
                    infinity:true,  
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    arrows: false,
                }
            }
        ]
    });
});
