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
    
    window.addEventListener("load", function() {
      // store tabs variable
      var theTabs = document.querySelectorAll("ul.exeDIRECTtabsDIV-nav > li");
      for (var i = 0; i < theTabs.length; i++) {
      theTabs[i].addEventListener("click", theTabClicks)
      }
      function theTabClicks(tabClickEvent) {
      var clickedTab = tabClickEvent.currentTarget;
      var tabParent = tabClickEvent.currentTarget.parentNode.parentNode;
      var theTabs = tabParent.querySelectorAll("ul.exeDIRECTtabsDIV-nav > li");
      for (var i = 0; i < theTabs.length; i++) {
      theTabs[i].classList.remove("active");
      }
      clickedTab.classList.add("active");
      
      //tabClickEvent.preventDefault(); //Stop Adding #ID In Addressbar
      var contentPanes = tabParent.querySelectorAll(".exeDIRECTtabsDIV-pane");
      for (var i = 0; i < contentPanes.length; i++) {
      contentPanes[i].classList.remove("active");
      }
      var anchorReference = tabClickEvent.target;
      var activePaneId = anchorReference.getAttribute("href");
      var activePane = tabParent.querySelector(activePaneId);
      activePane.classList.add("active");
      }
      // Open Address Bar Anchor Tag Tab Directly
      var hash = window.location.hash; //get the hash from url
      var cleanhash = hash.replace("#", ""); //remove the #
      cleanhash = cleanhash.replace("-", "");
      document.getElementById(cleanhash).click();
      });
          
  }

function projectsNav() {
    const element = (

      <ul className="exeDIRECTtabsDIV-nav nav nav-pills">
        <li className="active nav-item">
          <a href="#tab-1" className="nav-link" id="tab1">Quote Machine</a>
        </li>
        <li className="nav-item">
          <a href="#tab-2" className="nav-link" id="tab2">Markdown Previewer</a>
        </li>
        <li className="nav-item">
          <a href="#tab-3" className="nav-link" id="tab3">Drum Machine</a>
        </li>
        <li className="nav-item">
          <a href="#tab-3" className="nav-link" id="tab3">JS Calculator</a>
        </li>
        <li className="nav-item">
          <a href="#tab-3" className="nav-link" id="tab3">25 + 5 Clock</a>
        </li>
      </ul>

    );
    ReactDOM.render(
      element,
      document.getElementById('projects_nav')
    );
  }
  
projectsNav();
navigation();