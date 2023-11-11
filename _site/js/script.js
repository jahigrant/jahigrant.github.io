const header_menu_nav = [
    {
    id: "home",
      url: "/index.html",
      slug: "home",
      title: "Welcome to site: Jahi Grant",
      sub_title: "Home",
      description: "Page description",
      icon: `<i class="fa-solid fa-house fa-xl"></i>`,
      category: [
        "javascript",
      ]
    },
    {
        id: "about",
        icon: `<i class="fa-sharp fa-regular fa-address-card fa-xl"></i>`,
        sub_title: "About",
    },
    {
        id: "javascript",
        icon: `<i class="fa-brands fa-square-js fa-xl"></i>`,
        sub_title: "JS",
    },
    {
        id: "python",
        icon: `<i class="fa-brands fa-python fa-xl"></i>`,
        sub_title: "Python",
    },
    {
        id: "contact",
        icon: `<i class="fa-sharp fa-regular fa-address-book fa-xl"></i>`,
        sub_title: "Contact",
    },
    {
        id: "blog",
        icon: `<i class="fa-sharp fa-solid fa-blog fa-2xl"></i>`,
        sub_title: "Blog",
    }

]


for (let j = 0; j < header_menu_nav.length; j++) {

    const element = header_menu_nav[j];

    if (document.querySelector("#"+element.id+"-nav-link")) {
        const menu_icon_format = element.sub_title;
        const each_nav_link = document.querySelector("#"+element.id+"-nav-link");
        each_nav_link.innerHTML = menu_icon_format;
        console.log(element); 
    }
    

}