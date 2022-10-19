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

let hamburgerOpen = false;
let hamburger = document.querySelector("#hamburger");
hamburger.addEventListener("click", () => {
    let navigator = document.querySelector(".primary-nav");
    navigator.classList.toggle("showNav");
    if (hamburgerOpen == false){
        document.querySelector("#hamburger").style.color = "black";
        hamburgerOpen = true;
    }
    else{  
        document.querySelector("#hamburger").style.color = "white";
        hamburgerOpen = false;
    }
});