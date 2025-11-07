// This script handles the theme toggle functionality and updates the logo and navbar styles accordingly.
// It uses Bootstrap's data attributes to manage the theme and localStorage to save the user's preference.
// It also updates the logo and navbar styles based on the current theme.
// This script is designed to work with Bootstrap 5 and assumes that the HTML structure follows the Bootstrap guidelines.
// The script is executed when the DOM is fully loaded to ensure that all elements are available for manipulation.
document.addEventListener("DOMContentLoaded", function () {
    // Ensure the DOM is fully loaded before executing the script
    // Check if the user has a saved theme preference in localStorage  
    const getTheme = localStorage.getItem("theme");
    console.log(
        "Saved theme from localStorage:", getTheme
    );
    
    const themeToggleButton = document.getElementById("theme-toggle");
    const htmlElement = document.documentElement;
    const logo = document.getElementById("header-logo");
    const logo_text = document.getElementById("header-logo-text");
    const offcanvas_logo_text = document.getElementById("offcanvas-logo-text");
    const navbar = document.getElementById("header-navbar");
    const walletIcon = document.getElementById("wallet-icon-navbar");
    const menuIcon = document.getElementById("menu-icon-navbar");
    const loginIcon = document.getElementById("login-icon-navbar");
    const logoutIcon = document.getElementById("logout-icon-navbar");
    const a_links = document.querySelectorAll(".nav-link");
    const page_links = document.querySelectorAll(".page-link");
    const btn_links = document.querySelectorAll(".btn-dark");
    const header_links = document.querySelectorAll(".arrow-right");

    const footer_links = document.querySelectorAll("#footer-nav-link-3, #footer-nav-link-2, #footer-nav-link-1, #footer-nav-link-4");


    // Function to update the logo based on the theme
    function updateThemeItems() {
        const currentTheme = htmlElement.getAttribute("data-bs-theme");
        if (currentTheme === "dark") {
            if (logo) {
                logo.src = "/static/img/logo_brand_light.png"; // Dark logo for dark theme 
                logo_text.classList.remove("text-dark");
                logo_text.classList.add("text-light");   
                offcanvas_logo_text.classList.remove("text-dark");
                offcanvas_logo_text.classList.add("text-light");
                footer_links.forEach(link => {
                    link.classList.remove("text-dark");
                    link.classList.add("text-light");
                });
            }
            
if (themeToggleButton) {
    themeToggleButton.innerHTML = `<i class="bi bi-brightness-high text-light"></i>`; // Change theme select icon for dark theme
}
  if (walletIcon) {
    walletIcon.innerHTML = `<i class="bi bi-wallet2 text-light"></i>`; // Change wallet icon for dark theme
  }          
if (menuIcon) {
     menuIcon.innerHTML = `<i class="bi bi-list text-light"></i>`; // Change menu icon for dark theme
}       
            
            if (loginIcon) {
                loginIcon.innerHTML = `<i class="bi bi-lock-fill text-light"></i>`; // Change login icon for dark theme
            }
            if (logoutIcon) {
                logoutIcon.innerHTML = `<i class="bi bi-unlock-fill text-light"></i>`; // Change logout icon for dark theme
            }
            if (navbar) {
                navbar.classList.remove("navbar-light", "bg-white");
                navbar.classList.add("navbar-dark", "bg-dark");
            }
            

            a_links.forEach(link => {
                link.classList.remove("text-dark");
                link.classList.add("text-light");
            });
            page_links.forEach(link => {
                link.classList.remove("text-dark");
                link.classList.add("text-light");
            });
            btn_links.forEach(link => {
                link.classList.remove("btn-dark");
                link.classList.add("btn-light");
            });

            header_links.forEach(link => {
                link.src = "/static/img/arrow_right_light.png"; // Light right arrow for dark theme
            });

    
            

        } else {

            if (logo) {
                logo.src = "/static/img/logo_brand_dark.png"; // Dark logo for light theme    
                logo_text.classList.remove("text-light");
                logo_text.classList.add("text-dark");
                offcanvas_logo_text.classList.remove("text-light");
                offcanvas_logo_text.classList.add("text-dark");
                footer_links.forEach(link => {
                    link.classList.remove("text-light");
                    link.classList.add("text-dark");
                });
            }
            
if (themeToggleButton) {
            themeToggleButton.innerHTML = `<i class="bi bi-moon-stars text-dark"></i>`; // Change theme select icon for light theme

}
if (walletIcon) {
    walletIcon.innerHTML = `<i class="bi bi-wallet2 text-dark"></i>`; // Change wallet icon for light theme
}
         if (menuIcon) {
            menuIcon.innerHTML = `<i class="bi bi-list text-dark"></i>`; // Change menu icon for light theme
         }   
            
            if (loginIcon) {
                loginIcon.innerHTML = `<i class="bi bi-lock-fill text-dark"></i>`; // Change login icon for light theme
            }
            if (logoutIcon) {
                logoutIcon.innerHTML = `<i class="bi bi-unlock-fill text-dark"></i>`; // Change logout icon for light theme
            }

if (navbar) {
            navbar.classList.remove("navbar-dark", "bg-dark");
            navbar.classList.add("navbar-light", "bg-white");            
}
            a_links.forEach(link => {
                link.classList.remove("text-light");
                link.classList.add("text-dark");
            });
            page_links.forEach(link => {
                link.classList.remove("text-light");
                link.classList.add("text-dark");
            });
            btn_links.forEach(link => {
                link.classList.remove("btn-light");
                link.classList.add("btn-dark");
            });
            header_links.forEach(link => {
                link.src = "/static/img/arrow_right_dark.png"; // Dark right arrow for light theme
            });


 

        }
    }

    // Load the saved theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        htmlElement.setAttribute("data-bs-theme", savedTheme);
    }

    // Initial logo update
    updateThemeItems();

    // Toggle theme on button click
    if (themeToggleButton) {
    themeToggleButton.addEventListener("click", function () {
        const currentTheme = htmlElement.getAttribute("data-bs-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";

        // Update the theme
        htmlElement.setAttribute("data-bs-theme", newTheme);

        // Save the user's preference in localStorage
        localStorage.setItem("theme", newTheme);
        updateThemeItems();
    });        
    }



var progress = document.getElementById('loader-progress');
  progress.style.width = '100%';
  setTimeout(function() {
    document.getElementById('loader-bar').style.display = 'none';
  }, 400);


}); // End of script
     


