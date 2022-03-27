var slideshows = document.querySelectorAll('[data-component="slideshow"]');

// Apply to all slideshows that you define with the markup wrote
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {

    var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`); // Get an array of slides

    var index = 0, time = 5000;
    slides[index].classList.add('active');
    setInterval(() => {
        slides[index].classList.remove('active');
        //Go over each slide incrementing the index
        index++;

        // If you go over all slides, restart the index to show the first slide and start again
        if (index === slides.length) index = 0;

        slides[index].classList.add('active');

    }, time);
}
var index = 0;
function imgPlus() {

    var slides = document.querySelectorAll(`.slide`); // Get an array of slides
    for (var i = 0; i < slides.length; i++) {
        index++;
        break;
    }
    if (index == 3) {
        index = 0;
        slides[2].classList.remove('active');
    }
   slides[index].classList.add('active');
   slides[index - 1].classList.remove('active');
    console.log("plus", index);
}

function imgMinus() {
    if(index == 0) {
        return;
    }
    var slides = document.querySelectorAll(`.slide`); // Get an array of slides
    for (var i = slides.length -1; i >= 0; i--) {
        index--;
        break;
    }
   slides[index].classList.add('active');
   slides[index + 1].classList.remove('active');
    console.log(index);
}