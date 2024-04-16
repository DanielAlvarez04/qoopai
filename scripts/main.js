gsap.registerPlugin(ScrollTrigger);

const fadeInElements = document.querySelectorAll('.fade-in');
const fadeButtonElements = document.querySelectorAll('.fade-button');
const fadeUpElements = document.querySelectorAll('.fade-up');
const pcUpElements = document.querySelectorAll('.module-pc-up');
const phoneUpElements = document.querySelectorAll('.module-phone-up');

fadeInElements.forEach(element => {
  gsap.fromTo(
    element,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'center center',
        scrub: false
      }
    }
  );
});

fadeUpElements.forEach(element => {
  gsap.fromTo(
    element,
    { opacity: 0, y: '16vh' },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'center center',
        scrub: false
      }
    }
  );
});

function isMobile() {
  // Verifica si el ancho de la pantalla es menor que 768px (tamaño típico de dispositivos móviles)
  return window.innerWidth < 768;
}

phoneUpElements.forEach(element => {
  gsap.fromTo(
    element,
    { y: isMobile() ? '90%' : '105%' }, 
    {
      y: isMobile() ? '-35%' : '25%', 
      duration: 1,
      ease: 'ease',
      scrollTrigger: {
        trigger: element,
        start: isMobile() ? 'top 105%' : 'top 105%', 
        end: 'center center',
        scrub: false
      }
    }
  );
});

pcUpElements.forEach(element => {
  gsap.fromTo(
    element,
    { y: isMobile() ? '90%' : '105%' }, 
    {
      y: isMobile() ? '-15%' : '25%',
      duration: 1,
      ease: 'ease',
      scrollTrigger: {
        trigger: element,
        start: isMobile() ? 'top 105%' : 'top 105%',
        end: 'center center',
        scrub: false
      }
    }
  );
});

fadeButtonElements.forEach(element => {
  gsap.fromTo(
    element,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      ease: 'ease',
      delay: 0.75,
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'center center',
        scrub: false
      }
    }
  );
});

gsap.to('.loop-1', {
  x: 800,
  duration: 10,
  ease: 'power4.out',
  scrollTrigger: {
    start: 'top bottom',
    end: 'bottom -10%',
    scrub: true
  }
});

gsap.to('.loop-2', {
  x: -800,
  duration: 10,
  ease: 'power4.out',
  scrollTrigger: {
    start: 'top bottom',
    end: 'bottom -10%',
    scrub: true
  }
});

gsap.fromTo('.tira-1',
  { x: -2250 },
  {
    x: 0,
    duration: 1,
    ease: 'power4.out',
    scrollTrigger: {
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  }
);

gsap.fromTo('.tira-2',
  { x: 2250 },
  {
    x: 0,
    duration: 1,
    ease: 'power4.out',
    scrollTrigger: {
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  }
);

gsap.fromTo('.tira-3',
  { x: -2250 },
  {
    x: 0,
    duration: 1,
    ease: 'power4.out',
    scrollTrigger: {
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  }
);


const lenis = new Lenis();

lenis.on('scroll', (e) => {
    console.log(e);
    ScrollTrigger.update();
});
gsap.ticker.add((time) => {
    lenis.raf(time * 800);
});
gsap.ticker.lagSmoothing(0);



//popup
var signUpButtons = document.querySelectorAll('.sign-up');
signUpButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var popupWrapper = document.querySelector('.popup-wrapper');
        popupWrapper.classList.add('visible');
    });
});

document.querySelector('.close-popup').addEventListener('click', function() {
    hidePopup();
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        hidePopup();
    }
});

document.querySelector('.cta-1').addEventListener('click', function() {
    var form = document.getElementById('myform');
    if (isFormFilled(form)) {
        hidePopup();
    } else {
        // Aquí puedes agregar alguna lógica para mostrar un mensaje de error o tomar otra acción
    }
});

function hidePopup() {
    var popupWrapper = document.querySelector('.popup-wrapper');
    popupWrapper.classList.remove('visible');
}

function isFormFilled(form) {
    var inputs = form.querySelectorAll('input');
    var filled = true;
    inputs.forEach(function(input) {
        if (!input.value) {
            filled = false;
        }
    });
    return filled;
}
