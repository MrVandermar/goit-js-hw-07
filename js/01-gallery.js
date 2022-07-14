import { galleryItems } from './gallery-items.js';
// Change code below this line

const onCreateGallery = (items) => {
    return items.map(({ preview, original, description }) =>
        `<div class="gallery__item">
          <a class="gallery__link" href="${original}">
              <img class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
              />
          </a>
      </div>`)
        .join('');
};

const clickOnGalleryBox = (e) => {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') { return };

    const modalWindow = basicLightbox.create(
        `<img src="${e.target.dataset.source}">`,
        {
            onShow:  () => {
                window.addEventListener("keydown", (e) => {if (e.code === "Escape") {
            modalWindow.close();
        }})
            },
        }
    )
    modalWindow.show();
};

const galleryBox = document.querySelector('.gallery');
const galleryMarkup = onCreateGallery(galleryItems);
galleryBox.insertAdjacentHTML("afterbegin", galleryMarkup);
galleryBox.addEventListener('click', clickOnGalleryBox);


