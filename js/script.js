


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

  function getQuote() {
   const btn = document.getElementById('theButton');
  const myText = document.getElementById('text');
  const myAuthor = document.getElementById('author');

  btn.addEventListener('click', function(){
    myText.innerHTML += "";
    let myInsertText = randomItem[0];
  myText.innerHTML = myInsertText;
  let myInsertAuthor = randomItem[1];
  myAuthor.innerHTML = myInsertAuthor;
  
  }); 
  }
  



function tick() {
    const element = (

      <div>
        <button id='theButton' className="btn btn-primary" onClick={getQuote}>bouton</button>
        <h2 id="text"></h2>
        <h2 id="author"></h2>
      </div>
    );
    ReactDOM.render(
      element,
      document.getElementById('the_root_of_your_reactJS_component')
    );
  }
  
tick();