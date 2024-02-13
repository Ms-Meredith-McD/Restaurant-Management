
const homeBtn = document.querySelector('#home-btn');

homeBtn.addEventListener('click', navigateHome);

function navigateHome() {
    document.location.replace('/')
}