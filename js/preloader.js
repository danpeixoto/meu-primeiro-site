window.addEventListener("load", () => {
	const preloader = document.querySelector(".preloader");

	preloader.classList.toggle("preloader--hide");

	setTimeout(() => {
		preloader.classList.toggle("preloader--hidden");
	}, 1100);
});
