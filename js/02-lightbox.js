import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const onCreateGallery = (items) => {
    return items
    .map(({ preview, original, description }) => {
       return  `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`;
}).join(''); 
};

const galleryBox = document.querySelector('.gallery');
galleryBox.insertAdjacentHTML('afterbegin', onCreateGallery(galleryItems));


let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });

  
