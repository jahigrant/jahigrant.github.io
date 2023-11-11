const base_name = "Python Projects";
const tabItems = [
  {
    url: "/python-projects/index.html",
    slug: "index",
    title: "Index",
    description: "Here are some examples of Python code snippets covering various concepts and use cases.",
    category: [
      "python",
    ]
  },
  {
    url: "/python-projects/hello-world.html",
    slug: "hello-world",
    title: "Hello World",
    description: "A basic hello world python script",
    category: [
      "python",
      "pyscript",
      "html",
      "print()",
      "string"
    ]
  },
  {
    url: "/python-projects/math.html",
    slug: "math",
    title: "Math",
    description: "A basic math python script showing off a few functions",
    category: [
      "python",
      "pyscript",
      "html",
      "print()",
      "math"
    ]
  },
  {
    url: "/python-projects/list.html",
    slug: "list",
    title: "List",
    description: "A basic python script showing off the list function",
    category: [
      "python",
      "pyscript",
      "html",
      "print()",
      "list"
    ]
  },
  {
    url: "/python-projects/date-time.html",
    slug: "date-time",
    title: "Date Time",
    description: "A basic python script showing off the date & time functions",
    category: [
      "python",
      "pyscript",
      "html",
      "print()",
      "date",
      "time"
    ]
  }
]; 

const code_icon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-code" viewBox="0 0 16 16">
    <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z"/>
  </svg>
`;

const home_icon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
    <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z"/>
  </svg>
`;

const python_icon = `
  <svg width="24" height="24" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <path d="M49.515,0c-25.322,0 -23.741,11.025 -23.741,11.025l0.028,11.423l24.165,0l-0,3.43l-33.763,-0c-0,-0 -16.204,-1.845 -16.204,23.807c0,25.654 14.143,24.744 14.143,24.744l8.441,0l-0,-11.904c-0,0 -0.455,-14.2 13.917,-14.2l23.968,0c-0,0 13.465,0.219 13.465,-13.066l0,-21.966c0,0 2.045,-13.293 -24.419,-13.293Zm-13.324,7.682c0.001,-0 0.002,-0 0.004,-0c2.382,-0 4.343,1.968 4.343,4.36c-0,0.002 -0,0.003 -0,0.004c-0,0.002 -0,0.003 -0,0.004c-0,2.392 -1.961,4.361 -4.343,4.361c-0.002,-0 -0.003,-0 -0.004,-0c-0.002,-0 -0.003,-0 -0.004,-0c-2.383,-0 -4.344,-1.969 -4.344,-4.361c0,-0.001 0,-0.002 0,-0.004c0,-0.001 0,-0.002 0,-0.004c0,-2.392 1.961,-4.36 4.344,-4.36c0.001,-0 0.002,-0 0.004,-0Z" style="fill:#fff;fill-rule:nonzero;"/><path d="M50.234,99.629c25.323,0 23.742,-11.025 23.742,-11.025l-0.028,-11.423l-24.166,0l0,-3.429l33.763,-0c0,-0 16.204,1.845 16.204,-23.809c0,-25.653 -14.143,-24.743 -14.143,-24.743l-8.441,-0l0,11.904c0,-0 0.455,14.2 -13.917,14.2l-23.967,-0c-0,-0 -13.466,-0.219 -13.466,13.066l0,21.966c0,0 -2.045,13.293 24.419,13.293l0,0Zm13.325,-7.681c-0.001,0 -0.003,0 -0.004,0c-2.383,0 -4.343,-1.968 -4.343,-4.361c-0,-0.001 -0,-0.002 -0,-0.003c-0,-0.002 -0,-0.003 -0,-0.005c-0,-2.392 1.96,-4.361 4.343,-4.361c0.001,0 0.003,0 0.004,0c0.001,0 0.002,0 0.004,0c2.382,0 4.343,1.969 4.343,4.361c0,0.002 0,0.003 0,0.004c0,0.001 0,0.003 0,0.004c0,2.392 -1.961,4.361 -4.343,4.361c-0.002,-0 -0.003,-0 -0.004,-0l-0,0Z" style="fill:#fff;fill-rule:nonzero;"/>
  </svg>`

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

function bg_gradients() {
  $(document).ready(() => {
    let colors = [
      ['#FF6633', '#FFB399'], ['#FF33FF', '#FFFF99'], ['#00B3E6', '#E6B333'], ['#3366E6', '#999966'], ['#99FF99', '#B34D4D'], ['#80B300', '#809900'], ['#E6B3B3', '#6680B3'], ['#66991A', '#FF99E6'], ['#CCFF1A', '#FF1A66'], ['#E6331A', '#33FFCC'], ['#66994D', '#B366CC'], ['#4D8000', '#B33300'], ['#CC80CC', 
		  '#66664D'], ['#991AFF', '#E666FF'], ['#4DB3FF', '#1AB399'], ['#E666B3', '#33991A'], ['#CC9999', '#B3B31A'], ['#00E680', '#4D8066'], ['#809980', '#E6FF80'], ['#1AFF33', '#999933'], ['#FF3380', '#CCCC00'], ['#66E64D', '#4D80CC'], ['#9900B3', '#E64D66'], ['#4DB380', '#FF4D4D'], ['#99E6E6', '#6666FF']
    ];
    let boxes = document.getElementsByClassName("project-gradient");
    for (let i = 0; i < boxes.length; i++) {
      const element = boxes[i];
      const colorIndex = colors[Math.floor(Math.random() * colors.length)];
      element.style.background = 'linear-gradient(270deg, '+colorIndex[0]+', '+colorIndex[1]+')';
    }  
  });
}

function pyNavTabs() {
  $(document).ready(() => {
    const get_nav_tabs = document.getElementById("tabs-nav");
    const python_frontpage = document.getElementById("python-frontpage");

    for (let j = 0; j < tabItems.length; j++) {
      const element = tabItems[j];
      console.log("navatabaaaaassss ", element);

      let url = location.href.replace(/\/$/, "");
      const hash = url.split("/");
      let hashArray = _.reverse(hash);
      let hashedArray = _.head(hashArray)
      console.log("hashssssssssjhhhhhhhhhshh ", hashedArray);

      if (hashedArray == "python-projects" || hashedArray == "index.html") {
        get_nav_tabs.innerHTML += `
          <li class="nav-item ms-0 bg-light mx-1 mb-1">
            <a href="#`+ element.slug +`" data-bs-toggle="list" class="nav-link rounded-0 text-center" id="`+ element.slug +`-link" onClick={pythonNavigation} title="`+ element.title +`">
            `+ element.title + "<br>" + code_icon +`
            </a>
          </li>
        `
        if (tabItems[j] !== tabItems[0]) {
          python_frontpage.innerHTML += `
            <div class="col p-0">
              <div class="project-gradient card p-4 rounded-0">
                <div class="card-body p-2 text-center">
                  <div class="d-flex justify-content-center" style="display: inline;">`+ python_icon +`</div>
                  <div id="`+ element.slug +`-content-preview" class="text-light fs-4 lh-sm" style="-webkit-text-stroke:0.2px black;text-wrap: nowrap;">
                    `+ element.title +`
                  </div>
                </div>
              </div>
            </div>
        `;
        }

      } else {
        if (
          hashedArray == "hello-world.html" || 
          hashedArray == "math.html" ||
          hashedArray == "list.html" ||
          hashedArray == "date-time.html" 
          ) {
          get_nav_tabs.innerHTML += `
            <li class="nav-item ms-0 bg-light mx-1 mb-1">
              <a href="#`+ element.slug +`" data-bs-toggle="list" class="nav-link rounded-0 text-center" id="`+ element.slug +`-link" onClick={pythonNavigation} title="`+ element.title +`">
              `+ element.title + "<br>" + code_icon +`
              </a>
            </li>
          `
        } else {
        //   python_frontpage.innerHTML += `
        //     <div class="col p-0">
        //       <div class="project-gradient card p-4">
        //         <div class="card-body p-2 text-center">
        //           <div class="d-flex justify-content-center" style="display: inline;">`+ python_icon +`</div>
        //           <a href="#`+ element.slug +`" id="`+ element.slug +`-link" class="stretched-link text-decoration-none text-light fs-4 lh-sm" onClick={pythonNavigation} title="`+ element.title +`" data-bs-toggle="list" style="-webkit-text-stroke:0.2px black;">
        //             `+ element.title +`
        //           </a>
        //         </div>
        //       </div>
        //     </div>
        // `;
        }
      }

    }

  });
}

function pythonNavigation() {
  $(document).ready(() => {
  
    let url = location.href.replace(/\/$/, "");

      function titleCase(string) {
        var sentence = string.toLowerCase().split(" ");
        for(var i = 0; i< sentence.length; i++){
            sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
        }
        sentence.join(" ");
        return sentence;
      }

   
      const hashSplit = url.split("/");
      const hash_array = _.reverse(hashSplit);
      
      if (hash_array[0] !== "python-projects") {

        const sub_location = hashSplit[1].replace("-", " ");
        const sub_title = titleCase(sub_location);

        const titleSplit = hashSplit[0].replace("-", " ")
        const titleClean = titleCase(titleSplit);
        const clean_html = titleClean.toString().replace(".html", "");
        const page_title = sub_title.toString().replace(",", " ") + ": ";
        const sub_page_title = clean_html.toString().replace(",", " ");
        document.getElementById("page-title").innerHTML = page_title;
        document.getElementById("sub-page-title").innerHTML = sub_page_title;
        document.title = page_title + sub_page_title;

// alert(hash_array[0] + tabItems[0].slug+".html")
        const get_page_title = document.getElementById("sub-page-title").innerHTML.toString();
        const current_title = [];
        current_title.push(get_page_title);
        console.log(current_title[0]);
        const res = tabItems.find(x => x.title ===  current_title[0]);

        if (get_page_title !== 'Index' || get_page_title !== base_name) {
          if (hash_array[0] !== tabItems[0].slug+".html" ) {
            document.getElementById(res.slug+"-script-title").innerHTML = res.title;
            document.getElementById("page-description").innerHTML = res.description;
          } else if (hash_array[0] == tabItems[0].slug+".html" ) {
            document.getElementById("page-title").innerHTML = base_name;
            document.getElementById("sub-page-title").innerHTML = ""
            document.getElementById("page-description").innerHTML = tabItems[0].description;
          }
        } else {
          document.getElementById("page-title").innerHTML = base_name;
          document.getElementById("sub-page-title").innerHTML = ""
          document.getElementById("page-description").innerHTML = tabItems[0].description;
        }

      } else {

        const titleSplit = hashSplit[0].replace("-", " ");
        const titleClean = titleCase(titleSplit);
        const title_cleaned = titleClean.toString().replace(",", " ");
        document.getElementById("page-title").innerHTML = title_cleaned + ": ";
        document.title = title_cleaned;

        const res = tabItems.find(x => x.title === tabItems[0].title);
        document.getElementById("page-description").innerHTML = tabItems[0].description;
        console.log(title_cleaned, res);
      }  
    
      $('a[data-bs-toggle="list"]').on("click", function() {

        let newUrl;
        let hash = $(this).attr("href");
        const hashSplit = hash.split("#");
        let hashArray = [hash];
        if(hash == "#") {
          newUrl = hashSplit[1] + "";
        } else {
          newUrl = hashSplit[1] + ".html";
        }
        newUrl += "";
        const stateObj = "/python-projects/" + hashSplit[1] + ".html";
        history.replaceState(stateObj, null, newUrl);
        console.log(stateObj, null, newUrl);
        // location.hash = 'reviews';

        const titleSplit = hashSplit[1].replace("-", " ")
        const titleClean = titleCase(titleSplit);
        document.getElementById("sub-page-title").innerHTML = titleClean.toString().replace(",", " ");
        document.title = titleClean.toString().replace(",", " ");

        const get_page_title = document.getElementById("sub-page-title").innerHTML.toString();
        const current_title = [];
        current_title.push(get_page_title);
        console.log(current_title[0]);
        const res = tabItems.find(x => x.title ===  current_title[0]);
        console.log(get_page_title);
        console.log(res);

        if (get_page_title !== 'Index') {
          document.getElementById("page-title").innerHTML = base_name + ": ";
          document.getElementById(res.slug+"-script-title").innerHTML = res.title;
          document.getElementById("page-description").innerHTML = res.description;
        } else {
          document.getElementById("page-title").innerHTML = base_name;
          document.getElementById("sub-page-title").innerHTML = "";
          document.getElementById("page-description").innerHTML = tabItems[0].description;
          
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
      switchNavMenuItem($('#tabs-nav li a'));

  });
}




function doPython() {
  return document.getElementById("index").innerHTML = `
    <div className="text-center">
      <div id="python_component" className="p-5"></div>
    </div>`;
}

function doHello() {
  return document.getElementById("hello-world").innerHTML = `
    <div className="text-center">
      <div id="hello_world_component" className="p-5"></div>
    </div>`;
}

function doMath() {
  return document.getElementById("math").innerHTML = `
    <div className="text-center">
      <div id="math_component" className="p-5"></div>
    </div>`;
}

function doList() {
  return document.getElementById("list").innerHTML = `
    <div className="text-center">
      <div id="list_component" className="p-5"></div>
    </div>`;
}

function doDate() {
  return document.getElementById("date-time").innerHTML = `
    <div className="text-center">
      <div id="date_time_component" className="p-5"></div>
    </div>`;
}

function pythonProjectsNav() {
  const element = (
    <div>
      <div id="profile-header" className="p-0 mt-5 text-start">
        <h1>
          <span id="page-title"></span>
          <span id="sub-page-title"></span>
        </h1>
      </div>

      <div id="page-description" className="fs-4"></div>
      
      <ul id="nav-tabs"></ul>

      <ul className="nav nav-pills" id="tabs-nav"></ul>

      <div className="p-0 m-0 mt-2 bg-body border-0 border-muted">
        <div className="p-0">

          <div className="tab-content project-content p-0 bg-transparent" id="tab-content">

            <div className="tab-pane fade show active" id="index" role="tabpanel" aria-labelledby="python-tab">
              <div className="container p-0">
                <div id="python-frontpage" className="row row-cols-2 row-cols-lg-3 g-0 g-lg-0"></div>
              </div>
            </div>
            
            <div className="tab-pane fade" id="hello-world" role="tabpanel" aria-labelledby="hello-world-tab"></div>

            <div className="tab-pane fade" id="math" role="tabpanel" aria-labelledby="math-tab"></div>

            <div className="tab-pane fade" id="list" role="tabpanel" aria-labelledby="list-tab"></div>

            <div className="tab-pane fade" id="date-time" role="tabpanel" aria-labelledby="date-time-tab"></div>

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

pyNavTabs();
pythonProjectsNav();
doHello();
doMath();
doList();
doDate();
pythonNavigation();
bg_gradients();