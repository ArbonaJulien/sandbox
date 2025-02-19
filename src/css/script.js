(function () {
  function darkenImage(image) {
    if (image === null) {
      return;
    }

    const scrollPosition = window.scrollY;
    const imageRect = image.getBoundingClientRect();
    const delta = 400;
    const fadeStart = imageRect.top + delta; // Début de l'assombrissement
    const fadeEnd = fadeStart + imageRect.height; // Assombrissement max att
    const fadeReturn = fadeEnd + 2200; // Retour à la luminosité normale

    let brightness;
    if (scrollPosition < fadeStart) {
      brightness = 1;
    } else if (scrollPosition < fadeEnd) {
      brightness =
        1 - ((scrollPosition - fadeStart) / (fadeEnd - fadeStart)) * 0.6;
    } else if (scrollPosition < fadeReturn) {
      brightness =
        0.4 + ((scrollPosition - fadeEnd) / (fadeReturn - fadeEnd)) * 0.6;
    } else {
      brightness = 1;
    }
    brightness = Math.min(Math.max(brightness, 0.5), 1); // Min : 0.6, Max : 1
    // Applique le filtre

    image.style.filter = `brightness(${brightness})`;
  }

  document.addEventListener("DOMContentLoaded", function () {
    // Code à exécuter une fois que le DOM est entièrement chargé

    document.addEventListener("scroll", function () {
      const image = document.querySelector(".scroll-container img");
      darkenImage(image);
    });

    function updateVideoHeight() {
      const videoWrapper = document.querySelector(".video-strech-wrapper");
      const rect = videoWrapper.getBoundingClientRect();
      const picture = document.querySelector(".video-strech-wrapper picture");
      const copy = document.querySelector(".video-strech-copy");
      // console.log(rect.bottom, window.innerHeight);
      if (rect.top < 49) {
        const scrollProgress = Math.max(
          0,
          Math.min(1, (window.scrollY - rect.top) / (window.innerHeight + 110)),
        );
        const targetHeight = Math.max(
          300,
          (window.innerHeight + 110) * (1 - scrollProgress),
        );

        const targetBrightness = Math.max(0.5, Math.min(scrollProgress, 1));
        // console.log(targetBrightness);
        picture.style.filter = `brightness(${targetBrightness})`;

        console.log(scrollProgress);
        // L'opacité diminue linéairement de 1 à 0
        const targetOpacity = Math.max(0, 1 - (scrollProgress - 0.16) * 3);
        copy.style.opacity = targetOpacity;

        videoWrapper.style.height = `${targetHeight}px`;
      }
    }

    window.addEventListener("scroll", () => {
      requestAnimationFrame(updateVideoHeight);
    });

    // Initial height
    updateVideoHeight();
  });
})();
