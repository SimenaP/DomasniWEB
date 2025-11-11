function login(){
 const email=document.getElementById("email").value;
const password=document.getElementById("password").value;
if(!email || !password){
    alert("Пополнете ги сите полиња");
    return;
}
window.alert("Се најавивте на сајтот");
window.location.href='Krusevo.html';
}
function blagodarime(){
    const klik=document.getElementById("klik").value;
    if(klik){
        alert("Ви благодариме што одговоривте на анкетата")
    }
}
