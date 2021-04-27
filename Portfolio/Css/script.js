$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    })
});


var typed = new Typed(".typing", {
    strings: ["Developer", "Student"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typing2", {
    strings: ["Web Developer", "Student at ESGI"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});


function myFunction(x) {
    x.classList.toggle("change");
}

$('.container').click(function (e) {
    e.preventDefault();
    $('.salut').toggleClass('is-open');
})