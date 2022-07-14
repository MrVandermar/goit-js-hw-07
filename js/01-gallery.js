import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);



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
                window.addEventListener("keydown", handlePressKey)
            },
            onClose: () => {
                window.removeEventListener("keydown", handlePressKey)
            }
        }
    )
    modalWindow.show();
    
    function handlePressKey(evt) {
        if (evt.code === "Escape") {
            modalWindow.close();
        }
    }
};

const galleryBox = document.querySelector('.gallery');
const galleryMarkup = onCreateGallery(galleryItems);
galleryBox.insertAdjacentHTML("afterbegin", galleryMarkup);
galleryBox.addEventListener('click', clickOnGalleryBox);