var main = document.getElementById("main");

let arr = ["/pngs/linux.png",
    "/pngs/git.png",
    "/pngs/python.png",
    "/pngs/docker.png",
    "/pngs/jenkins.jpg",
    "/pngs/AWS.jpg",
    "/pngs/kubernetes.png",
    "/pngs/Ansible.png",
    "/pngs/Terraform.png",
    "/pngs/Refresh.jpg"
];

var s = "";
for(let i=1; i<=44; i++){
    let r = Math.floor(Math.random()*arr.length);
    s += `<div class="cards"><img src=${arr[r]}></div>`;
}
main.innerHTML = s;

// let main = document.getElementById("main");
// let crsr = document.getElementById("cursor");
// main.addEventListener("mousemove", function(dets){
//     crsr.style.left = dets.x + "px";
//     crsr.style.top = dets.y + "px";
// })