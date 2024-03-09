const menuButton = document.getElementById('menu-button');
const navButtons = document.getElementById('nav-buttons');
let isClicked = false;
function displayNone(){
    navButtons.style.display = 'none';
}
menuButton.addEventListener('click', function() {
    if (isClicked) {
        navButtons.classList.remove('slide-out');
        navButtons.classList.add('slide-in');
        setTimeout(displayNone, 300)

    } else {
        navButtons.style.display = 'flex';
        navButtons.classList.remove('slide-in');
        navButtons.classList.add('slide-out');
    }
    isClicked = !isClicked;
});
