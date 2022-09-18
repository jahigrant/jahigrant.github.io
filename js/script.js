


 
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
    let quoteText = document.getElementById('quote');
    let authorName = document.getElementById('author');
    let myInsertText = randomResult[0][0][0];    
    quoteText.innerHTML = myInsertText;
    let myInsertAuthor = randomResult[0][0][1];
    authorName.innerHTML = myInsertAuthor;
  }

  function getQuote() {
    
    let randomItem = random_item(researchTitles);
    let randomResult = [randomItem];

    let btn = document.getElementById('theButton');
    let quoteText = document.getElementById('quote');
    let authorName = document.getElementById('author');

    btn.onclick = () => {
      let myInsertText = randomResult[0][2][0];    
      if (myInsertText !== quoteText.innerHTML) {
        quoteText.innerHTML = myInsertText;
        console.log(randomResult[0][2][0]);
      } else {
        quoteText.innerHTML = randomResult[0][0][0];
        console.log(randomResult[0][0][0]);
      }

      let myInsertAuthor = randomResult[0][2][1];    
      if (myInsertAuthor !== authorName.innerHTML) {
        authorName.innerHTML = myInsertAuthor;
        console.log(randomResult[0][2][1]);
      } else {
        authorName.innerHTML = randomResult[0][0][1];
        console.log(randomResult[0][0][1]);
      }
    };

  }
  



function tick() {
    const element = (

      <div>
        <button id='theButton' className="btn btn-primary rounded-0" onClick={getQuote}>New Quote</button>
        <p className="d-block" id="quote" onLoad={loadQuote}>Hello</p>
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