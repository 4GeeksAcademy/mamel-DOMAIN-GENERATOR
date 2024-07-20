/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  let pronoun = ['the', 'our', 'my'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let tarjeta = ''
  for (const iterator of pronoun) {
    for (const iterAtor of adj) {
      for (const iterat0r of noun) {
        let texto = iterator + iterAtor + iterat0r + '.com'
        console.log(texto)
        tarjeta += "<li> "+ texto +"</li>"
      }
    }
  }

  const cardHTML = document.querySelector('#domined');
  cardHTML.innerHTML = tarjeta
  
};