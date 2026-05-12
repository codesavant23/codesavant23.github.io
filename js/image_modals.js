const imageModal = document.querySelector("#imageModal");
const imageModalImg = imageModal.querySelector("img");
const imageModalPrevBtn = imageModal.querySelector(".image-modal-prev");
const imageModalNextBtn = imageModal.querySelector(".image-modal-next");
const imageModalCloseBtn = imageModal.querySelector(".image-modal-close");

let currentImages = [];
let currentIndex = 0;



function updateNavButtons() {
	const shouldShowNav = currentImages.length > 1;

	imageModalPrevBtn.style.display = shouldShowNav ? "flex" : "none";
	imageModalNextBtn.style.display = shouldShowNav ? "flex" : "none";
}


function showImage(index) {
	if (!currentImages.length) 
		return;

	if (index < 0)
		currentIndex = currentImages.length - 1;
	else if (index >= currentImages.length)
		currentIndex = 0;
	else
		currentIndex = index;

	const img = currentImages[currentIndex];

	imageModalImg.src = img.src;
	imageModalImg.alt = img.alt || "";

	updateNavButtons();
}


function openImageModal(img) {
	const currentGrid = img.closest(".image-grid");

	currentImages = currentGrid
		? Array.from(currentGrid.querySelectorAll(".image-grid-item img, .image-item img"))
		: [img];

	currentIndex = currentImages.indexOf(img);

	showImage(currentIndex);

	imageModal.classList.add("is-open");
	imageModal.setAttribute("aria-hidden", "false");

	document.documentElement.style.overflow = "hidden";
	document.body.style.overflow = "hidden";

	updateNavButtons();
}


function closeImageModal() {
	imageModal.classList.remove("is-open");
	imageModal.setAttribute("aria-hidden", "true");

	imageModalImg.src = "";
	imageModalImg.alt = "";

	currentImages = [];
	currentIndex = 0;

	document.documentElement.style.overflow = "";
	document.body.style.overflow = "";
}


function registerEventListeners() {
	document.querySelectorAll(".image-grid-item img, .image-item img").forEach((img) => {
		img.addEventListener("click", () => {
			openImageModal(img);
		});
	});

	imageModalPrevBtn.addEventListener("click", (event) => {
		event.stopPropagation();
		showImage(currentIndex - 1);
	});
	imageModalNextBtn.addEventListener("click", (event) => {
		event.stopPropagation();
		showImage(currentIndex + 1);
	});

	imageModalCloseBtn.addEventListener("click", closeImageModal);
	imageModal.addEventListener("click", (event) => {
		if (event.target === imageModal) {
			closeImageModal();
		}
	});

	document.addEventListener("keydown", (event) => {
		if (!imageModal.classList.contains("is-open")) return;

		if (event.key === "Escape") closeImageModal();
		if (event.key === "ArrowLeft") showImage(currentIndex - 1);
		if (event.key === "ArrowRight") showImage(currentIndex + 1);
	});
}


export function idleImagesModals() {
	registerEventListeners();
}