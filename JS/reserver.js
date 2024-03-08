let startWS = document.querySelector(".startWS");
let startOP = document.querySelector(".startOP");
let startMB = document.querySelector(".startMB");
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let height  = document.querySelector(".ws");
let width  = document.querySelector(".mb");
let reset = document.querySelector(".reset");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
let x = canvas.width;
let y = canvas.height;

let x4=150,y4=120;
let x3=300,y2=120;
let x2=450,y3=120;
let x1=450,y1=400;
let x6=300,y6=500;
let x5=150,y5=400;
//繪製球場
function drawsquare(){//場地
    let sx = 30;
    let sy = 50;
    ctx.beginPath();
    ctx.rect(sx, sy, 540, 600)
    ctx.lineWidth = 5
    ctx.strokeStyle = "white"
    ctx.fillStyle = "#00FFFF"
    ctx.fill()
    ctx.stroke()
    ctx.beginPath();
    ctx.rect(sx+20, sy, 500, 500)
    ctx.lineWidth = 5
    ctx.strokeStyle = "white"
    ctx.fillStyle = "#FFA500"
    ctx.fill()
    ctx.stroke()
    ctx.beginPath();
    ctx.moveTo(sx, 200)
    ctx.lineTo(sx+550, 200)
    ctx.strokeStyle = "white"
    ctx.stroke()
    ctx.beginPath();
    ctx.moveTo(sx-10, sy)
    ctx.lineTo(sx+550, sy)
    ctx.strokeStyle = "black"
    ctx.lineWidth = 10
    ctx.stroke()
}
drawsquare()