export async function include(id, file) {
	const el = document.getElementById(id);
	if (!el) {
		console.error(`Elemento #${id} non trovato`);
		return;
	}

	const res = await fetch(file);
	if (!res.ok) {
		console.error(`Errore caricando ${file}: ${res.status}`);
		return;
	}

	el.innerHTML = await res.text();
}


export async function loadPageParts(parts_to_load) {
	await Promise.all(parts_to_load);
}


export async function executeLoading(delay) {
	const loader = document.getElementById("page-loader");
	setTimeout(
		() => {
			loader.classList.add("hidden")
		},
		delay
	);
}


export async function loadPageBehavior(delay) {
	await import("./behavior.js");
	
	executeLoading(delay);
}