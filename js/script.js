


 
 const researchTitles = [
    ["Quote 1", "Quote Author 1"],
    ["Quote 2", "Quote Author 2"],
    ["Quote 3", "Quote Author 3"],
    ["Quote 4", "Quote Author 4"],
    ["Quote 5", "Quote Author 5"],
    ["Quote 6", "Quote Author 6"]
  ]; 
 function random_item(items){
    return items.sort(() => Math.random() - 0.5).slice(0, 5); 
  }



  function loadQuote() {
    let randomItem = random_item(researchTitles);
    let randomResult = [randomItem];

    let quoteBox = document.getElementById('quote-box');
    let quoteText = document.getElementById('text');
    let authorName = document.getElementById('author');

    quoteBox.addEventListener('load', function() {
    console.log('All assets are loaded')
})

    let insertQuote = randomResult[0][0][0];  
    if (insertQuote) {
      quoteText.innerHTML = insertQuote;
    }  
    
    let insertAuthor = randomResult[0][0][1];
    authorName.innerHTML = insertAuthor;
  }
  loadQuote();

  function getQuote() {
    
    let randomItem = random_item(researchTitles);
    let randomResult = [randomItem];

    let btn = document.getElementById('new-quote');
    let quoteText = document.getElementById('text');
    let authorName = document.getElementById('author');

    btn.onclick = () => {
      let insertQuote = randomResult[0][2][0];    
      if (insertQuote !== quoteText.innerHTML) {
        quoteText.innerHTML = insertQuote;
        console.log(randomResult[0][2][0]);
      } else {
        quoteText.innerHTML = randomResult[0][0][0];
        console.log(randomResult[0][0][0]);
      }

      let insertAuthor = randomResult[0][2][1];    
      if (insertAuthor !== authorName.innerHTML) {
        authorName.innerHTML = insertAuthor;
        console.log(randomResult[0][2][1]);
      } else {
        authorName.innerHTML = randomResult[0][0][1];
        console.log(randomResult[0][0][1]);
      }
    };

  }
  



function tick() {
    const element = (

      <div id="quote-box">
        <button id='new-quote' className="btn btn-primary rounded-0" onClick={getQuote}>New Quote</button>
        <p className="d-block" id="text">Hello</p>
        <footer className="blockquote-footer d-block" id="author" >Bobby D</footer>
        <cite title="Source Title"></cite>
      </div>
    );
    ReactDOM.render(
      element,
      document.getElementById('the_root_of_your_reactJS_component')
    );
  }
  
tick();