document.querySelector('.menu-btn').addEventListener('click', () => document.querySelector('.nav').classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => document.querySelector('.nav').classList.remove('open')));
document.getElementById('year').textContent = new Date().getFullYear();

const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
}), {
    threshold: .12
});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));


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