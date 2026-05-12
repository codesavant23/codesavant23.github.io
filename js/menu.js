const menuButton = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

if (menuButton && nav) {
	menuButton.addEventListener('click', () => nav.classList.toggle('open'));

	document.querySelectorAll('.nav a').forEach(a => {
		a.addEventListener('click', () => nav.classList.remove('open'));
	});
}

const year = document.getElementById('year');
if (year) {
	year.textContent = new Date().getFullYear();
}

const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
	const io = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible');
				io.unobserve(entry.target);
			}
		});
	}, { threshold: 0.12 });

	revealElements.forEach(el => io.observe(el));
} else {
	revealElements.forEach(el => el.classList.add('visible'));
}
