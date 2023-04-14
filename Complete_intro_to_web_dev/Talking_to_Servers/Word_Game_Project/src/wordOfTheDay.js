//note to self.  i need to get the word and then later work on postWord so that it
//concat all letters, check to see if it's 5 letters, and then post and validate
//post and validate can be done last but other parts of the postWord can be compelted


// Turn this off when not testing
const test = false;

const GET_WORD_URL = "https://words.dev-apis.com/word-of-the-day";
const POST_WORD_URL = "https://words.dev-apis.com/validate-word";


// Select all the input elements with class "letter__input"
const inputs = document.querySelectorAll('.letter__input');

// Select all the elements with class "word"
const words = document.querySelectorAll('.word');

let wordsArray = [];
let postResponse = null;

// obvisously this is just a simple set but if I ever wanted to do more"checks" would do i there


// getting the wordArray
const getWordsArray =  () => {
  return wordsArray;
}

// Get words in an array
const getWords = () => {

  return Array.from(words).map(word => {

    // Select all the letter input elements within this word
    const letters = word.querySelectorAll('.letter__input');
  
    // Create an array to store the letters of this word
    const lettersArray = Array.from(letters).map(letter => letter.value);
  
    // Add this word's letters array to the words array
    return lettersArray;
  });

};


const setWordsArray = (arr) =>{

  wordsArray = arr;

};

const getPostResponse = () => {
  return postResponse;
}

const setPostResponse = (arr) => {

  postResponse = arr;

}




async function getWordOfTheDay () {
    const promise = await fetch(GET_WORD_URL);
    const processedResponse = await promise.json();

    // test
    if (test) {
        console.log(processedResponse);
    }

    return processedResponse;

}

function isLetter(letter) {
    return /^[a-zA-Z]$/.test(letter);
  }
  
//   test for above
if (test) {
    console.log(isLetter("a")); // true
    console.log(isLetter("abc")); // false, not a single character
    console.log(isLetter("1")); // false, not a number
}

// convert letters into a word removes any spaces.  this is to check if there are five letters
const concatLetters = (arr) => {

    const str = arr.join('').replace(/\s/g, '');

    // test
    if (test) {
        console.log(`Your word:  ${str}`);
    }

    return str;

}

//letter must be five.  if for some reason space in between will not allow
const checkFiveLetter = (str) => {



    const check = (str.length === 5);

    // test
    if (test) {
        console.log(`Your word is 5 letters long:  ${check}`);
    }

    return check;
    
}

// check if given letter matches a word
const checkMatch = (word, checkLetter) => {
  let count = 0;
  let matched = false;
  
  word.split('').forEach((letter) => {
    if (checkLetter.includes(letter)) {
      count++;
      matched = true;
    }
  });
  
  return {
    "word": word,
    "checkLetter": checkLetter,
    "matched" : matched,
    "count": count
    
  };
};




// Get the word of the day
// Get the words after the enter key (enter key part taken care of in it events section below)
// Concat words
// Check if it's valid 5 length word
// Check each word if it's word of the day
async function checkWords () {

  const dailyWordObj = await getWordOfTheDay(); 
  const dailyWord = dailyWordObj.word;

  setWordsArray(getWords());

  // get the wordsArray an then concat all the words an assigned to arr
  const arr = Array.from(getWordsArray()).map(word => {

    return concatLetters(word);

  });


  // POST the words to check if they are words of the day
  const promises = arr.map(async(word) => {

    const wordJSON = {
      "word": null
    }

    // If it's a five letter word, will send the actual word, but if not will send 
    //!!!!! so it will still return an object when post with correct parameters
    if (checkFiveLetter(word)) {

      wordJSON.word = word;

    }

    else {
      wordJSON.word = "!!!!!";
    }

    const response = await fetch(POST_WORD_URL, {
      method: "POST",
      body: JSON.stringify(wordJSON)
    });

    const data = await response.json();

    return data;
  });

  const postResponses = await Promise.all(promises);


  // test
  if (test) {

    console.log(dailyWord);

  }

  // test
  if (test) {

    console.log (postResponses);

  }

  // checking to see if any letters match the word of the day for each of the inputs
  inputs.forEach((letter, index) => {

    const check = checkMatch(dailyWord, letter.value);

    // test
    if (test) {
      console.log(check);
    }

    // check to see if letter matches any letters in the dailyWord and turns it green
    if (check.matched) {

      letter.classList.add('letter__status--success');

    }
  
  });


  // probably put in section where it matches the inputed word and the returned post
  // pretty much done and don't want to spend more time on this program
  // mostly done as is so just ending it here.
    

}


// EventListener Section
////////////////////////


// Loop over each input element
inputs.forEach((input, index) => {
    // Add an event listener to the input element for when a value is entered
    input.addEventListener('input', () => {
      // Check if the length of the entered value is equal to the maximum length allowed for the input element
      if (input.value.length >= input.maxLength) {
        // If the entered value is at the maximum length and there is another input element after this one, move the focus to the next input element
        if (index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      } else if (input.value.length === 0 && index > 0) {
        // If the entered value is empty and there is another input element before this one, move the focus to the previous input element
        inputs[index - 1].focus();
      }

    });
    
    // Add an event listener to the input element for when a key is pressed
    input.addEventListener('keydown', (event) => {
      // Check if the key pressed is not a letter, backspace, or enter
      if (!isLetter(event.key) && event.key !== 'Backspace' && event.key !== 'Enter' && (event.shiftKey && event.keyCode === 9) ===false && (event.keyCode === 9) === false  ){
        // Prevent the default action for the key press
        event.preventDefault();
      } 


    });

    // When pressing enter on key up will get all the words you inputed
    // also get the word of the day and then test if you guessed correctly
    input.addEventListener('keyup', (event) => {

      if (event.key === 'Enter') {
        // If the enter key is pressed, post the word
        event.preventDefault();

        checkWords();

      }

    });
  });

