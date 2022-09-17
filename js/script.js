import React, { useState } from "react";
const quoteTitles = [
    ["Quote 1", "Quote Author 1"],
    ["Quote 2", "Quote Author 2"],
    ["Quote 3", "Quote Author 3"],
    ["Quote 4", "Quote Author 4"],
    ["Quote 5", "Quote Author 5"],
    ["Quote 6", "Quote Author 6"]
  ];

  const getRandomQuoteTitle = () => {
    return quoteTitles[Math.floor(Math.random() * quoteTitles.length)];
  };

function tick() {
    const [quoteTitle, setQuoteTitle] = useState(getRandomQuoteTitle());
    const handleClick = () => {
        // shuffle array and pick random
        const randomQuoteTitle = getRandomQuoteTitle();
        setQuoteTitle(randomQuoteTitle);
      };

    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
        <h1>{quoteTitle}</h1>
        <button onClick={handleClick}>Generate</button>
      </div>
    );
    ReactDOM.render(
      element,
      document.getElementById('the_root_of_your_reactJS_component')
    );
  }
  
  setInterval(tick, 1000);