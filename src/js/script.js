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

  function minimizePicture(picture) {
    // if (!CSS.supports("animation-timeline: scroll()")) {
    //   const picture = document.querySelector(".picture");
    //   if (picture === null) return;

    //   const pictureRect = picture.getBoundingClientRect();
    //   if (pictureRect.top < 49) {
    //     picture.classList.add("minimize");
    //   } else {
    //     picture.classList.remove("minimize");
    //   }
    // }

    if (!CSS.supports("animation-timeline: scroll()")) {
      if (picture === null) return;

      const pictureRect = picture.getBoundingClientRect();
      console.log(pictureRect.top);
      if (pictureRect.top < 49) {
        picture.classList.add("minimized");
      } else {
        picture.classList.remove("minimized");
      }
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    // Code à exécuter une fois que le DOM est entièrement chargé
    // document.addEventListener("scroll", function () {
    //   const image = document.querySelector(".scroll-container img");
    //   darkenImage(image);
    // });

    document.addEventListener("scroll", function () {
      const picture = document.querySelector(".picture");
      minimizePicture(picture);
    });
  });
})();
