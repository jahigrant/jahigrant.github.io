const navItems = [
    {
      "slug": "quote-machine",
      "title": "Quote Machine",
      "description": "A random quote machine",
      "category": [
        "react",
        "html",
        "javascript"
      ]
    }
  ]; 


  function navigation() {
    
    $(document).ready(() => {

      let url = location.href.replace(/\/$/, "");
     
      if (location.hash) {
        const hash = url.split("#");
        let hashArray = [hash];
        console.log(hashArray)
        $('#project-menu a[href="#'+hash[1]+'"]').tab("show");
        url = location.href.replace(/\/#/, "/");
        history.replaceState(null, null, url);
        setTimeout(() => {
          $(window).scrollTop(0);
        }, 400);
      } 
       
      $('a[data-bs-toggle="list"]').on("click", function() {
        let newUrl;
        let hash = $(this).attr("href");
        const hashSplit = hash.split("#");
        for (let i = 0; i < hashSplit.length; i++) {
          const element = hashSplit[i];
          console.log(element)
        }
        console.log(hashSplit[0], hashSplit[1]);

        let hashArray = [hash];
        if(hash == "#") {
          newUrl = url.split("/")[0] + hashSplit[1] + ".html";
        } else {
          newUrl = url.split("/")[0] + hashSplit[1] + ".html";
        }
        newUrl += "";
        const stateObj = url.split("/")[0] + "/projects/";
        history.replaceState(stateObj, null, newUrl);

        const titleSplit = hashSplit[1].replace("-", " ")
        
        function titleCase(string) {
          var sentence = string.toLowerCase().split(" ");
          for(var i = 0; i< sentence.length; i++){
             sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
          }
        sentence.join(" ");
       return sentence;
       }
       

       const titleClean = titleCase(titleSplit);
      document.getElementById("page-title").innerHTML = titleClean.toString().replace(",", " ");

      });



      let switchNavMenuItem = (menuItems) => {

        var current = location.hash
    
        $.each(menuItems, (index, item) => {
    
            // $(item).removeClass('active')
    
            if ((current.includes($(item).attr('href')) && $(item).attr('href') !== "/") || ($(item).attr('href') === "/" && current === "/")){
              $(this).closest('li').addClass('active');
            }
        })
    }
    switchNavMenuItem($('#tabs-nav li a'))



    });
          
}

function doQuote() {
  return document.getElementById("quote-machine").innerHTML = `
    <figure className="text-center">
      <div id="quote_component" class="p-5"></div>
    </figure>`;
}

function doMarkdown() {
  return document.getElementById("markdown-previewer").innerHTML = `
    <div className="text-center">
      <div id="markdown_component" class="p-5">Markdown</div>
    </div>`;
}

function doDrum() {
  return document.getElementById("drum-machine").innerHTML = `
    <div className="text-center">
      <div id="drum_machine_component" class="p-5">Drum Machine</div>
    </div>`;
}

function doCalc() {
  return document.getElementById("js-calculator").innerHTML = `
    <div className="text-center">
      <div id="js_calculator_component" class="p-5">JS Calculator</div>
    </div>`;
}

function doClock() {
  return document.getElementById("twenty5-clock").innerHTML = `
    <div className="text-center">
      <div id="_20+5_clock_component" class="p-5">20 + 5 Clock</div>
    </div>`;
}

function projectsNav() {
    const element = (
      <div>
        
        <ul className="nav nav-pills" id="tabs-nav">
          <li className="nav-item active">
            <a href="#quote-machine" data-bs-toggle="list" className="nav-link active" id="quote-machine-link" onClick={navigation}>Quote Machine</a>
          </li>
          <li className="nav-item">
            <a href="#markdown-previewer" data-bs-toggle="list" className="nav-link" id="markdown-previewer-link" onClick={navigation}>Markdown Previewer</a>
          </li>
          <li className="nav-item">
            <a href="#drum-machine" data-bs-toggle="list" className="nav-link" id="drum-machine-link" onClick={navigation}>Drum Machine</a>
          </li>
          <li className="nav-item">
            <a href="#js-calculator" data-bs-toggle="list" className="nav-link" id="js-calculator-link" onClick={navigation}>JS Calculator</a>
          </li>
          <li className="nav-item">
            <a href="#twenty5-clock" data-bs-toggle="list" className="nav-link" id="twenty5-clock-link" onClick={navigation}>25 + 5 Clock</a>
          </li>
        </ul>

        <div className="card text-center p-0 pt-5 m-0 mt-5 bg-body shadow-lg rounded">
          <div className="card-body">
            <div className="tab-content mytab-content" id="TabContent">
              <div className="tab-pane fade show active" id="quote-machine" role="tabpanel" aria-labelledby="quote-machine-tab"></div>
              <div className="tab-pane fade" id="markdown-previewer" role="tabpanel" aria-labelledby="markdown-previewer-tab"></div>
              <div className="tab-pane fade" id="drum-machine" role="tabpanel" aria-labelledby="drum-machine-tab"></div>
              <div className="tab-pane fade" id="js-calculator" role="tabpanel" aria-labelledby="js-calculator-tab"></div>
              <div className="tab-pane fade" id="twenty5-clock" role="tabpanel" aria-labelledby="20+5-clock-tab"></div>
            </div>
          </div>
        </div>

      </div>

    );
    ReactDOM.render(
      element,
      document.getElementById('projects_nav')
    );
  }
  
projectsNav();
navigation();
doQuote();
doMarkdown();
doDrum();
doCalc();
doClock();