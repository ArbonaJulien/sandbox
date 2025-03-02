(function () {
  // Your code here
  var tl_1 = gsap.timeline({
    scrollTrigger: {
      trigger: '.step-1',
      pin: true,
      start: 'top 48px',
      end: '+=500',
      scrub: 1,
    },
  });

  tl_1
    .from('.step-1 .copy-container', {
      duration: 1,
      opacity: 0,
    })
    .from('.step-1 .copy', {
      duration: 1,
      opacity: 0,
    });

  var tl_2 = gsap.timeline({
    scrollTrigger: {
      trigger: '.step-2',
      pin: true,
      start: 'top 48px',
      end: '+=1600',
      scrub: 1,
    },
  });

  tl_2
    .from('.step-2 .copy-container', {
      duration: 1,
      opacity: 0,
    })
    .from('.step-2 .copy', {
      duration: 1,
      y: '120vh',
      ease: Linear,
    });

  var tl_3 = gsap.timeline({
    scrollTrigger: {
      trigger: '.step-3',
      pin: true,
      start: 'top 48px',
      end: '+=500',
      scrub: 1,
      pinSpacing: false,
    },
  });

  tl_3
    .from(
      '.step-3 .copy-container',
      {
        duration: 1,
        backgroundColor: 'rgba(0,0,0, .7)',
      },
      '<'
    )
    .from(
      '.step-3 .copy',
      {
        duration: 1,
        opacity: 1,
      },
      '<'
    )
    .from('.step-3 .picture-container', {
      duration: 1,
      height: '100vh',
    });
})();
