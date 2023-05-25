import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const listEl = document.querySelector(".gallery");

function createGalleryElements(items) {
  let galleryElements = items.map((item) => {
    let itemEl = document.createElement("li");
    itemEl.classList.add("gallery__item");

    let linkEl = document.createElement("a");
    linkEl.classList.add("gallery__link");
    linkEl.href = item.original;
    itemEl.appendChild(linkEl);

    let imgEl = document.createElement("img");
    imgEl.classList.add("gallery__image");
    imgEl.src = item.preview;
    imgEl.dataset.source = item.original;
    imgEl.alt = item.description;
    linkEl.appendChild(imgEl);

    return itemEl;
  });

  listEl.append(...galleryElements);
  return listEl;
}

function onGalleryItemClick(event) {
  event.preventDefault();
  if (event.target.classList.contains("gallery__image")) {
    const image = event.target.dataset.source;

    const lightbox = basicLightbox.create(`<img src="${image}">`);
    lightbox.show();
  }
}

function initGallery(items) {
  let galleryElements = createGalleryElements(items);
  listEl.addEventListener("click", onGalleryItemClick);
}
initGallery(galleryItems);
