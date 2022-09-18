


 
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

  function getQuote() {

  let randomItem = random_item(researchTitles);
let randomResult = [randomItem]

   let btn = document.getElementById('theButton');
  let myText = document.getElementById('text');
  let myAuthor = document.getElementById('author');

 
  btn.onclick = () => {

    // const choices = researchTitles.sort(() => Math.random() - 0.5).slice(0, 5);
    // console.log("Array " + choices[0][0], choices[0][1]);

    

let myInsertText = randomResult[0][2][0];    
if (myInsertText !== myText) {
  myText.innerHTML = myInsertText;
  console.log(randomResult[0][2][0]);
} else {
  myText.innerHTML = randomResult[0][0][0];
  console.log(randomResult[0][0][0]);
}

let myInsertAuthor = randomResult[0][2][1];    
if (myInsertAuthor !== myAuthor) {
  myAuthor.innerHTML = myInsertAuthor;
  console.log(randomResult[0][2][1]);
} else {
  myAuthor.innerHTML = randomResult[0][0][1];
  console.log(randomResult[0][0][1]);
}
    

    

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