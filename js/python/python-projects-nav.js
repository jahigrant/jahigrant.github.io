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

  function pythonNavigation() {
    
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
        const stateObj = url.split("/")[0] + "/python-projects/";
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

  function doHello() {
    return document.getElementById("hello-world").innerHTML = `
      <div className="text-center">
        <div id="hello_world_component" className="p-5">123</div>
      </div>`;
  }

  function doMath() {
    return document.getElementById("math").innerHTML = `
      <div className="text-center">
        <div id="math_component" className="p-5">456</div>
      </div>`;
  }

  function pythonProjectsNav() {
    
    const element = (
      <div>
        
        <ul className="nav nav-pills" id="tabs-nav">
        <li className="nav-item">
            <a href="#hello-world" data-bs-toggle="list" className="nav-link active rounded-0" id="hello-world-link" onClick={pythonNavigation} title="Hello World">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-filetype-py" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2H7v-1h5a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM0 11.85h1.6c.289 0 .533.06.732.179.201.117.355.276.46.477.105.201.158.427.158.677 0 .25-.054.476-.16.677-.106.199-.26.357-.464.474a1.452 1.452 0 0 1-.732.173H.79v1.342H0V11.85Zm2.06 1.714a.795.795 0 0 0 .085-.381c0-.227-.062-.4-.185-.521-.123-.122-.294-.182-.513-.182H.788v1.406h.66a.794.794 0 0 0 .374-.082.574.574 0 0 0 .238-.24Zm2.963.75v1.535H4.23v-1.52L2.89 11.85h.876l.853 1.696h.032l.856-1.696h.855l-1.339 2.464Z"/>
              </svg>
            </a>
          </li>
          <li className="nav-item ms-0">
            <a href="#math" data-bs-toggle="list" className="nav-link rounded-0" id="math-link" onClick={pythonNavigation} title="Math">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-square-quote" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                <path d="M7.066 4.76A1.665 1.665 0 0 0 4 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z"/>
              </svg>
            </a>
          </li>
        </ul>

        <div className="card p-0 m-0 mt-5 bg-body border border-muted shadow">
          <div className="card-body p-4">
            <div className="tab-content project-content p-0" id="TabContent">
              <div className="tab-pane show fade active" id="hello-world" role="tabpanel" aria-labelledby="hello-world-tab"></div>
              <div className="tab-pane fade" id="math" role="tabpanel" aria-labelledby="math-tab"></div>
            </div>
          </div>
        </div>

      </div>

    );

    ReactDOM.render(
      element,
      document.getElementById('python_projects_nav')
    );
  }
  
pythonProjectsNav();
pythonNavigation();
doHello();
doMath();