const quotes = [
  {
    saying: "Good code is its own best documentation.",
    author: "Steve McConnell",
  },
  {
    saying:
      "Fools ignore complexity. Pragmatists suffer it. Some can avoid it. Geniuses remove it.",
    author: "Alan Perlis",
  },
  {
    saying: "Good design adds value faster than it adds cost.",
    author: "Thomas C. Gale",
  },
];

const quote = quotes[Math.floor(Math.random() * quotes.length)];

const saying = document.querySelector(".quote__saying");
const author = document.querySelector(".quote__author");
saying.innerText = quote.saying;
author.innerText = quote.author;
