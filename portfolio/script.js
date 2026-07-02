// active nav highlighting on scroll
const sections = ['home','about','resume','skills','roadmap','projects','certificates','connect','contact'].map(id => document.getElementById(id));
const navItems = document.querySelectorAll('.nav-item');

function setActive(){
  let current = 'home';
  const y = window.scrollY + window.innerHeight * 0.35;
  sections.forEach(sec => { if(sec && sec.offsetTop <= y) current = sec.id; });
  const map = {resume:'about', skills:'about', roadmap:'projects', connect:'contact'};
  const target = map[current] || current;
  navItems.forEach(item => item.classList.toggle('active', item.getAttribute('data-target') === target));
}
window.addEventListener('scroll', setActive);
setActive();

// Certificate lightbox
function openLightbox(src){
  document.getElementById("lightbox-img").src = src;
  document.getElementById("lightbox").classList.add("active");
}
function closeLightbox(){
  document.getElementById("lightbox").classList.remove("active");
}
document.getElementById("lightbox").addEventListener("click", function(e){
  if(e.target === this){ closeLightbox(); }
});