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

function projectsNav() {
    const element = (

      <ul className="nav nav-pills">
      <li className="nav-item">
        <a className="nav-link active rounded-0" aria-current="page" href="#">Quote Machine</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Markdown Previewer</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Drum Machine</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">JS Calculator</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">25 + 5 Clock</a>
      </li>
    </ul>

    );
    ReactDOM.render(
      element,
      document.getElementById('projects_nav')
    );
  }
  
projectsNav();
