const fakeSelect = document.querySelector("[data-fake-select]");

if (fakeSelect) {
	const trigger = fakeSelect.querySelector(".fake-select-trigger");
	const selected = fakeSelect.querySelector("[data-fake-selected]");
	const hiddenInput = document.querySelector("#request-value");
	const options = fakeSelect.querySelectorAll(".fake-select-menu button");

	trigger.addEventListener("click", (event) => {
		event.preventDefault();
		event.stopPropagation();

		const isOpen = fakeSelect.classList.toggle("open");
		trigger.setAttribute("aria-expanded", String(isOpen));
	});

	options.forEach(option => {
		option.addEventListener("click", (event) => {
			event.preventDefault();
			event.stopPropagation();

			const value = option.dataset.value;

			selected.textContent = value;
			hiddenInput.value = value;

			options.forEach(item => item.classList.remove("active"));
			option.classList.add("active");

			fakeSelect.classList.remove("open");
			trigger.setAttribute("aria-expanded", "false");
		});
	});

	document.addEventListener("click", () => {
		fakeSelect.classList.remove("open");
		trigger.setAttribute("aria-expanded", "false");
	});
}