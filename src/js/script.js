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

  let scrollY = window.scrollY;

  function updateImageHeigth() {
    const pictureContainer = document.querySelector(".picture-container");
    if (pictureContainer === null) return;

    const containerParent = pictureContainer.parentElement;
    const pictureContainerRect = pictureContainer.getBoundingClientRect();
    const parentRect = containerParent.getBoundingClientRect();
    const headerHeight = 48; // Hauteur du header

    // Vérifie si on a dépassé le haut du parent en scrollant vers le haut
    const isAboveParent = parentRect.top >= headerHeight;
    const reachedBottom = pictureContainerRect.bottom > parentRect.bottom - 1;

    // console.log(reachedBottom);
    if (reachedBottom) {
      if (pictureContainerRect.top <= headerHeight) {
        pictureContainer.style.position = "absolute";
        pictureContainer.style.bottom = 0;
        pictureContainer.style.top = "auto";
      } else {
        pictureContainer.style.position = "relative";
        pictureContainer.style.top = "0";
        pictureContainer.style.bottom = "auto";
        pictureContainer.style.width = "auto";
      }
    } else {
      if (pictureContainerRect.top <= headerHeight && !isAboveParent) {
        // Fixer l'élément en haut seulement si on n'est pas remonté au-dessus du parent
        pictureContainer.style.position = "fixed";
        pictureContainer.style.top = `${headerHeight}px`;
        pictureContainer.style.bottom = "auto";
        pictureContainer.style.width = "100%";
      } else {
        // Revenir à la position normale
        pictureContainer.style.position = "relative";
        pictureContainer.style.top = "0";
        pictureContainer.style.bottom = "auto";
        pictureContainer.style.width = "auto";
      }
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    // Code à exécuter une fois que le DOM est entièrement chargé

    document.addEventListener("scroll", function () {
      const image = document.querySelector(".scroll-container img");
      darkenImage(image);

      updateImageHeigth();

      scrollY = window.scrollY;
    });
  });
})();
