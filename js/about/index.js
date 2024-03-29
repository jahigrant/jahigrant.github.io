const page_data = [
    {
        url: "/about/index.html",
        slug: "index",
        title: "About",
        sub_title: "About",
        description_lead: "A resident of London, UK. Has operated in various sectors over the last two decades with a background in the creative arts including graphic design, animation, music production, web design & development, managerial and public facing roles.",
        description_text: "The ability to be flexible in the face of change to schedule or task. Ablity to transform the negative into positive, this in addition to being a concise communicator. An advocate of the open initiative and social mobility afforded by the invention and propagation of the internet and derivative technologies.",
        author:" Jahi Grant",
        avatar: "",
        icon: `<i class="fa-sharp fa-solid fa-user fa-xl"></i>`,
        category: [
            "information"
        ]
    },
]

function loadPage() {

    const get_avatar_img = document.getElementById("header-brand-image");
    const avatar_in_page = document.getElementById("avatar-in-page");
    const get_page_description_01 = document.getElementById("index-description-01");
    const get_page_description_02 = document.getElementById("index-description-02");

    avatar_in_page.innerHTML = get_avatar_img.innerHTML;
    avatar_in_page.title = page_data[0].author;

    get_page_description_01.innerHTML = page_data[0].description_lead;
    get_page_description_02.innerHTML = page_data[0].description_text;
}

function indexPage() {
    const element = (
        <div>
            <div>
                <div id="avatar-in-page" className="rounded-circle float-end" style={{width:"200px", overflow:"hidden"}} title=""></div>
                <p id="index-description-01" className="fs-4"></p>
                <p id="index-description-02" className="fs-4"></p>
            </div>
        </div>
    );

    ReactDOM.render(
        element,
        document.getElementById('index_component')
    );
}

indexPage();
loadPage();








  




