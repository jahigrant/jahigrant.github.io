


 
 const researchTitles = [
    ["Quote 1", "Quote Author 1"],
    ["Quote 2", "Quote Author 2"],
    ["Quote 3", "Quote Author 3"],
    ["Quote 4", "Quote Author 4"],
    ["Quote 5", "Quote Author 5"],
    ["Quote 6", "Quote Author 6"]
  ]; 
 function random_item(items){
    return researchTitles[Math.floor(Math.random()*researchTitles.length)]; 
  }

  function getQuote() {

  let randomItem = random_item();
let randomResult = [randomItem]

   let btn = document.getElementById('theButton');
  let myText = document.getElementById('text');
  let myAuthor = document.getElementById('author');

 
  btn.onclick = () => {

    const choices = researchTitles.sort(() => Math.random() - 0.5).slice(0, 5)
    console.log(choices);

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