
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const captionText = document.getElementById('caption');
const closeModal = document.querySelector('.close');

document.querySelectorAll('.gallery-item').forEach((image) => {
    image.addEventListener('click', (e) => {
        modal.style.display = 'block';
        modalImage.src = e.target.src;
        captionText.innerHTML = e.target.alt;
    });
});


closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});
