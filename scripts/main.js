
var myVariable = 'Bikash'; // Declaring the variable.

myVariable = 'Kharal'; // Changing the value of myVariable to Kharal.

/*

var iceCream = 'chocolate';
if (iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');    
} else {
  alert('Awwww, but chocolate is my favorite...');    
}

document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}

*/

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Bikash.jpg') {
      myImage.setAttribute ('src','images/Bikash2.jpg');
    } else {
      myImage.setAttribute ('src','images/Bikash3.jpg');
    }
}

var myButton = document.querySelector('button');

var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Bikash is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} 
else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Bikash is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}