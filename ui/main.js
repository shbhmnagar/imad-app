/*console.log('Loaded!');

// move the image
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight() {
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}

madi.onclick = function() {
    var interval =  setInterval(moveRight, 30);
}*/

// Counter Code
var button = document.getElementById('counter');
button.onclick = function () {
    
    // Create request object
    var request = new XMLHttpRequest();
    
    // Capture the request and store it in a variable
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            // Take some action
            if (request.status === 200) {
                var counter = request.responseText;
                var span  = document.getElementById('count');
    span.innerHTML = counter.toString();
            }
        }
        // Not done yet
    };
    
    // Make the request
    request.open('GET', 'http://shbhmnagar.imad.hasura-app.io/counter', true);
    request.send(null);
    
};

// Submit name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    
    // Create request object
    var request = new XMLHttpRequest();
    
    // Capture the request and store it in a variable
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            // Take some action
            if (request.status === 200) {
                // Capture a list of names and render it as a list
                var names = request.responseText;
                names = JSON.parse(names);
                var list = '';
                for (var i=0; i< names.length; i++) {
                    list += '<li>' + names[i] + '</li>';
                }
                var ul = document.getElementById('namelist');
                ul.innerHTML = list;
            }
        }
        // Not done yet
    };
    
    // Make the request
    // Make a request to the server and send the name
    request.open('GET', 'http://shbhmnagar.imad.hasura-app.io/submit-name?name=' + name, true);
    request.send(null);
    
    
}