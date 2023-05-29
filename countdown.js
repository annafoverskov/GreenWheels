//Countdown Mathilde 
//Mathilde
let countDownEvent = new Date("Jul 6, 2023 00:00:00").getTime();

// Nedtællingen bliver opdateret hvert sekund
let countdown = setInterval(function() {

  // Dato og tid for i dag
  let iDag = new Date().getTime();

  // Afstanden mellem nu og nedtællingsdatoen
  let dageIndtil = countDownEvent - iDag;

  // Tidsberegninger for dage, timer, minutter og sekunder
  let dage = Math.floor(dageIndtil / (1000 * 60 * 60 * 24));
  let timer = Math.floor((dageIndtil % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutter = Math.floor((dageIndtil % (1000 * 60 * 60)) / (1000 * 60));
  let sekunder = Math.floor((dageIndtil % (1000 * 60)) / 1000);

  // Udskriv resultatet i et element med id="demo"
  document.getElementById("countdownevent").innerHTML = dage + "d " + timer + "h "
  + minutter + "m " + sekunder + "s ";

  // Når countdown er ovre, vil der står dette...
  if (dageIndtil < 0) {
    clearInterval(countDown);
    document.getElementById("countdownevent").innerHTML = "Eventet er igang!";
  }
}, 1000);