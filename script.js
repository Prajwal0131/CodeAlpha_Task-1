const images = [
  { src: 'images/img1.jpg', caption: 'Ocean Breeze' },
  { src: 'images/img2.jpg', caption: 'Snowy Pines' },
  { src: 'images/img3.jpg', caption: 'Lush Waterfall' },
  { src: 'images/img4.jpg', caption: 'River Reflections' }
  // Add more as needed
];

const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const closeBtn = document.getElementById('closeBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

// Populate gallery
images.forEach((img, index) => {
  const image = document.createElement('img');
  image.src = img.src;
  image.alt = img.caption;
  image.dataset.index = index;
  image.addEventListener('click', () => openLightbox(index));
  gallery.appendChild(image);
});

function openLightbox(index) {
  currentIndex = index;
  updateLightbox();
  lightbox.style.display = 'flex';
}

function updateLightbox() {
  lightboxImg.src = images[currentIndex].src;
  lightboxCaption.textContent = images[currentIndex].caption;
}

function closeLightbox() {
  lightbox.style.display = 'none';
}

function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateLightbox();
}

function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  updateLightbox();
}

closeBtn.addEventListener('click', closeLightbox);
prevBtn.addEventListener('click', showPrev);
nextBtn.addEventListener('click', showNext);

document.addEventListener('keydown', (e) => {
  if (lightbox.style.display === 'flex') {
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'Escape') closeLightbox();
  }
});
