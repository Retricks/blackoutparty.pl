const tl = gsap.timeline({defaults:{ ease: 'power1.out'}});

tl.to('.intro__text', {y:'0%', duration: 2, stagger: 0.25});
tl.to('.intro__slider', {y:'-100%', duration: 1, delay: 0.5});
tl.to('.intro__container', {y:'-150%', duration: 1}, '-=0.8');
tl.to('.intro', {y:'-100%', duration: 1});
tl.fromTo('.hero__heading', {opacity: 1}, {opacity: 0, duration: 0.1}, '-=2');
tl.fromTo('.hero__heading', {opacity: 0}, {opacity: 1, duration: 0.1});
tl.fromTo('.hero__heading', {opacity: 1}, {opacity: 0, duration: 0.2});
tl.fromTo('.hero__heading', {opacity: 0}, {opacity: 1, duration: 0.1});
tl.fromTo('.hero__heading', {opacity: 1}, {opacity: 0, duration: 0.2});
tl.fromTo('.hero__heading', {opacity: 0}, {opacity: 1, duration: 0.1});
tl.fromTo('.hero__heading', {opacity: 1}, {opacity: 0, duration: 0.05});
tl.fromTo('.hero__heading', {opacity: 0}, {opacity: 1, duration: 0.05});