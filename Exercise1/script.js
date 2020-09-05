window.onload = function() {
    // start
    let number = document.getElementById('changinginteger');
    console.log(number.innerText)
    // let firstHeading = document.createElement('h2');
    // firstHeading.innerText = 'This is an h2 created with JS';
    // firstHeading.classList.add('js-header');

    // starterDiv.appendChild(firstHeading);

    // let secondHeading = document.createElement('h2');
    // secondHeading.innerText = 'This is anoter h2 created with JS';
    // secondHeading.classList.add('js-header');
    // secondHeading.id = 'second-h2';

    // starterDiv.appendChild(secondHeading);

    // end
}

var number = 1;

function addnumbers(){
    console.log("I am the add number function")
    var count = document.getElementById('changinginteger');
    number++;
    count.innerHTML = number;
}

var number = 1

function reducenumbers(){
    console.log("I am the reduce number function")
    var count = document.getElementById('changinginteger');
    number--;
    count.innerHTML = number;
}

// function showName(){
//     console.log('showName');
//     // start
//     let name = document.getElementById('name').value;
//     console.log(name);
//     document.getElementById('greeting-text').innerText = 'Hi' + name;

//     // end
// }

// function changeColour(colour) {
//     // start
//     document.body.style.backgroundColor = colour;
//     // end
// }

// function resetColour() {
//     document.body.style.backgroundColor = '#FCE166';
// }

// function toggleLightbulb() {
//     // start
//     let lightbulb = document.getElementById('light');
//     lightbulb.classList.toggle('on');
//     // end
// }
