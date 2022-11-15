// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
// Dodatkowy import stylów
import 'simplelightbox/dist/simple-lightbox.min.css';

let gallery = document.querySelector('.gallery');
for (const item of galleryItems) {
  gallery.insertAdjacentHTML(
    'beforeend',
    `<a class="gallery__item" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          alt="${item.description}"
        />
      </a>`
  );
}
gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
function showPic(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  gallery.on('show.simplelightbox', function () {});
}

gallery.addEventListener('click', showPic);




console.log(galleryItems);
