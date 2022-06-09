const nav = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const navBtnImg = document.querySelector("#nav-btn-image");

navBtn.onclick = () => {
	if (nav.classList.toggle("open")) {
		navBtnImg.src = "./image/mob/nav-close.svg";
		document.getElementsByClassName('menu__button')[0].style.position = "fixed";
	} else {
		navBtnImg.src = "./image/mob/nav.svg";
	}
};

AOS.init({
	once: true
});
