    'use strict';
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
		slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        loop: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
        centeredSlides: true
    });

    $(function() {
        var i = 0;

        $(".should").eq(i).addClass("s");
        $(".should").eq(0).show().siblings(".should").hide();
        $(".lineage").click(function() {
            var b = $(this).index();
            $(".should").eq(b).show("s").siblings(".should").hide("s")
        })
        $(".state").eq(0).addClass("h");

        $(".swiper-slide").mouseover(function() {

            var a = $(this).index();
            $(".state").eq(a).show("h").siblings(".state").hide("h");
        })
        $(".swiper-slide").mouseleave(function() {
            var a = $(this).index();
            $(".state").eq(a).hide("h");
        })


    })