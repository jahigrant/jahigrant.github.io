const skills_data = [
    {
        url: "/about/skills.html",
        slug: "skills",
        title: "Skills",
        sub_title: "Skills",
        skills_name: "jahi grant",
        work_skill: ["backend js development", "frontend js development", "ui", "ux", "visual design", "audio production"],
        author: "Jahi Grant",
        avatar: "./_includes/simages/me_cartoon.svg",
        icon: `<i class="fa-sharp fa-solid fa-user fa-xl"></i>`,
        skills: [
            {
                name: "html",
                level: 90,
                url: "https://html.spec.whatwg.org/multipage/",
                img_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            },
            {            
                name: "ECMAScript",
                level: 80,
                url: "https://www.ecma-international.org/publications-and-standards/standards/ecma-262/",
                img_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            },
            {
                name: "web3",
                level: 40,
                url: "https://web3.foundation/",
                img_url: "logos/web3.png",
            },
            {
                name: "solidity",
                level: 30,
                url: "https://docs.soliditylang.org/en/v0.8.15/",
                img_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg"
            },
            {
                name: "typeScript",
                level: 20,
                url: "https://www.typescriptlang.org/",
                img_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            },
            {
                name: "deno",
                level: 30,
                url: "https://deno.land/",
                img_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/denojs/denojs-original.svg"
            },
            {
                name: "node js",
                level: 30,
                url: "https://nodejs.org/en/",
                img_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            },
            {
                name: "markdown",
                level: 50,
                url: "https://daringfireball.net/projects/markdown/",
                img_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg"
            },
            {
                name: "python",
                level: 30,
                url: "https://www.python.org/",
                img_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            },
            {
                name: "php",
                level: 50,
                url: "https://www.php.net/",
                img_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
            },
            {
                name: "wordpress",
                level: 70,
                url: "https://en-gb.wordpress.org/",
                img_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg"
            },
            {
                name: "css",
                level: 70,
                url: "https://www.w3.org/TR/CSS/",
                img_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            },
            {
                name: "jekyll",
                level: 40,
                url: "https://jekyllrb.com/",
                img_url: "https://www.svgrepo.com/show/353927/jekyll.svg"
            },
            {
                name: "babylon js",
                level: 40,
                url: "https://www.babylonjs.com/",
                img_url: "https://www.wittystore.com/image/cache/data/brands_logos/logo-babylon-js-650x650.jpg"
            },
            {
                name: "p5 js",
                level: 40,
                url: "https://p5js.org/",
                img_url: "https://blindedcyclops.neocities.org/p5js-icons/p5-sq-white-background.png"
            }
        ]
    },
]

function uppercaseString(inputString) {
    // Count the number of characters in the input string
    const charCount = inputString.length;

    // Split the string into an array of words
    const words = inputString.split(' ');

    // Process each word
    const processedWords = words.map(word => {
        // Check if the character count of the word is 2 or less
        if (word.length <= 2 || word == 'html' || word == 'css' || word == 'php' || word == 'js') {
            // If so, add "PAN" to the word
            return `<span class="text-uppercase">` + word + "</span>";
        } else {
            // Otherwise, return the original word
            return `<span class="text-capitalize">` + word + "</span>";
        }
    });

    // Join the processed words back into a string
    const processedString = processedWords.join(' ');

    return processedString;
}



function loadSkills() {
    // const get_page_description_01 = document.getElementById("index-description-01");
    // const get_page_description_02 = document.getElementById("index-description-02");

    // get_page_description_01.innerHTML = skills_data[0].description_lead;
    // get_page_description_02.innerHTML = skills_data[0].description_text;

console.log("SKILLS DATA: ", skills_data[0], skills_data[0].length);



    const progress_fields = document.getElementById("progress-fields");

    for (let i = 0; i < skills_data[0].skills.length; i++) {
        const element = skills_data[0].skills[i];

        const skill_name_str = _.toString(uppercaseString(element.name));

        progress_fields.innerHTML += `
        <div class="px-0 mx-0 col-12 col-sm-3">
            <div class="pe-2 me-2">
                <span class="fs-5 fw-lighter text-nowrap">` + 
                    uppercaseString(element.name) + ` <a href="` + element.url + `" target="_blank" title="`+ element.name +`"><i class="fa-sharp fa-solid fa-link"></i></a>
                </span>
                <div class="progress mb-3" style="height:5px">
                    <div class="progress-bar bg-primary" role="progressbar" style="width:` + element.level + `%" aria-valuenow="` + element.level + `" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </div>
        `;
        
    }

    // skills_data[0].forEach(element => {
    //     progress_fields.innerHTML += `
    //     <small>Web Design</small>
    //     <div className="progress mb-3" style={{height: "5px"}}>
    //         <div className="progress-bar bg-primary" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
    //     </div>

    //     <div className="row" style="display:flex">
    //         <div className="col-sm-3" style="width:30%;">
    //             <div className="mb-0 fs-4" style="font-size: 2.5em;">
    //                 `+ element.icon +`
    //             </div>
    //         </div>
    //         <div className="col-sm-9 text-secondary">
    //             <a className="fs-4" href="`+ element.link +`" target="_blank" style="font-size:calc(1.275rem + .3vw)!important;">@`+ element.username +`</a>
    //         </div>
    //     </div>
    //     <hr>`;
    // });


    // contact_button.href = "../contact.html"

}

function skillsPage() {
    const element = (
        <div>


<div className="container p-0">
    <div className="main-body">
        <nav className="main-breadcrumb" aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item fs-4"><a href="index.html" >About</a></li>
                <li className="breadcrumb-item active fs-4" aria-current="page">Skills</li>
            </ol>
        </nav>
        <div className="row">





                                
<div id="progress-fields" className="d-flex flex-wrap">

</div>



        </div>
    </div>
</div>



        </div>
    );

    ReactDOM.render(
        element,
        document.getElementById('skills_component')
    );
}

skillsPage();
loadSkills();








  




