const hero = document.querySelector('.hero');
const profileCard = document.querySelector('.profile-card-white');
const aboutPanel = document.querySelector('.about-me-panel');

function toggleAboutMe() {
    const isOpen = hero.classList.toggle('about-open');
    profileCard.setAttribute('aria-expanded', String(isOpen));
    aboutPanel.setAttribute('aria-hidden', String(!isOpen));
}

profileCard.addEventListener('click', toggleAboutMe);
profileCard.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleAboutMe();
    }
});