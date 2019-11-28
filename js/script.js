/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * Objects wrapped in an array with quotes inside
***/
const quotes = [
  {
    quote: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
    source: "H. Jackson Brown Jr.",
    citation: "P.S. I Love you",
    categorization:"Wisdom Quotes"
  },

  {
    quote: "I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.",
    source: "Marilyn Monroe",
    categorization:"Wisdom Quotes"
  },

  {
    quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    source: "Mahatma Ghandi",
    categorization:"Life Quotes"
  },

  {
    quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
    source: "Maritin Luther King Jr.",
    citation: " A Testament of Hope: The Essential Writings and Speeches",
    year: "1986",
    categorization:"Love Quotes"
  },

  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    source: "Thomas A. Edison",
    categorization:"Success Quotes"
  },

  {
    quote: "I love you without knowing how, or when, or from where. I love you simply, without problems or pride: I love you in this way because I do not know any other way of loving but this, in which there is no I or you, so intimate that your hand upon my chest is my hand, so intimate that when I fall asleep your eyes close.",
    source: "Pablo Neruda",
    citation: "100 Love Sonnets",
    year: "1959",
    categorization:"Love Quotes"
  }
];


/***
 * function to get a random number from 0 to quotes length, return a random quote
***/
function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}


/***
 * calls the getRandomQuote function, stores it. HTML code to replace the standard value.
  Checks if there are citiation and year/categorization available to extend the HTML code.
  Calls the skipColor function to change the backgroundColor
***/

function printQuote() {
  const randomQuote = getRandomQuote();
  let html = '<p class = "quote">' + randomQuote.quote + '</p>'+
             '<p class = "source">' + randomQuote.source;

  if (randomQuote.citation){
    html += '<span class ="citation">' + randomQuote.citation + '</span>'
  }
  if (randomQuote.year){
    html += '<span class ="year">' + randomQuote.year + '</span>'
  }
  //span class = year for the css style
  if (randomQuote.categorization){
    html += '<span class ="year">' + randomQuote.categorization + '</span>'
  }

  html += '</p>'
  document.getElementById('quote-box').innerHTML = html;

  skipColor();
}

/*** function who skips trough some colors to change the background color ***/

function skipColor() {
  const color1 = ['lightblue','darkred','lightgreen','brown','grey','green'];
  let randomNumber = Math.floor(Math.random() * color1.length);
  const body = document.getElementsByTagName('body')[0];

  body.style.backgroundColor = color1[randomNumber];


}

// Time Interval to skip quotes automaticly (20sec)
setInterval(function (){printQuote()}, 20000);



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
