const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.site-header nav');toggle.addEventListener('click',()=>nav.classList.toggle('open'));document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const historyToggle = document.getElementById("history-toggle");
const moreHistory = document.getElementById("more-history");

historyToggle.addEventListener("click", function () {
  moreHistory.classList.toggle("show");

  if (moreHistory.classList.contains("show")) {
    historyToggle.textContent = "Show Less";
  } else {
    historyToggle.textContent = "Read More";
  }
});