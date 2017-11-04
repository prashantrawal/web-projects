var myImage = document.querySelector('img');


myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/22786-27977-170912-iPhoneX-l.png') {
      myImage.setAttribute ('src','images/apple-iphone-x-5.png');
	} else {
	  myImage.setAttribute ('src','images/22786-27977-170912-iPhoneX-l.png');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');


function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Apple is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Apple is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}