const page_data = [
    {
        url: "/about/profile.html",
        slug: "profile",
        title: "Profile",
        sub_title: "Profile",
        profile_name: "jahi grant",
        work_skill: ["backend js development", "frontend js development", "ui", "ux", "visual design", "audio production"],
        author: "Jahi Grant",
        avatar: "./_includes/simages/me_cartoon.svg",
        icon: `<i class="fa-sharp fa-solid fa-user fa-xl"></i>`,
        contact_details: [
            {
                email_address: "jahi@duck.com",
                email_icon: `<i class="fa-sharp fa-solid fa-at fa-xl"></i>`,
                location: [
                    {
                        town: "greenwich",
                        city: "london",
                        country: "uk"
                    }
                ],
                socials: [
                    {
                        name: "github",
                        username: "jahigrant",
                        link: "https://github.com/jahigrant",
                        icon: `<i class="fa-brands fa-github fa-xl"></i>`
                    },
                    {
                        name: "x",
                        username: "jahigrant",
                        link: "https://twitter.com/jahigrant",
                        icon: `<i class="fa-brands fa-square-x-twitter fa-xl"></i>`
                    },
                    {
                        name: "soundcloud",
                        username: "jahigrant",
                        link: "https://soundcloud.com/jahigrant",
                        icon: `<i class="fa-brands fa-soundcloud fa-xl"></i>`
                    }
                    
                ] 
            }
        ],
        skills: [
            {
                name: "html",
                level: 90,
                url: "https://html.spec.whatwg.org/multipage/",
                img_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            },
            {            
                name: "JavaScript",
                level: 80,
                url: "https://www.ecma-international.org/publications-and-standards/standards/ecma-262/",
                img_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            },
            {
                name: "Web3",
                level: 40,
                url: "https://web3.foundation/",
                img_url: "logos/web3.png",
            },
            {
                name: "Solidity",
                level: 30,
                url: "https://docs.soliditylang.org/en/v0.8.15/",
                img_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg"
            },
            {
                name: "TypeScript",
                level: 20,
                url: "https://www.typescriptlang.org/",
                img_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            },
            {
                name: "Deno",
                level: 30,
                url: "https://deno.land/",
                img_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/denojs/denojs-original.svg"
            },
            {
                name: "Node.js",
                level: 30,
                url: "https://nodejs.org/en/",
                img_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            },
            {
                name: "Markdown",
                level: 50,
                url: "https://daringfireball.net/projects/markdown/",
                img_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg"
            },
            {
                name: "Python",
                level: 30,
                url: "https://www.python.org/",
                img_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            },
            {
                name: "PHP",
                level: 50,
                url: "https://www.php.net/",
                img_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
            },
            {
                name: "Wordpress",
                level: 70,
                url: "https://en-gb.wordpress.org/",
                img_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg"
            },
            {
                name: "CSS",
                level: 70,
                url: "https://www.w3.org/TR/CSS/",
                img_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            },
            {
                name: "Jekyll",
                level: 40,
                url: "https://jekyllrb.com/",
                img_url: "https://www.svgrepo.com/show/353927/jekyll.svg"
            },
            {
                name: "Babylon.js",
                level: 40,
                url: "https://www.babylonjs.com/",
                img_url: "https://www.wittystore.com/image/cache/data/brands_logos/logo-babylon-js-650x650.jpg"
            }
        ],
        software: [
            {    
                name: "VS Code",
                level: 40,
                url: "https://code.visualstudio.com/",
                img_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
            },
            {
                name: "Presonus S1",
                level: 60,
                url: "https://www.presonus.com/products/Studio-One",
                img_url: "/img/S1.png"
            },
            {
                name: "Photoshop",
                level: 70,
                url: "https://www.adobe.com/uk/products/photoshop.html",
                img_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"
            },
            {
                name: "Premiere Pro",
                level: 50,
                url: "https://www.adobe.com/uk/products/premiere.html",
                img_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-plain.svg"
            },
            {
                name: "Illustrator",
                level: 60,
                url: "https://www.adobe.com/uk/products/illustrator.html",
                img_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg"
            },
            {
                name: "Animate",
                level: 60,
                url: "https://www.adobe.com/uk/products/animate.html",
                img_url: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Adobe_Animate_CC_icon.svg"
            },
            {
                name: "Audition",
                level: 50,
                url: "https://www.adobe.com/uk/products/audition.html",
                img_url: "https://upload.wikimedia.org/wikipedia/commons/1/19/Adobe_Audition_CC_icon.svg"
            },
            {
                name: "InDesign",
                level: 60,
                url: "https://www.adobe.com/uk/products/indesign.html",
                img_url: "https://seeklogo.com/images/A/adobe-indesign-cs6-logo-21C1156C98-seeklogo.com.png"
            },
            {
                name: "Word",
                level: 80,
                url: "https://www.microsoft.com/en-gb/microsoft-365/word",
                img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Microsoft_Office_Word_%282019%E2%80%93present%29.svg/2203px-Microsoft_Office_Word_%282019%E2%80%93present%29.svg.png"
            },
            {
                name: "Excel",
                level: 60,
                url: "https://www.microsoft.com/en-gb/microsoft-365/excel",
                img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg/1101px-Microsoft_Office_Excel_%282019%E2%80%93present%29.svg.png"
            },
            {
                name: "Publisher",
                level: 80,
                url: "https://www.microsoft.com/en-gb/microsoft-365/publisher",
                img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Microsoft_Office_Publisher_%282019-present%29.svg/1142px-Microsoft_Office_Publisher_%282019-present%29.svg.png"
            },
            {
                name: "PowerPoint",
                level: 70,
                url: "https://www.microsoft.com/en-gb/microsoft-365/powerpoint",
                img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg/800px-Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg.png"
            },
            {
                name: "Designer",
                level: 50,
                url: "https://affinity.serif.com/en-gb/designer/",
                img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Affinity_Designer_2-logo.svg/1200px-Affinity_Designer_2-logo.svg.png"
            },
            {
                name: "Photo",
                level: 60,
                url: "https://affinity.serif.com/en-gb/photo/",
                img_url: "https://static.photoprice.ca/product_images/07162.medium.gif"
            },
            {
                name: "Publisher",
                level: 45,
                url: "https://affinity.serif.com/en-gb/publisher/",
                img_url: "https://dlpure.com/wp-content/uploads/2020/05/Serif-Affinity-Publisher_icon.png"
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
        if (word.length <= 2) {
            // If so, add "PAN" to the word
            return `<span class="text-uppercase">` + word + "</span>";
        } else {
            // Otherwise, return the original word
            return word;
        }
    });

    // Join the processed words back into a string
    const processedString = processedWords.join(' ');

    return processedString;
}



function loadPage() {
    // const get_page_description_01 = document.getElementById("index-description-01");
    // const get_page_description_02 = document.getElementById("index-description-02");

    // get_page_description_01.innerHTML = page_data[0].description_lead;
    // get_page_description_02.innerHTML = page_data[0].description_text;

console.log("PAGE DATA: ", page_data);



    const get_avatar = document.getElementById("header-brand-image");
    const avatar = document.getElementById("avatar");
    const author_name = document.getElementById("author-name");

    const work_skills = document.getElementById("work-skills");
    const location = document.getElementById("location");

    const email_address = document.getElementById("email-address");
    const social_items = document.getElementById("socials");

    const contact_button = document.getElementById("contact-button");

    avatar.innerHTML = get_avatar.innerHTML;
    avatar.title = page_data[0].author;
    author_name.innerHTML = page_data[0].author;

    page_data[0].work_skill.forEach(element => {
        const processString = uppercaseString(element);
        work_skills.innerHTML += `
        <span class="text-capitalize m-1 lh-1" style="">
            `+ processString +` 
        </span>`;  
    });
    
    page_data[0].contact_details[0].location.forEach(element => {
        location.innerHTML = `
        <span class="text-capitalize fs-5">
            `+element.town+`, 
            `+element.city+`, 
            `+uppercaseString(element.country)+`
        </span>`;
    });

    email_address.innerHTML = page_data[0].contact_details[0].email_address;
    email_address.href = "mailto:"+page_data[0].contact_details[0].email_address;
    

    page_data[0].contact_details[0].socials.forEach(element => {
        social_items.innerHTML += `
        <div className="row" style="display:flex">
            <div className="col-sm-3" style="width:30%;">
                <div className="mb-0 fs-4" style="font-size: 2.5em;">
                    `+ element.icon +`
                </div>
            </div>
            <div className="col-sm-9 text-secondary">
                <a className="fs-4" href="`+ element.link +`" target="_blank" style="font-size:calc(1.275rem + .3vw)!important;">@`+ element.username +`</a>
            </div>
        </div>
        <hr style="border-color:#d4d4d4">`;
    });


    contact_button.href = "../contact.html"

}

function profilePage() {
    const element = (
        <div>


<div className="container p-0">
    <div className="main-body">
        <nav className="main-breadcrumb" aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item fs-4"><a href="index.html" >About</a></li>
                <li className="breadcrumb-item active fs-4" aria-current="page">Profile</li>
            </ol>
        </nav>
        <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
                <div className="card rounded-0 shadow" style={{borderColor:"#d4d4d4"}}>
                    <div className="card-body">
                        <div className="d-flex flex-column align-items-center text-center">
                            <div id="avatar" className="rounded-circle" style={{width:"150px", overflow:"hidden"}} title=""></div>
                            <div className="mt-3">
                                <h4 id="author-name" className="fs-4"></h4>
                                <div id="work-skills" className="text-secondary mb-1 align-items-center text-center"></div>
                                <div className="text-muted font-size-sm pb-2"><address id="location"></address></div>
                                <a id="contact-button" href="" className="btn btn-secondary fs-4 fw-lighter">Contact Me</a>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="col-md-8">
                <div className="card rounded-0 mb-3 shadow" style={{borderColor:"#d4d4d4"}}>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-3" style={{width:"30%"}}>
                                <div id="email-icon" className="mb-0 fs-4">
                                    <i className="fa-sharp fa-solid fa-envelope-open-text fa-xl"></i>
                                </div>
                            </div>
                            <div className="col-sm-9 text-secondary fs-4 ps-2" style={{width:"70%"}}>
                                <a id="email-address" href=""></a>
                            </div>
                        </div>
                        <hr style={{borderColor:"#d4d4d4", opacity:"1"}}/>
                        <div id="socials">
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    </div>
</div>



        </div>
    );

    ReactDOM.render(
        element,
        document.getElementById('profile_component')
    );
}

profilePage();
loadPage();








  




