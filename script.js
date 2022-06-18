const ratingCard = document.querySelector('#ratingCard');
const thankYouCard = document.querySelector('#thankYouCard');
const selectedRating = document.querySelector('#selectedRating');
let rating = 0;

function submit() {
    ratingCard.style.display = 'none';
    thankYouCard.style.display = 'block';
    selectedRating.textContent = selectedRating.textContent.replace('rating', rating);
}

function setRating(id) {
    rating = id;
}