


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

  btn.addEventListener('click', function(){
    let myInsertText = randomItem;
  myText.innerHTML += myInsertText;
  
  }); 
  }
  



function tick() {
    const element = (

      <div>
        <button id='theButton' onClick={getQuote}>bouton</button>
        <h2 id="text"></h2>
      </div>
    );
    ReactDOM.render(
      element,
      document.getElementById('the_root_of_your_reactJS_component')
    );
  }
  
tick();