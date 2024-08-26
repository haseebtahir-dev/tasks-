const hamburger_icon = document.getElementById("hamburger")
const close_icon = document.getElementById("close")
const list = document.querySelector(".mobile-navbar-ul")
const mobile_navbar = document.querySelector(".mobile-navbar")
let flag = true

document.querySelector(".mobile-btn").addEventListener('click',function(e){
    e.preventDefault()
    if(flag == true){
        list.style.display = "block"
        hamburger_icon.style.display = "none"
        close_icon.style.display = "block"
        mobile_navbar.style.height = "auto"
        flag = false
    }
    else{
        list.style.display = "none"
        hamburger_icon.style.display = "block"
        close_icon.style.display = "none"
        mobile_navbar.style.height = "100px"
        flag = true
    }
})
document.addEventListener('scroll', function() {
   
    const listDisplayStyle = window.getComputedStyle(list).display;

    if (listDisplayStyle === "block") {
        list.style.display = "none";
        mobile_navbar.style.height = "100px";
        hamburger_icon.style.display = "block";
        close_icon.style.display = "none";
        flag = true;
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const sidebarButton = document.getElementById("sidebar-toggle");
    const sidebar = document.getElementById("sidebar");
    const background = document.querySelector(".background");
    const side = document.querySelector(".sidebar-button")
    const content = document.querySelector(".content")
    const hide_icon = document.getElementById("hide")
    const unhide_icon = document.getElementById("unhide")
    const home_container = document.querySelector(".home")
    const about_container = document.querySelector(".container")
    const service_container = document.querySelector(".service-container")
    const skills_container = document.querySelector(".skills-container")
    const portfolio_container = document.querySelector(".portfolio-container")
    const testmonials_container = document.querySelector(".testmonials-container")
    const news_container = document.querySelector(".news-container")
    const contact_container = document.querySelector(".contact-container");
    const about_content = document.querySelector(".about-info-content")
    const partner_content = document.querySelector(".partner-wrapper ")
    const content_title =  document.querySelector(".content-title ")


    sidebar.style.transform = "translateX(0)";
    background.style.transform = "translateX(280px)";
    side.style.right = "78%"; 
    content.style.left = "24%"
    hide_icon.style.display = "block"
   
    sidebarButton.addEventListener("click", function() {
        sidebar.classList.toggle("sidebar-hidden");
        const isSidebarHidden = sidebar.classList.contains("sidebar-hidden");
        if (isSidebarHidden) {
            sidebar.style.transform = "translateX(-280px)";
            background.style.transform = "translateX(0)";
            side.style.right = "98%"; 
            content.style.left = "33%";
            hide_icon.style.display = "none";
            unhide_icon.style.display = "block";
            home_container.style.maxWidth = "100%";
            about_container.style.maxWidth = "1050px";
            about_content.style.left = "17%"
            service_container.style.maxWidth = "1050px"; 
            skills_container.style.maxWidth = "1050px"; 
            portfolio_container.style.maxWidth = "1050px";
            testmonials_container.style.maxWidth = "1050px"
            news_container.style.maxWidth = "1050px"
            contact_container.style.maxWidth = "1050px"
            partner_content.style.left = "28%"
            content_title.style.left = "0"
            

        } else {
            sidebar.style.transform = "translateX(0)";
            background.style.transform = "translateX(280px)";
            side.style.right = "78%"; 
            content.style.left = "24%";
            hide_icon.style.display = "block";
            unhide_icon.style.display = "none" ;
            home_container.style.maxWidth = "983px";
            about_container.style.maxWidth = "940px";
            about_content.style.left = "25%"
            service_container.style.maxWidth = "940px"; 
            skills_container.style.maxWidth = "940px"; 
            portfolio_container.style.maxWidth = "940px";
            testmonials_container.style.maxWidth = "940px"
            news_container.style.maxWidth = "940px"
            contact_container.style.maxWidth = "940px";
            partner_content.style.left = "44%"
            content_title.style.left = "18%"
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const questionCount = 5;

    for (let i = 1; i <= questionCount; i++) {
        const plusBtn = document.getElementById('plus' + i);
        const minusBtn = document.getElementById('minus' + i);
        const answerDiv = document.getElementById('answer' + i);

        plusBtn.addEventListener('click', function() {
            answerDiv.style.display = 'block';
            plusBtn.style.display = 'none';
            minusBtn.style.display = 'inline-block';
        });

        minusBtn.addEventListener('click', function() {
            answerDiv.style.display = 'none';
            plusBtn.style.display = 'inline-block';
            minusBtn.style.display = 'none';
        });
    }
});


document.getElementById("downloadButton").addEventListener("click", function() {
    var downloadLink = document.createElement("a");
    downloadLink.href = "images/cv template.jpg";
    downloadLink.download = "cv_template.jpg"; 
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
});

document.addEventListener("DOMContentLoaded", function() {
    // Disable automatic scroll restoration
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    const links = document.querySelectorAll('.nav-link');

    function setActiveLink() {
        const scrollPosition = window.scrollY;
    
        // Define the IDs of the sections
        const sectionIds = ['home', 'about', 'service', 'portfolio', 'news', 'contact'];
    
        // Loop through each section ID to find the one in view
        sectionIds.forEach(function(sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionTop + sectionHeight + 100) {
                    links.forEach(function(link) {
                        if (link.getAttribute('href') === '#' + sectionId) {
                            link.classList.add('active');
                        } else {
                            link.classList.remove('active');
                        }
                    });
                }    
            }
        });
    }

    // Initial call to set active link on page load
    setActiveLink();

    // Event listener to set active link on scroll
    window.addEventListener('scroll', setActiveLink);
});


function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        document.getElementById("error").style.display = "block";
        setTimeout(function() {
            document.getElementById("error").style.display = "none";
        }, 2000); 
    } else {
        document.getElementById("contactForm").submit();
    }
}

const form_button = document.getElementById('form-button');
const form = document.getElementById('contactForm');

form_button.addEventListener('click', (e) => {
    e.preventDefault(); 
    validateForm(); 
    form.reset(); 
});
