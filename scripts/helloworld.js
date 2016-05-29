var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'http://clipartcow.com/wp-content/uploads/2016/02/Clipart-dog-house-free-clipart-images.png') {
      myImage.setAttribute ('src','http://cfile233.uf.daum.net/image/2613453656989FDB0E2425');
    } else {
      myImage.setAttribute ('src','http://clipartcow.com/wp-content/uploads/2016/02/Clipart-dog-house-free-clipart-images.png');
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