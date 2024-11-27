// Function to change button color on click
function changeColor(event) {
    event.target.style.backgroundColor = "lightblue"; // Change the clicked button's color
}

// Function to show message on mouseover
function showMessage(event) {
    const messageId = 'message' + event.target.id.charAt(event.target.id.length - 1); // Get the corresponding message id
    const messageElement = document.getElementById(messageId);
    messageElement.style.display = "block"; // Show the message
}

// Function to hide message on mouseout
function hideMessage(event) {
    const messageId = 'message' + event.target.id.charAt(event.target.id.length - 1); // Get the corresponding message id
    const messageElement = document.getElementById(messageId);
    messageElement.style.display = "none"; // Hide the message
}

// Function to hide button on double click
function hideButton(event) {
    event.target.style.display = "none"; // Hide the double-clicked button
}

// Adding event listeners to buttons
document.getElementById("button1").addEventListener("click", changeColor);
document.getElementById("button1").addEventListener("mouseover", showMessage);
document.getElementById("button1").addEventListener("mouseout", hideMessage);
document.getElementById("button1").addEventListener("dblclick", hideButton);

document.getElementById("button2").addEventListener("click", changeColor);
document.getElementById("button2").addEventListener("mouseover", showMessage);
document.getElementById("button2").addEventListener("mouseout", hideMessage);
document.getElementById("button2").addEventListener("dblclick", hideButton);

document.getElementById("button3").addEventListener("click", changeColor);
document.getElementById("button3").addEventListener("mouseover", showMessage);
document.getElementById("button3").addEventListener("mouseout", hideMessage);
document.getElementById("button3").addEventListener("dblclick", hideButton);
