
window.addEventListener("load", function(){
    let menu = this.document.getElementById("menu");
    menu.addEventListener("click",function(){
        document.getElementById("list").classList.toggle("open")
    })
})
