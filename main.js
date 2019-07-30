var myButton = document.querySelector('button');
var myHeading = document.querySelector('p1');
function setUserName() {
    var myName = prompt('Por favor, digite que você me ama =) Kkkk Brincando, digita seu nome.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'FELIZ ANIVERSÁRIO, ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'FELIZ ANIVERSÁRIO, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }