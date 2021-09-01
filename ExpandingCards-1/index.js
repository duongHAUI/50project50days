var panels = document.querySelectorAll('.panel');
console.log(panels);
panels.forEach((panel)=>{
    panel.onclick = ()=>{
        document.querySelector('.panel.active').classList.remove('active');
        panel.classList.add('active');
    }
})