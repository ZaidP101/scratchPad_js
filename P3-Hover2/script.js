let s1 = document.getElementById("sq1");
s1.addEventListener("mouseenter", function(){
    let r = Math.floor(Math.random()*100);
    s1.innerHTML = `<h1>${r}</h1>`;
    s1.style.backgroundColor = "#ff5722";
});
s1.addEventListener("mouseleave", function(){
    s1.innerHTML = "<h1>1</h1>";
    s1.style.backgroundColor = "white"
})

let s2 = document.getElementById("sq2");
let clr = "red";
s2.addEventListener("mouseenter", function(){
    if(clr=="#efd510"){
        s2.style.backgroundColor = "#efd510";
        clr = "#1e549f";
        s2.style.color = "black";
    }
    else{
        s2.style.backgroundColor = "#1e549f";
        clr = "#efd510";
        s2.style.color = "white";
    }
});
s2.addEventListener("mouseleave", function(){
    s2.style.backgroundColor = "white";
    s2.style.color = "black";
})

let s3 = document.getElementById("sq3");
s3.addEventListener("mouseenter", function(){
    s3.style.color = "white";
    let r1 = Math.floor(Math.random()*256);
    let r2 = Math.floor(Math.random()*256);
    let r3 = Math.floor(Math.random()*256);
    s3.style.backgroundColor = `rgb(${r1}, ${r2}, ${r3})`;
});
s3.addEventListener("mouseleave", function(){
    s3.style.backgroundColor = "white";
    s3.style.color = "black";
})

let s4 = document.getElementById("sq4");
s4.addEventListener("click", function(){
    let r1 = Math.floor(Math.random()*256);
    let r2 = Math.floor(Math.random()*256);
    let r3 = Math.floor(Math.random()*256);
    s1.style.backgroundColor = `rgb(${r1}, ${r3}, ${r2})`;
    s2.style.backgroundColor = `rgb(${r2}, ${r1}, ${r3})`;
    s3.style.backgroundColor = `rgb(${r3}, ${r2}, ${r1})`;
    s4.style.backgroundColor = "yellow";
    s1.style.color = "white";
    s2.style.color = "white";
    s3.style.color = "white";
    s4.style.color = "#45171d";
    s4.innerHTML = "<h1>Again !!</h1>";
});
s4.addEventListener("mouseleave", function(){
    s1.style.backgroundColor = "white";
    s1.style.color = "black";
    s2.style.backgroundColor = "white";
    s2.style.color = "black";
    s3.style.backgroundColor = "white";
    s3.style.color = "black";
    s4.style.backgroundColor = "white";
    s4.style.color = "black";
    s4.innerHTML = "<h1>Click !</h1>"
})

let main = document.getElementById("main");
let crsr = document.getElementById("cursor");
main.addEventListener("click", function(dets){
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
})