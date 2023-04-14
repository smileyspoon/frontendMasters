

//////////////////////////
///  3 Events and Listeners
/////////////////////////


////Event Button

//Select the button element with class "event-button"
const button = document.querySelector(".event-button");

//Add an event listener to the button that listens for a "click" event
button.addEventListener("click", function () {
  //When the button is clicked, log "Hey there!" to the console
  console.log("Hey there!");
});


////Input box and Paragraph


// Select the input and paragraph elements
const input = document.querySelector(".input-to-copy");
const paragraph = document.querySelector(".p-to-copy-to");

// Add an event listener to the input element
input.addEventListener("keyup", function () {
   // Update the text content of the paragraph to match the value of the input
   paragraph.innerText = input.value; 
});



// Get the parent element to listen for events on
const parentElement = document.querySelector(".listener-bubble-up");

// Add a click event listener to the parent element
parentElement.addEventListener("click", function (event) {

    // Log the text content of the clicked button
    console.log(`You clicked on the button ${event.target.innerText}`);

});
