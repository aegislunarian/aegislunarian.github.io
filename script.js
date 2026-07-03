const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

let w;
let h;

function resize(){

    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;

}

window.addEventListener("resize", resize);

resize();

const stars = [];

for(let i=0;i<180;i++){

    stars.push({

        x:Math.random()*w,

        y:Math.random()*h,

        r:Math.random()*1.5,

        a:Math.random(),

        s:Math.random()*0.15

    });

}

function render(){

    ctx.clearRect(0,0,w,h);

    for(const star of stars){

        ctx.beginPath();

        ctx.arc(star.x,star.y,star.r,0,Math.PI*2);

        ctx.fillStyle=`rgba(255,255,255,${star.a})`;

        ctx.fill();

        star.y+=star.s;

        if(star.y>h){

            star.y=0;
            star.x=Math.random()*w;

        }

    }

    requestAnimationFrame(render);

}

render();

const button = document.getElementById("download");

button.addEventListener("click", () => {

    button.disabled = true;
    button.textContent = "Téléchargement...";

    const link = document.createElement("a");
    link.href = "TheContinuum.mrpack";
    link.download = "TheContinuum.mrpack";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {

        button.textContent = "Ouverture de l'installation...";

        window.location.href = "setup.html";

    }, 1200);

});