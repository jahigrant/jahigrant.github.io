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
    
    window.addEventListener("load", function() {});
          
  }

function projectsNav() {
    const element = (

      <ul className="nav nav-pills">
        <li className="nav-item active">
          <a href="#quote-machine" data-toggle="tab" className="nav-link" id="quote-machine">Quote Machine</a>
        </li>
        <li className="nav-item">
          <a href="#markdown-previewer" data-toggle="tab" className="nav-link" id="markdown-previewer">Markdown Previewer</a>
        </li>
        <li className="nav-item">
          <a href="#tab-3" data-toggle="tab" className="nav-link" id="tab3">Drum Machine</a>
        </li>
        <li className="nav-item">
          <a href="#tab-3" data-toggle="tab" className="nav-link" id="tab3">JS Calculator</a>
        </li>
        <li className="nav-item">
          <a href="#tab-3" data-toggle="tab" className="nav-link" id="tab3">25 + 5 Clock</a>
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