/////////////////////////
/// 2 JSON APIs Overview
/////////////////////

////Dog Example

// Define the API endpoint URL to fetch random dog images
const DOG_URL = "https://dog.ceo/api/breeds/image/random";

// Get the DOM element to add dog images to
const doggos = document.getElementById("dog-target");

// Define a function to add a new dog image
function addNewDoggo() {
  // Fetch a new image from the dog API endpoint
  const promise = fetch(DOG_URL);

  // When the fetch request completes, process the response
  promise
    .then(function (response) {
      // Extract the response body as text
     
     const processingPromise = response.json();

      // Return a new promise with the response text
      return processingPromise;
    })
    .then(function (processedResponse) {


      // Create a new <img> element to display the dog image
      const img = document.createElement("img");
      img.src = processedResponse.message;
      img.alt = "Cute doggo";

      // Add the new <img> element to the doggos container
      doggos.appendChild(img);
    });
}

// Add a click event listener to the "Add Doggo" button
document.getElementById("dog-btn").addEventListener("click", addNewDoggo);




/////////////////////////
/// 3 Async Await
/////////////////////

// Define the API endpoint URL to fetch random dog images
const DOG_URL3 = "https://dog.ceo/api/breeds/image/random";

// Get the DOM element to add dog images to
const doggos3 = document.getElementById("dog-target3");

// Define an asynchronous function to add a new dog image
async function addNewDoggo3() {
  // Await the fetch request to the dog API endpoint
  const promise = await fetch(DOG_URL3);

  // Await the processing of the response as a JSON object
  const processedResponse = await promise.json();

  // Create a new <img> element to display the dog image
  const img = document.createElement("img");
  img.src = processedResponse.message;
  img.alt = "Cute doggo";

  // Add the new <img> element to the doggos container
  doggos3.appendChild(img);
}

// Add a click event listener to the "Add Doggo" button
document.getElementById("dog-btn3").addEventListener("click", addNewDoggo3);
