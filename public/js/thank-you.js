//Stores button with home-btn id
const homeBtn = document.querySelector('#home-btn');

//Add event listener to homeBtn
homeBtn.addEventListener('click', navigateHome);

//Listener handler function
function navigateHome() {
    document.location.replace('/')
}