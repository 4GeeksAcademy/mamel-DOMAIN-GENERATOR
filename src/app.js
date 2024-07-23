/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function () {
  // Write your code here
  let pronoun = ['the', 'our', 'my'];
  let adjective = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let webTextItem = ''
  for (const iterator of pronoun) {
    for (const iterator1 of adjective) {
      for (const iterator2 of noun) {
        let texto = iterator + iterator1 + iterator2 + '.com'
        webTextItem += "<li class='list-group-item bg-warning p-1 ms-2'> " + texto + "</li>"
      }
    }
  }
  const webText = document.querySelector('#domined');
  webText.innerHTML = webTextItem
  // Colum 2
  let names = ['jose', 'daclerico', 'douglas'];
  let lastNames = ['ramirez', 'mata'];
  let ages = ['42', '38']
  let fullNameItem = ''
  names.map((name) => {
    lastNames.map((lastName) => {
      ages.map((age) => {
        const text = name + lastName + age + '.net'
        fullNameItem += "<li class='list-group-item p-1 ms-2 bg-info'> " + text + "</li>"
      })
    })
 })
  const fullNameItemText = document.querySelector('#fullName');
  fullNameItemText.innerHTML = fullNameItem;
};
