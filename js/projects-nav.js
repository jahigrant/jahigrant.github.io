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
              $('#tabs-nav > li:nth-child(n+2)').addClass('ms-1');
            }
        })
      }
      switchNavMenuItem($('#tabs-nav li a'))
    
    });

  }

  function doQuote() {
    return document.getElementById("quote-machine").innerHTML = `
      <figure className="text-center">
        <div id="quote_component" className="p-0"></div>
      </figure>`;
  }

  function doMarkdown() {
    return document.getElementById("markdown-previewer").innerHTML = `
      <div className="text-center">
        <div id="markdown_component" className="p-5"></div>
      </div>`;
  }

  // function doDrum() {
  //   return document.getElementById("drum-machine").innerHTML = `
  //     <div>
  //       <div id="drum_machine_component" className="p-0"></div>
  //     </div>`;
  // }

  // function doCalculator() {
  //   return document.getElementById("calculator").innerHTML = `
  //     <div className="text-center">
  //       <div id="calculator_component" className="p-5">Calculator</div>
  //     </div>`;
  // }

  // function doClock() {
  //   return document.getElementById("clock").innerHTML = `
  //     <div className="text-center">
  //       <div id="clock_component" className="p-5">Clock</div>
  //     </div>`;
  // }

  // function doPython() {
  //   return document.getElementById("python").innerHTML = `
  //     <div className="text-center">
  //       <div id="python_component" className="p-5">Python</div>
  //     </div>`;
  // }

  function doChatbot() {
    return document.getElementById("chatbot").innerHTML = `
      <div className="text-center">
        <div id="chatbot_component" className="p-5">Chatbot</div>
      </div>`;
  }

  function projectsNav() {
    const element = (
      <div>
        
        <ul className="nav nav-pills" id="tabs-nav">
          <li className="nav-item ms-0">
            <a href="#quote-machine" data-bs-toggle="list" className="nav-link active rounded-0" id="quote-machine-link" onClick={navigation} title="Quote Machine">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-square-quote" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                <path d="M7.066 4.76A1.665 1.665 0 0 0 4 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z"/>
              </svg>
            </a>
          </li>
          <li className="nav-item">
            <a href="#markdown-previewer" data-bs-toggle="list" className="nav-link rounded-0" id="markdown-previewer-link" onClick={navigation} title="Markdown Previewer">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-markdown" viewBox="0 0 16 16">
                <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"/>
                <path fillRule="evenodd" d="M9.146 8.146a.5.5 0 0 1 .708 0L11.5 9.793l1.646-1.647a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 0-.708z"/>
                <path fillRule="evenodd" d="M11.5 5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5z"/>
                <path d="M3.56 11V7.01h.056l1.428 3.239h.774l1.42-3.24h.056V11h1.073V5.001h-1.2l-1.71 3.894h-.039l-1.71-3.894H2.5V11h1.06z"/>
              </svg>
            </a>
          </li>
          {/* <li className="nav-item">
            <a href="#drum-machine" data-bs-toggle="list" className="nav-link rounded-0" id="drum-machine-link" onClick={navigation} title="Drum Machine">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-boombox" viewBox="0 0 16 16">
                <path d="M2.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm2 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm7.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm-7-1a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm5.5 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"/>
                <path d="M11.5 13a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0-1a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM5 10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"/>
                <path d="M7 10.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-1 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"/>
                <path d="M14 0a.5.5 0 0 1 .5.5V2h.5a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12.5V.5A.5.5 0 0 1 14 0ZM1 3v3h14V3H1Zm14 4H1v7h14V7Z"/>
              </svg>
            </a>
          </li> */}
          {/* <li className="nav-item">
            <a href="#calculator" data-bs-toggle="list" className="nav-link rounded-0" id="calculator-link" onClick={navigation} title="JS Calculator">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calculator" viewBox="0 0 16 16">
                <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z"/>
              </svg>
            </a>
          </li> */}
          {/* <li className="nav-item">
            <a href="#clock" data-bs-toggle="list" className="nav-link rounded-0" id="clock-link" onClick={navigation} title="Clock">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
              </svg>
            </a>
          </li> */}
          {/* <li className="nav-item">
            <a href="#python" data-bs-toggle="list" className="nav-link rounded-0" id="python-link" onClick={navigation} title="Python">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-filetype-py" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2H7v-1h5a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM0 11.85h1.6c.289 0 .533.06.732.179.201.117.355.276.46.477.105.201.158.427.158.677 0 .25-.054.476-.16.677-.106.199-.26.357-.464.474a1.452 1.452 0 0 1-.732.173H.79v1.342H0V11.85Zm2.06 1.714a.795.795 0 0 0 .085-.381c0-.227-.062-.4-.185-.521-.123-.122-.294-.182-.513-.182H.788v1.406h.66a.794.794 0 0 0 .374-.082.574.574 0 0 0 .238-.24Zm2.963.75v1.535H4.23v-1.52L2.89 11.85h.876l.853 1.696h.032l.856-1.696h.855l-1.339 2.464Z"/>
              </svg>
            </a>
          </li> */}
          <li className="nav-item">
            <a href="#chatbot" data-bs-toggle="list" className="nav-link rounded-0" id="chatbot-link" onClick={navigation} title="Chatbot">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-robot" viewBox="0 0 16 16">
                <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z"/>
                <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z"/>
              </svg>
            </a>
          </li>
        </ul>

        <div className="card p-0 m-0 mt-5 bg-body border border-muted shadow">
          <div className="card-body p-0">
            <div className="tab-content project-content p-0" id="TabContent">
              <div className="tab-pane fade show active" id="quote-machine" role="tabpanel" aria-labelledby="quote-machine-tab"></div>
              <div className="tab-pane fade" id="markdown-previewer" role="tabpanel" aria-labelledby="markdown-previewer-tab"></div>
              {/* <div className="tab-pane fade shadow" id="drum-machine" role="tabpanel" aria-labelledby="drum-machine-tab"></div> */}
              {/* <div className="tab-pane fade" id="calculator" role="tabpanel" aria-labelledby="calculator-tab"></div> */}
              {/* <div className="tab-pane fade" id="clock" role="tabpanel" aria-labelledby="clock-tab"></div> */}
              <div className="tab-pane fade" id="python" role="tabpanel" aria-labelledby="python-tab"></div>
              <div className="tab-pane fade" id="chatbot" role="tabpanel" aria-labelledby="chatbot-tab"></div>
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
// doDrum();
// doCalculator();
// doClock();
// doPython();
doChatbot();