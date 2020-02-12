var tulostussivulle = document.getElementById("tulostussivubtn");
tulostussivulle.onclick = function() {
    document.querySelector(".active").classList.remove("active")
    document.querySelector("#tulostussivu").classList.add("active")
}
var kuvanpiiloitussivulle = document.getElementById("kuvanpiiloitusbtn");
kuvanpiiloitussivulle.onclick = function() {
    document.querySelector(".active").classList.remove("active")
    document.querySelector("#kuvanpiiloitussivu").classList.add("active")
}
var otsikonvaihtosivulle = document.getElementById("otsikonvaihtosivubtn");
otsikonvaihtosivulle.onclick = function() {
    document.querySelector(".active").classList.remove("active")
    document.querySelector("#otsikonvaihtosivu").classList.add("active")
}
var tulostus = document.getElementById("tulostusbtn");
tulostus.onclick = function() {
    console.log("Tulostaa ihan hulluna");
}
var piiloita = document.getElementById("piiloitakuvabtn");
piiloita.onclick = function() {
    document.getElementById("kuva").hidden=true;
}
var vaihto = document.getElementById("vaihdaotsikkobtn");
vaihto.onclick = function() {
    document.getElementById("otsikonvaihto").innerHTML = "Tässä on vaihdettu otsikko";
}