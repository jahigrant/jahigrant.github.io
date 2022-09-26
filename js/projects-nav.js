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
        $('#myTab a[href="#'+hash[1]+'"]').tab("show");
        url = location.href.replace(/\/#/, "/");
        history.replaceState(null, null, url);
        setTimeout(() => {
          $(window).scrollTop(0);
        }, 400);
      } 
       
      $('a[data-toggle="tab"]').on("click", function() {
        let newUrl;
        const hash = $(this).attr("href");
        if(hash == "#home") {
          newUrl = url.split("/")[0];
        } else {
          newUrl = url.split("/")[0] + hash + ".html";
        }
        newUrl += "/";
        history.replaceState(null, null, newUrl);
      });
    });
          
  }

function projectsNav() {
    const element = (
      <div className="" id="project-collapse-menu">

<ul class="nav nav-mytabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="history-tab" data-toggle="tab" href="#history" role="tab" aria-controls="history" aria-selected="false">History</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="city-attractions-tab" data-toggle="tab" href="#city-attractions" role="tab" aria-controls="city-attractions" aria-selected="false">City Attractions</a>
  </li>
</ul>
<div class="tab-content mytab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
    123
  </div>
  <div class="tab-pane fade" id="history" role="tabpanel" aria-labelledby="history-tab">
    456
  </div>
  <div class="tab-pane fade" id="city-attractions" role="tabpanel" aria-labelledby="city-attractions-tab">
    789
  </div>
</div>
 

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