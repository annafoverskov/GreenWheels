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

 