//kontaktform starter her (Johanna)

select_element = document.getElementById("konSelect");
let kon = ["Email", "Telefon opkald", "SMS besked"];


// Udvider option-boks baseret på antal valgmuligheder i array'et
for (let i=0; i < kon.length; i++) {
  let opt = kon[i];
  select_element.innerHTML += "<option value=\" "+ opt +"\">"+ opt + "</option";
}

document.getElementById("konSelect").onchange = function(){
if (document.getElementById("konSelect").value == 'Email')
location.replace('index.html');
  else if (document.getElementById("konSelect").value == 'Telefon opkald')
  location.replace('index.html');
  else if (document.getElementById("konSelect").value == 'SMS besked')
  location.replace('index.html');
    else
    location.replace('index.html')
  }
document.getElementById("konSelect").selectedIndex = 0;

//kontaktform starter her
