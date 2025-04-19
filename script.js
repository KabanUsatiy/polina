const card = document.querySelector('.card');
const cardFront = document.getElementById('cardFront');
const cardInside = document.getElementById('cardInside');

card.addEventListener('click', function() {
    cardFront.style.transform = 'rotateY(180deg)';
    cardInside.style.transform = 'rotateY(0deg)';
});

function resetCard() {
    cardFront.style.transform = 'rotateY(0deg)';
    cardInside.style.transform = 'rotateY(180deg)';
}