(function () {
  // Your code here
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.step-1',
      pin: true,
      start: 'top 48px',
      end: '+=500',
      scrub: 1,
    },
  });

  tl.from('.step-1 .copy-container', {
    duration: 1,
    opacity: 0,
  }).from('.step-1 .copy', {
    duration: 1,
    opacity: 0,
  });
})();
