let date = new Date("Jul 1, 2023 20:00:00");	
let Int = setInterval(UpdateTime,1);
function UpdateTime(){
    let Now = new Date().getTime();
    let distance = date - Now;
    document.getElementById("Days").innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("Hours").innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("Minutes").innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("Seconds").innerHTML = Math.floor((distance % (1000 * 60)) / 1000);

    if(distance<0){
        clearInterval(Int);
        document.getElementById("Days").innerHTML="--";
        document.getElementById("Hours").innerHTML="--";
        document.getElementById("Minutes").innerHTML="--";
        document.getElementById("Seconds").innerHTML="--";
    }
}

let isNight = false;
document.querySelector("#toggleNightMode").addEventListener("click", ()=>{
    let nightmode = document.querySelector(".toggleNightMode__slider");
    let slider = document.querySelector(".toggleNightMode__slider-point");
    let mobileNav = document.querySelector(".mobile-nav");
    let mobileNavLink = document.querySelector(".mobile-nav__link--active");
    if(isNight){
        nightmode.style.background = "#ccc";
        isNight = false;
        slider.style.transform = "translateY(-13px)";
        mobileNav.style.background = "var(--bright-color)";
        mobileNavLink.style.color = "var(--second-color)";
    }
    else{
        nightmode.style.background = "black";
        isNight = true;
        slider.style.transform = "none";
        mobileNav.style.background = "#111";
        mobileNavLink.style.color = "var(--primary-color)";
    }
})