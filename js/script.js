


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

  var randomItem = researchTitles[Math.floor(Math.random()*researchTitles.length)];
var randomResult = [randomItem]
  function getQuote() {
   let btn = document.getElementById('theButton');
  let myText = document.getElementById('text');
  let myAuthor = document.getElementById('author');

  // btn.addEventListener('click', function(){
  //   myText.innerHTML += "";
  //   let myInsertText = randomResult[0];
  // myText.innerHTML = myInsertText;
  // let myInsertAuthor = randomResult[1];
  // myAuthor.innerHTML = myInsertAuthor;
  
  // }); 

  btn.onclick = () => {
    myText.innerHTML = "";
    let myInsertText = randomResult[0];
  myText.innerHTML = myInsertText;
  let myInsertAuthor = randomResult[1];
  myAuthor.innerHTML = myInsertAuthor;
};
  }
  



function tick() {
    const element = (

      <div>
        <button id='theButton' className="btn btn-primary rounded-0" onClick={getQuote}>New Quote</button>
        <p id="text">Hello</p>
        <footer className="blockquote-footer" id="author">Bobby D</footer>
        <cite title="Source Title"></cite>
      </div>
    );
    ReactDOM.render(
      element,
      document.getElementById('the_root_of_your_reactJS_component')
    );
  }
  
tick();