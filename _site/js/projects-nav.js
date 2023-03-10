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
        if (titleClean.toString().replace(",", " ") == 'Js Calculator') {
          document.getElementById("page-title").innerHTML = 'JS Calculator';
          document.title = 'JS Calculator';
        } else if (titleClean.toString().replace(",", " ") == 'Clock') {
          document.getElementById("page-title").innerHTML = '25 + 5 Clock';
          document.title = '25 + 5 Clock';
        } else {
          document.getElementById("page-title").innerHTML = titleClean.toString().replace(",", " ");
          document.title = titleClean.toString().replace(",", " ");
        }
      });

      let switchNavMenuItem = (menuItems) => {
        const pathObj = location.pathname.split("/")[2];
        const htmlObj = pathObj.split(".html")[0];

        for (let i = 0; i < menuItems.length; i++) {
          const element = menuItems[i].hash;
          const elObj = element.split("#"); 
          const elSplit = elObj[1];
          if (elSplit == htmlObj) {
            $('#tabs-nav li a[href="'+menuItems[i].hash+'"]').tab('show')
          }
        }

        var current = location.hash;
        $.each(menuItems, (index, item) => {
            // $(item).removeClass('active') 
            if ((current.includes($(item).attr('href')) && $(item).attr('href') !== "/") || ($(item).attr('href') === "/" && current === "/")){
              console.log(index, item)
              $(this).closest('li').addClass('active');
            } else {
              $('#tabs-nav > li').addClass('bg-light');
              $('#tabs-nav > li:nth-child(n+2)').addClass('ms-2');
            }
        })
      }
      switchNavMenuItem($('#tabs-nav li a'))
    
    });

  }

  function doQuote() {
    return document.getElementById("quote-machine").innerHTML = `
      <figure className="text-center">
        <div id="quote_component" className="p-5"></div>
      </figure>`;
  }

  function doMarkdown() {
    return document.getElementById("markdown-previewer").innerHTML = `
      <div className="text-center">
        <div id="markdown_component" className="p-5"></div>
      </div>`;
  }

  function doDrum() {
    return document.getElementById("drum-machine").innerHTML = `
      <div>
        <div id="drum_machine_component" className="p-0"></div>
      </div>`;
  }

  function doCalc() {
    return document.getElementById("js-calculator").innerHTML = `
      <div className="text-center">
        <div id="js_calculator_component" className="p-5">JS Calculator</div>
      </div>`;
  }

  function doClock() {
    return document.getElementById("clock").innerHTML = `
      <div className="text-center">
        <div id="clock_component" className="p-5">Clock</div>
      </div>`;
  }

  function projectsNav() {
    const element = (
      <div>
        
        <ul className="nav nav-pills" id="tabs-nav">
          <li className="nav-item ms-0">
            <a href="#quote-machine" data-bs-toggle="list" className="nav-link" id="quote-machine-link" onClick={navigation}>Quote Machine</a>
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
            <a href="#clock" data-bs-toggle="list" className="nav-link" id="clock-link" onClick={navigation}>Clock</a>
          </li>
        </ul>

        <div className="card p-0 m-0 mt-5 bg-body shadow-lg rounded">
          <div className="card-body p-0">
            <div className="tab-content project-content" id="TabContent">
              <div className="tab-pane fade show active" id="quote-machine" role="tabpanel" aria-labelledby="quote-machine-tab"></div>
              <div className="tab-pane fade" id="markdown-previewer" role="tabpanel" aria-labelledby="markdown-previewer-tab"></div>
              <div className="tab-pane fade shadow" id="drum-machine" role="tabpanel" aria-labelledby="drum-machine-tab"></div>
              <div className="tab-pane fade" id="js-calculator" role="tabpanel" aria-labelledby="js-calculator-tab"></div>
              <div className="tab-pane fade" id="clock" role="tabpanel" aria-labelledby="clock-tab"></div>
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