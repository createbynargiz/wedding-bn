let targetDate=new Date("2025-11-01T00:00:00")
let daysEl=document.querySelector("#days")
let secondsEl=document.querySelector("#seconds")
let hoursEl=document.querySelector("#hours")
let minutesEl=document.querySelector("#minutes")

function updateCountdown(){
  let now=new Date()
  let diff=targetDate-now

  if(diff<=0) return

  let seconds=Math.floor(diff/(1000)%60)
  let minutes=Math.floor(diff/(1000*60)%60)
  let hours=Math.floor(diff/(1000*60*60)%24)
  let days=Math.floor(diff/(1000*60*60*24))

  daysEl.textContent=String(days).padStart(2, '0')
  secondsEl.textContent=String(seconds).padStart(2, '0')
  hoursEl.textContent=String(hours).padStart(2, '0')
  minutesEl.textContent=String(minutes).padStart(2, '0')
}
setInterval(updateCountdown, 1000);
updateCountdown(); 

const music = document.getElementById("music");
const btn = document.getElementById("music-btn");

btn.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        btn.textContent = "ӘУЕНДІ ӨШІРУ";
    } else {
        music.pause();
        btn.textContent = "ӘУЕНДІ ҚОСУ";
    }
});

const form = document.getElementById("post-info");

form.addEventListener("submit", e => {
  e.preventDefault();

  const data = new FormData(form);

  fetch("https://script.google.com/macros/s/AKfycbxbYncixiY3Gnv4v7NSASekZXAoccKAqZuVs94UMyi78VTDiQfLQy79P0XLBv9XZcRq/exec", {
    method: "POST",
    body: data
  })
  .then(res => res.text())
  .then(msg => {
    alert(msg);   // "Жауап қабылданды ✅"
    form.reset(); // очищаем форму
  })
  .catch(err => {
    console.error("Қате:", err);
    alert("Қате шықты. Кейінірек көріңіз.");
  });
});

 const boxes = document.querySelectorAll('.box');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const children = entry.target.parentElement.querySelectorAll('.box');
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('show');
            }, index * 800); // задержка 300мс для каждого
          });
        } else {
          entry.target.classList.remove('show');
        }
      });
    }, { threshold: 0.3 });

    boxes.forEach(box => observer.observe(box));
    