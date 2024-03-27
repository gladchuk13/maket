/* 
const listImgs = document.querySelectorAll('.fruits-list li');

const seTtings = {
    root: null,
    rootMargin: '0px', 
    threshold: 0.5
};

function interSectionCallback(is, observer)  {
    console.log('called function');
    is.forEach(i => {
        // isIntersecting це властвисть обэкта яка вказуе чи перетинаэться елемент з облостью що спостерегаэться.
        if (i.isIntersecting) {
            i.target.querySelector('img').classList.replace('inactive', 'active');
            i.target.querySelector('h3').classList.replace('inactive', 'active');
        } else {
            i.target.querySelector('img').classList.replace('active', 'inactive');
            i.target.querySelector('h3').classList.replace('active', 'inactive'); 
        };
    });
};

const observer = new IntersectionObserver(interSectionCallback, seTtings); 

listImgs.forEach(listImg => {
    observer.observe(listImg);
}); */


const slider = document.querySelector('.slider');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');



let currentIndex = 0;

function showSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`
}
function goToSlide(index) {
    currentIndex = index;
    showSlide(currentIndex)
    activeDots()
}
function goToNextSlide() {
    currentIndex = (currentIndex +1) % slides.length;
    showSlide(currentIndex)
    activeDots()
}
function goToPrevSlide() {
    currentIndex = (currentIndex -1 + slides.length) % slides.length;
    showSlide(currentIndex)
    activeDots()
}
function activeDots() {
    dots.forEach((dot, index) => {
     if(index === currentIndex) {
            dot.classList.add('active')
        } else {
            dot.classList.remove('active')
        }
    } )
}
prevButton.addEventListener('click', goToPrevSlide)
nextButton.addEventListener('click', goToNextSlide)
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        goToSlide(index)
    })
})
showSlide(currentIndex);
activeDots();




const listImgs = document.querySelectorAll('.photo-list img');

const settings = {
    root: null,
    rootMargin: '0px', 
    threshold: 0.5
};

function intersectionCallback(entries, observer)  {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.replace('inactive', 'active');
        } else {
            entry.target.classList.replace('active', 'inactive');
        };
    });
};

const observer = new IntersectionObserver(intersectionCallback, settings); 

listImgs.forEach(img => {
    observer.observe(img);
});
