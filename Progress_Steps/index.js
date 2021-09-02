var prev = document.querySelector("#prev");
var next = document.querySelector("#next");
var progress = document.querySelector("#progress");
var circle  = document.querySelectorAll(".circle");
var currentActive = 1;



next.addEventListener("click",()=>{
    currentActive++;
    // if(currentActive >circle.length){
    //     currentActive = circle.length;
    // }
    updateCircle();
})
prev.addEventListener("click",()=>{
    currentActive--;
    // if(currentActive <1){
    //     currentActive=1
    // }
    updateCircle();
})

function updateCircle(){
        if(currentActive===1){
        prev.disabled = true;
    }
    else if(currentActive===circle.length){
        next.disabled = true;
    }
    else{
        prev.disabled = false;
        next.disabled = false;
    }
    circle.forEach((cir,index)=>{
        if(index < currentActive){
            cir.classList.add("active");
        }
        else{
            cir.classList.remove('active');
        }
    })
    var progressValue = ((currentActive-1)/(circle.length-1))*100;
    progress.style.width = progressValue + "%";
}
