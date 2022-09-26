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
        const hash = $(this).attr("href");
        let hashArray = [hash];
        if(hash == "#") {
          newUrl = url.split("/")[0];
        } else {
          newUrl = url.split("/")[0] + hash + ".html";
        }
        newUrl += "";
        history.replaceState(null, null, newUrl);
      });
    });
          
  }

function projectsNav() {
    const element = (
      <div className="" id="project-collapse-menu">

<ul className="nav nav-mytabs" id="project-menu" role="tablist">
  <li className="nav-item">
    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#quote-machine" role="tab" aria-controls="home" aria-selected="true">Quote Machine</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" id="history-tab" data-toggle="tab" href="#markdown-previewer" role="tab" aria-controls="history" aria-selected="false">Markdown Previewer</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" id="city-attractions-tab" data-toggle="tab" href="#drum-machine" role="tab" aria-controls="city-attractions" aria-selected="false">Drum Machine</a>
  </li>
</ul>
<div className="tab-content mytab-content" id="myTabContent">
  <div className="tab-pane fade show active" id="quote-machine" role="tabpanel" aria-labelledby="quote-machine-tab">
    Quote Machine
  </div>
  <div className="tab-pane fade" id="markdown-previewer" role="tabpanel" aria-labelledby="markdown-previewer-tab">
  Markdown Previewer
  </div>
  <div className="tab-pane fade" id="drum-machine" role="tabpanel" aria-labelledby="drum-machine-tab">
  Drum Machine
  </div>
</div>
 

      <ul className="nav nav-pills">
        <li className="nav-item active">
          <a href="#quote-machine" data-bs-toggle="list" className="nav-link" id="quote-machine" onClick={navigation}>Quote Machine</a>
        </li>
        <li className="nav-item">
          <a href="#markdown-previewer" data-bs-toggle="list" className="nav-link" id="markdown-previewer" onClick={navigation}>Markdown Previewer</a>
        </li>
        <li className="nav-item">
          <a href="#drum-machine" data-bs-toggle="list" className="nav-link" id="drum-machine" onClick={navigation}>Drum Machine</a>
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