const base_name = "About";
const root = [
  {
    root: "/about/",
    slug: "index",
    title: base_name,
    short_title: "About",
    description: "A Front End Developer, whom wears other hats, who documents what has come before.",
    icon: `<i class="fa-solid fa-house fa-xl"></i>`,
    category: [
      "javascript"
    ]
  }
]
const tabItems = [
  {
    url: "/about/index.html",
    slug: root[0].slug,
    title: base_name,
    sub_title: root[0].short_title,
    description: root[0].description,
    icon: root[0].icon,
    category: [
      "profile",
    ]
  },
  {
    url: "/about/profile.html",
    slug: "profile",
    title: "Profile",
    sub_title: "Profile",
    description: "My profile",
    icon: `<i class="fa-sharp fa-solid fa-user fa-xl"></i>`,
    category: [
      "information"
    ]
  },
  {
    url: "/about/skills.html",
    slug: "skills",
    title: "Skills Held",
    sub_title: "Skills",
    description: "My skills",
    icon: `<i class="fa-sharp fa-solid fa-code fa-xl"></i>`,
    category: [
      "skills"
    ]
  },
  {
    url: "/about/software.html",
    slug: "software",
    title: "Software Skills",
    sub_title: "Software",
    description: "Software used",
    icon: `<i class="fa-sharp fa-solid fa-laptop-code fa-xl"></i>`,
    category: [
      "javascript",
      "html",
    ]
  }
]; 

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

let url = location.href.replace(/\/$/, "");
      const hashSplit = url.split("/");
      const hash_array = _.reverse(hashSplit);
      console.log("Hash Array: ", hash_array[0]);



  function about_navigation() {
    $(document).ready(() => {

      const get_nav_tabs = document.getElementById("tabs-nav");
      const do_page_title = document.getElementById("page-title");
      const do_sub_page_title = document.getElementById("sub-page-title");
      const do_comp_title = document.getElementById("script-title");
      const do_page_description = document.getElementById("page-description");
      // const do_frontpage = document.getElementById("about-frontpage");
      const do_categories = document.getElementById("categories");
     
      function titleCase(string) {
        var sentence = string.toLowerCase().split(" ");
        for(var i = 0; i< sentence.length; i++){
          sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
        }
        sentence.join(" ");
        return sentence;
      }


      const current_slug = [];
      const current_url = [];
      const current_title = [];
      const current_sub_title = [];
      const current_description = [];
      const current_icon = [];
      const current_category = [];

      for (let j = 0; j < tabItems.length; j++) {
        const element = tabItems[j];
        console.log(
          "Project Navigation: ", element.url, "\n",
          "Project Slug: ", element.slug, "\n",
          "Project Title: ", element.title, "\n",
          "Project Description: ", element.description, "\n"
        );

        if ( hash_array[0] == root[0].slug ) {
          do_page_title.innerHTML = root[0].title;
          document.getElementById("page-description").innerHTML = tabItems[0].description;    
        } 

        if (element.slug !== root[0].slug) {
          get_nav_tabs.innerHTML += `
            <li class="nav-item ms-0 bg-light mx-1 mb-1">
              <a href="#`+ element.slug +`" data-bs-toggle="list" class="nav-link text-center pb-2" id="`+ element.slug +`-link" onClick={about_navigation} title="`+ element.title +`">
              <span class="pb-2" id="tab-text">`+ element.sub_title +`</span>
              </a>
            </li>
          `          
        } else {
          const root_id = root[0].root;
          let edit_root_st = _.replace(root_id, "/", "");
          let edit_root_ed = _.replace(edit_root_st, "/", "");
          get_nav_tabs.innerHTML += `
            <li class="nav-item ms-0 bg-light mx-1 mb-1">
              <a href="#`+ root[0].slug +`" data-bs-toggle="list" class="nav-link text-center pb-2" id="`+ edit_root_ed +`-link" onClick={about_navigation} title="`+ element.title +`">
              <span class="pb-2" id="tab-text">`+ element.sub_title +`</span>
              </a>
            </li>
          `      
        }


        // if (tabItems[j] !== tabItems[0]) {
        //   do_frontpage.innerHTML += `
        //     <div class="col p-0">
        //       <div class="project-gradient card p-4 rounded-0">
        //         <div class="card-body p-2 text-center">
        //           <div class="d-flex justify-content-center" style="display:inline;color:#fff;padding-top: 20px;padding-bottom:20px;">`+ element.icon +`</div>
        //           <div id="`+ element.slug +`-content-preview" class="text-light fs-4 lh-sm" style="-webkit-text-stroke:0.2px black;text-wrap: nowrap;">
        //             `+ element.sub_title +`
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //   `;
        // }

        document.getElementById("tab-text").innerHTML = root[0].short_title; 
        current_slug.push(element.slug);
        current_url.push(element.url);
        current_title.push(element.title);
        current_sub_title.push(element.sub_title);
        current_description.push(element.description);
        current_icon.push(element.icon);
        current_category.push(element.category);
      }

      let result_slugs = current_slug;
      let result_urls = current_url;
      let result_titles = current_title;
      let result_sub_titles = current_sub_title;
      let result_descriptions = current_description;
      let result_icons = current_icon;
      let result_categories = current_category;


      console.log(result_slugs);
      console.log(result_urls);
      console.log(result_titles);
      console.log(result_sub_titles);
      console.log(result_descriptions);
      console.log(result_icons);
      console.log(result_categories);

      const clean_hash_html = hash_array[0].replace(".html", "");
      console.log(clean_hash_html);

      for (let i = 0; i < result_slugs.length; i++) {
        if ( clean_hash_html === result_slugs[i] ){
          do_page_title.innerHTML = base_name + ": ";
          if (clean_hash_html !== root[0].slug) {
            do_sub_page_title.innerHTML = result_titles[i];
          }
          

          // do_comp_title.innerHTML = result_titles[i];
          do_page_description.innerHTML = result_descriptions[i];
          // result_categories[i].forEach(element => {
          //   do_categories.innerHTML += `<button type="button" class="badge text-bg-primary" id="`+element+`-category-field">`+ element +`</button>`
          // });
          document.title = base_name + " | " + result_titles[i]; 
        } else if( clean_hash_html === tabItems[0].slug ){
          do_page_title.innerHTML = base_name;
          do_page_description.innerHTML = root[0].description;
        } else if( clean_hash_html === "about" ){
          do_page_title.innerHTML = base_name;
          do_page_description.innerHTML = root[0].description;
        }
      }

      $('a[data-bs-toggle="list"]').on("click", function() {
        
        

        let newUrl;
        let hash = $(this).attr("href");
        const hashSplit = hash.split("#");

        let hashArray = [hash];
        if(hash == "#") {
          newUrl = url.split("/")[0] + hashSplit[1] + ".html";
        } else {
          newUrl = url.split("/")[0] + hashSplit[1] + ".html";
        }
        newUrl += "";
        const stateObj = url.split("/")[0] + root[0].root;
        history.replaceState(stateObj, null, newUrl);

        for (let i = 0; i < result_slugs.length; i++) {
          if ( hashSplit[1] === result_slugs[i] ){
            do_page_title.innerHTML = base_name + ": ";
            do_sub_page_title.innerHTML = result_titles[i];
            // do_comp_title.innerHTML = result_titles[i];
            do_page_description.innerHTML = result_descriptions[i];
            // result_categories[i].forEach(element => {
            //   do_categories.innerHTML += `<button type="button" class="badge text-bg-primary" id="`+element+`-category-field">`+ element +`</button>`
            // });
            document.title = base_name + " | " + result_titles[i]; 
          } else if( hashSplit[1] === tabItems[0].slug ){
            do_page_title.innerHTML = base_name;
            do_sub_page_title.innerHTML = ""
            do_page_description.innerHTML = root[0].description;
            do_comp_title.innerHTML = "";
          }
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

  function doIndex() {
    return document.getElementById("index").innerHTML = `
      <div className="text-center">
        <div id="index_component" className="p-0"></div>
      </div>`;
  }

  function doProfile() {
    return document.getElementById("profile").innerHTML = `
      <div className="text-center">
        <div id="profile_component" className="p-0"></div>
      </div>`;
  }

  function doSkills() {
    return document.getElementById("skills").innerHTML = `
      <div className="text-center">
        <div id="skills_component" className="p-0"></div>
      </div>`;
  }

  function doSoftware() {
    return document.getElementById("software").innerHTML = `
      <div className="text-center">
        <div id="software_component" className="p-0"></div>
      </div>`;
  }
  

  function aboutNav() {
    const element = (
      <div>

        <div id="about-header" className="p-0 mt-5 text-start">
          <h1>
            <span id="page-title"></span>
            <span id="sub-page-title"></span>
          </h1>
        </div>

<ul className="nav nav-pills" id="tabs-nav"></ul>

        <p id="page-description" className="fs-3 lead"></p>
        
        {/* <ul id="nav-tabs"></ul> */}
        
        

        {/* <h6 id="script-title" className="fs-4 ps-0"></h6> */}

        {/* <div id="categories" className="pb-3"></div> */}

        <div className="card p-0 m-0 bg-body border-0">
          <div className="card-body p-0">
            <div className="tab-content project-content p-0" id="tab-content">

              {/* <div className="tab-pane fade show active" id="index" role="tabpanel" aria-labelledby="about-tab">
                <div className="container p-0">
                  <div id="about-frontpage" className="row row-cols-2 row-cols-lg-3 g-0 g-lg-0"></div>
                </div>
              </div> */}

              <div className="tab-pane fade" id="index" role="tabpanel" aria-labelledby="about-tab"></div> 
              <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"></div>
              <div className="tab-pane fade" id="skills" role="tabpanel" aria-labelledby="skills-tab"></div>
              <div className="tab-pane fade" id="software" role="tabpanel" aria-labelledby="software-tab"></div>

            </div>
          </div>
        </div>

      </div>

    );
    ReactDOM.render(
      element,
      document.getElementById('about_nav')
    );
  }
  
aboutNav();
doIndex();
doProfile();
doSkills();
doSoftware();
about_navigation();
bg_gradients();