const toggleBtn = document.querySelector(".navbar-toggle-btn");
const navBtns = document.querySelector(".nav-btns");
const shareLinks = document.querySelector(".share-links");

toggleBtn.addEventListener("click", () => {
	// classList.toggle("클래스명"): 클릭 시 active가 없으면 추가, 있으면 제거
	navBtns.classList.toggle("active");
	shareLinks.classList.toggle("active");
});