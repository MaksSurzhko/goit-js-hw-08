// Add imports above this line

import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const photo = document.querySelector('.gallery')

const markup = galleryItems.map(({ preview, original, description }) => {
  return `<li class="gallery__item">
    <a class="gallery__link"
    href="${original}">
      <img class="gallery__image"
      src="${preview}" 
      data-source="${original}" 
      alt="${description}" />
    </a>
  </li>`;
})

photo.insertAdjacentHTML("beforeend", markup.join(''));

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
    captionDelay: 250,
  captionsData: 'alt',
});

console.log(galleryItems);
