const menuToggle=document.querySelector("#menu-toggle");
const navigation=document.querySelector("#navigation");
menuToggle.addEventListener("click",()=>{
 const isOpen=navigation.classList.toggle("open");
 menuToggle.setAttribute("aria-expanded",String(isOpen));
 menuToggle.setAttribute("aria-label",isOpen?"Fechar menu":"Abrir menu");
 menuToggle.textContent=isOpen?"✕":"☰";
});
navigation.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{
 navigation.classList.remove("open");
 menuToggle.setAttribute("aria-expanded","false");
 menuToggle.setAttribute("aria-label","Abrir menu");
 menuToggle.textContent="☰";
}));
document.querySelector("#year").textContent=new Date().getFullYear();