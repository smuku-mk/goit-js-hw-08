import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const list = document.querySelector('.gallery');
const markup = galleryItems
  .map(
    image =>
      `<li style="font-size:0">
        <a class="gallery__item" href="${image.original}">
          <img
            src="${image.preview}" 
            alt="${image.description}" 
            class="gallery__image"
          />
        </a>
      </li>`
  )
  .join('');
list.insertAdjacentHTML('afterbegin', markup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionType: 'alt',
});
