let listDivs = document.querySelectorAll(".slide");
console.log(listDivs);
let currentSlide = 0;
let lastSlide = listDivs.length - 1;

function next() {
    if (currentSlide < lastSlide) {
        listDivs[currentSlide].classList.remove('active');
        currentSlide++;
        listDivs[currentSlide].classList.add('active');
    } else if (currentSlide == lastSlide) {
        listDivs[currentSlide].classList.remove('active');
        currentSlide = 0;
        listDivs[currentSlide].classList.add('active');
    }
}

function previous() {
    if (currentSlide > 0) {
    listDivs[currentSlide].classList.remove('active');
    currentSlide--;
    listDivs[currentSlide].classList.add('active');
    }
    else if (currentSlide == 0) {
    listDivs[currentSlide].classList.remove('active');
    currentSlide = lastSlide;
    listDivs[currentSlide].classList.add('active');
    }
}

setInterval(next, 5000);