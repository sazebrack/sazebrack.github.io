var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/dog.png') {
      myImage.setAttribute ('src','images/lumbar.gif');
    } else {
      myImage.setAttribute ('src','images/dog.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'TigerLady Welcomes, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'TigerLady Welcomes, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}