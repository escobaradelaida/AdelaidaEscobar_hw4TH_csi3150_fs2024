// making the array for the 10 quotes

const quotes = [
  "The downside of my celebrity is that I cannot go anywhere in the world without being recognized. It is not enough for me to wear dark sunglasses and a wig. The wheelchair gives me away.",
  "Two things are infinite: the universe and human stupidity; and I’m not sure about the universe.",
  "People who think they know everything are a great annoyance to those of us who do.",
  "The trouble with having an open mind is that people will insist on coming along and trying to put things in it.",
  "I love deadlines, I like the whooshing sound they make as they fly by.",
  "A day without sunshine is like, you know, night.",
  "Always forgive your enemies; nothing annoys them so much.",
  "If you can’t beat them, arrange to have them beaten.",
  "Confidence is 10% work and 90% delusion.",
  "Never doubt the courage of the French. They were the ones who discovered that snails are edible."
];


// then we make the function that will go into the html file
// it should occur onClick
//the function will take the random index of the array by using Math.function
// then the alert will showcase the random quote based on the array index it pulls
function showRandomQuotes(){
    const randomIndex = Math.floor(Math.random() * quotes.length);
    alert(quotes[randomIndex]);
}