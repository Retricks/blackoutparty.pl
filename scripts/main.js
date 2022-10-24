let currentDate = new Date();
document.querySelector("#currentDate").innerHTML = currentDate.getFullYear();
let isNight = false;
document.querySelector("#toggleNightMode").addEventListener("click", ()=>{
    let nightmode = document.querySelector(".toggleNightMode__slider");
    let slider = document.querySelector(".toggleNightMode__slider-point");
    let mobileNav = document.querySelector(".mobile-nav");
    let mobileNavLink = document.querySelector(".mobile-nav__link--active");
    if(isNight){
        nightmode.style.background = "#ccc";
        isNight = false;
        slider.style.transform = "translateY(-1.625em)";
        mobileNav.style.background = "var(--bright-color)";
        mobileNavLink.style.color = "var(--second-color)";

        document.documentElement.style.setProperty("--primary-color", "hsl(347, 83%, 60%)");
        document.documentElement.style.setProperty("--second-color", "hsl(284, 79%, 24%)");
        document.documentElement.style.setProperty("--darker-color", "hsl(284, 55%, 15%)");
        document.documentElement.style.setProperty("--third-color", "hsl(46, 100%, 62%)");
        document.documentElement.style.setProperty("--bright-color", "hsl(0, 0%, 100%)");
    }
    else{
        nightmode.style.background = "black";
        isNight = true;
        slider.style.transform = "none";
        mobileNav.style.background = "#111";
        mobileNavLink.style.color = "var(--primary-color)";

        document.documentElement.style.setProperty("--primary-color", "hsl(347, 83%, 45%)");
        document.documentElement.style.setProperty("--second-color", "hsl(284, 79%, 14%)");
        document.documentElement.style.setProperty("--darker-color", "hsl(284, 55%, 10%)");
        document.documentElement.style.setProperty("--third-color", "hsl(46, 100%, 40%)");
        document.documentElement.style.setProperty("--bright-color", "hsl(0, 0%, 90%)");
    }
})