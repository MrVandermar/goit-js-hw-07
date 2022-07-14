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
            onShow: function () {
                window.addEventListener("keydown", checkEvent)
            },
            onClose: function () {
                window.removeEventListener("keydown", checkEvent)
            }
        }
    )
    modalWindow.show();
    
    function checkEvent(evt) {
        if (evt.code === "Escape") {
            modalWindow.close();
        }
    }
};

const galleryBox = document.querySelector('.gallery');
const galleryMarkup = onCreateGallery(galleryItems);
galleryBox.insertAdjacentHTML("afterbegin", galleryMarkup);
galleryBox.insertAdjacentHTML("afterbegin", galleryMarkup);
galleryBox.addEventListener('click', clickOnGalleryBox)