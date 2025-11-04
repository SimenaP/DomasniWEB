let karti = [
  "em1.png", "em1.png",
  "em2.png", "em2.png",
  "em3.png", "em3.png",
  "em4.png", "em4.png",
  "em5.png", "em5.png",
  "em6.png", "em6.png"
];

function mesajNiza(niza) {
  for (let i = niza.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    let temp = niza[i];
    niza[i] = niza[j];
    niza[j] = temp;
  }
  return niza;
}

let imgs;
let prvaKarta = null;
let vtoraKarta = null;
let klik = true;
let pogodeni = 0;
let obidi = 0;

function startIgra() {
  imgs = document.getElementsByTagName("img"); 
  karti = mesajNiza(karti.slice()); 

  for (let i = 0; i < imgs.length; i++) {
    imgs[i].src = "blank.png"; 
    imgs[i].classList.remove("otvorena", "pogodena"); 
    imgs[i].onclick = function() { otvoriKarta(i); };
  }

  obidi = 0;
  pogodeni = 0;
  prvaKarta = null;
  vtoraKarta = null;
  klik = true;
  azurirajBrojac();
}

function otvoriKarta(i) {
  if (!klik) return;
  if (imgs[i].classList.contains("otvorena")) return;

  imgs[i].src = karti[i]; 
  imgs[i].classList.add("otvorena");

  if (prvaKarta === null) {
    prvaKarta = i; 
  } else {
    vtoraKarta = i; 
    klik = false;
    obidi++;
    azurirajBrojac();
    proveriPar();
  }
}

function proveriPar() {
  if (karti[prvaKarta] === karti[vtoraKarta]) {
    imgs[prvaKarta].classList.add("pogodena");
    imgs[vtoraKarta].classList.add("pogodena");
    pogodeni++;
    resetirajIzbor();
    
    if (pogodeni === karti.length / 2) {
      setTimeout(() => alert(`Браво! Ги најде сите парови за ${obidi} обиди.`), 300);
    }
  } else {
    setTimeout(() => {
      imgs[prvaKarta].src = "blank.png";
      imgs[vtoraKarta].src = "blank.png";
      imgs[prvaKarta].classList.remove("otvorena"); 
      imgs[vtoraKarta].classList.remove("otvorena"); 
      resetirajIzbor(); }, 1000);
  }
}
function resetirajIzbor() {
  prvaKarta = null;
  vtoraKarta = null;
  klik = true;
}
function azurirajBrojac() {
  let brojac = document.getElementById("brojac");
  if (!brojac) {
    brojac = document.createElement("div");
    brojac.id = "brojac";
    brojac.style.textAlign = "center";
    brojac.style.margin = "20px";
    brojac.style.fontSize = "20px";
    document.body.insertBefore(brojac, document.querySelector('.redKol'));
  }
  brojac.textContent = `Обиди: ${obidi}`;
}

function dodadiKopche() {
  let kopche = document.getElementById("restart");
  if (!kopche) {
    kopche = document.createElement("button");
    kopche.id = "restart";
    kopche.textContent = "Нова игра";
    kopche.style.display = "block";
    kopche.style.margin = "20px auto";
    kopche.style.padding = "10px 20px";
    kopche.style.fontSize = "16px";
    document.body.appendChild(kopche);
    kopche.onclick = startIgra;
    kopche.style.backgroundColor="red";
    kopche.style.color="white";
  }
}
window.onload = function() {
  dodadiKopche();
  startIgra();
};