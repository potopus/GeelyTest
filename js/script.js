$(document).ready(function () {
    $(".slider").slick({
        arrows: false,
        dots: true,
        variableWidth: true,
        initialSlide: 4,
    });
    $(".slider-vert").slick({
  
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1280,
                slidesToShow: 3,
            }

        ]
    });
})

// Interpolation

// const slider = document.querySelector(".slider");

// window.addEventListener(`resize`, event => {
//     const windowInnerWidth = window.innerWidth;
//     let intrepolation =   
//     // some code
//   }, false);
