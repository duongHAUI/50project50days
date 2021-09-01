var prev = document.querySelector("#prev");
var next = document.querySelector("#next");
var progress = document.querySelector("#progress");
var circle  = document.querySelectorAll(".circle");
var currentActive = 0;



next.addEventListener("click",()=>{
    currentActive++;
    if(currentActive >=circle.length){
        currentActive=circle.length-1;
    }
    updateCircle();
})
prev.addEventListener("click",()=>{
    currentActive--;
    if(currentActive <=0){
        currentActive=0
    }
    updateCircle();
})

function updateCircle(){
    if(currentActive===0){
        prev.disabled = true;
    }
    else if(currentActive===circle.length-1){
        next.disabled = true;
    }
    else{
        prev.disabled = false;
        next.disabled = false;
    }
    circle.forEach((cir,index)=>{
        if(currentActive===index){
            cir.classList.add('active');
        }
        progress.width
    })
}