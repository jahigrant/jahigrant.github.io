


  function random_item(items){
    return items[Math.floor(Math.random()*items.length)]; 
  }
 const researchTitles = [
    ["Quote 1", "Quote Author 1"],
    ["Quote 2", "Quote Author 2"],
    ["Quote 3", "Quote Author 3"],
    ["Quote 4", "Quote Author 4"],
    ["Quote 5", "Quote Author 5"],
    ["Quote 6", "Quote Author 6"]
  ]; 


  function getQuote() {

  let randomItem = researchTitles[Math.floor(Math.random()*researchTitles.length)];
let randomResult = [randomItem]

   let btn = document.getElementById('theButton');
  let myText = document.getElementById('text');
  let myAuthor = document.getElementById('author');

 
  btn.onclick = () => {

    console.log(randomResult);

    let myInsertText = randomResult[0][0];
  myText.innerHTML = myInsertText;
  let myInsertAuthor = randomResult[0][1];
  myAuthor.innerHTML = myInsertAuthor;
};
  }
  



function tick() {
    const element = (

      <div>
        <button id='theButton' className="btn btn-primary rounded-0" onClick={getQuote}>New Quote</button>
        <p className="d-block" id="text">Hello</p>
        <footer className="blockquote-footer d-block" id="author">Bobby D</footer>
        <cite title="Source Title"></cite>
      </div>
    );
    ReactDOM.render(
      element,
      document.getElementById('the_root_of_your_reactJS_component')
    );
  }
  
tick();