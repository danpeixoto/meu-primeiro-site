const selectElement = (e)=>document.querySelector(e);
const selectByID = (id)=>document.getElementById(id);
const selectAllElementes = (e)=>document.querySelectorAll(e);


const navToggle = selectElement(".nav__toggle");
const navLinks = selectAllElementes(".nav__link");

navToggle.addEventListener("click",()=>{
	document.body.classList.toggle("nav__open");
});

navLinks.forEach((link)=>{
	link.addEventListener("click",()=>{
		document.body.classList.remove("nav__open");
	});
});
