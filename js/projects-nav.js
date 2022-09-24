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
      <div className="list-group" id="myList" role="tablist">
        <a className="list-group-item list-group-item-action active" data-bs-toggle="list" href="#quote-machine" role="tab">Quote Machine</a>
        <a className="list-group-item list-group-item-action" data-bs-toggle="list" href="#markdown-previewer" role="tab">Markdown Previewer</a>
        <a className="list-group-item list-group-item-action" data-bs-toggle="list" href="#ab-3" role="tab">Drum Machine</a>
        <a className="list-group-item list-group-item-action" data-bs-toggle="list" href="#ab-4" role="tab">JS Calculator</a>

      <ul className="nav nav-pills">
        <li className="nav-item active">
          <a href="#quote-machine" data-bs-toggle="list" className="nav-link" id="quote-machine">Quote Machine</a>
        </li>
        <li className="nav-item">
          <a href="#markdown-previewer" data-bs-toggle="list" className="nav-link" id="markdown-previewer">Markdown Previewer</a>
        </li>
        <li className="nav-item">
          <a href="#tab-3" data-bs-toggle="list" className="nav-link" id="tab3">Drum Machine</a>
        </li>
        <li className="nav-item">
          <a href="#tab-3" data-bs-toggle="list" className="nav-link" id="tab3">JS Calculator</a>
        </li>
        <li className="nav-item">
          <a href="#tab-3" data-bs-toggle="list" className="nav-link" id="tab3">25 + 5 Clock</a>
        </li>
      </ul>
      </div>

    );
    ReactDOM.render(
      element,
      document.getElementById('projects_nav')
    );
  }
  
projectsNav();
navigation();