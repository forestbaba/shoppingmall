$(document).ready(function () {

    //Banner owl carousel
    $("#banner-area .owl-carousel").owlCarousel({
        dots: true,
        item:1
    })

    //top sale carousel
    $("#top-sale .owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        responsive: {
            0: {
                item:1
            },
            600: {
                item:3
            },
            1000: {
                item:5
            }
        }
    })

    //ISotope filter
    let $grid = $('.grid').isotope({
        itemSelector: ".grid-item",
        layoutMode:'fitRows'
    })

    //Filter item on button clicked
    $('.button-group').on('click', "button", function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    })
})