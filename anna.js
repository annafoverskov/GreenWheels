let acc = document.getElementsByClassName("videncard");

let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

function burgermenu() {
    let x = document.getElementById("burgermenu");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  let knap = document.getElementById("topknap");

  window.onscroll = function() {scroll()};
  
  function scroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      knap.style.display = "block";
    } else {
      knap.style.display = "none";
    }
  }
  
  function topKnap() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  const value = document.querySelector("#value")
  const input = document.querySelector("#pi_input")
  value.textContent = input.value
  input.addEventListener("input", (event) => {
    value.textContent = event.target.value
  })
