let startWS = document.querySelector(".startWS");
let startOP = document.querySelector(".startOP");
let startMB = document.querySelector(".startMB");
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let height  = document.querySelector(".ws");
let width  = document.querySelector(".mb");
let reset = document.querySelector(".reset");
canvas.height = 600;
canvas.width = 750;
let x = canvas.width;
let y = canvas.height;

let x4=120,y4=70;
let x3=300,y2=120;
let x2=450,y3=120;
let x1=450,y1=400;
let x6=300,y6=500;
let x5=150,y5=400;
drawsquare(0,0);
volleyball(580,100);
drawcircle_4(120,70);
//繪製球場
function drawsquare(x,y){//場地
    let sx = x;
    let sy = y;
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
    ctx.moveTo(sx, 150)
    ctx.lineTo(sx+550, 150)
    ctx.strokeStyle = "white"
    ctx.stroke()
    ctx.beginPath();
    ctx.moveTo(sx-10, sy)
    ctx.lineTo(sx+550, sy)
    ctx.strokeStyle = "black"
    ctx.lineWidth = 10
    ctx.stroke()
}
function volleyball(x,y){//球
    let vb_x = x;
    let vb_y = y;
    
    ctx.beginPath();
    ctx.lineWidth = 2
    ctx.fillStyle = "#FFDF00"
    ctx.arc(vb_x,vb_y,25,0,Math.PI*2)  
    ctx.fill()
    ctx.closePath();
    let curveline_start1 = {x:vb_x+10,y:vb_y-25};
    let curveline_end1 = {x:vb_x-5,y:vb_y+25};
    let controlpoint1 = {x:vb_x-16,y:vb_y};
    let controlpoint2 = {x:vb_x+10,y:vb_y-3};
    ctx.beginPath();
    ctx.moveTo(curveline_start1.x,curveline_start1.y)
    ctx.bezierCurveTo(controlpoint1.x,controlpoint1.y
        ,controlpoint2.x,controlpoint2.y
        ,curveline_end1.x,curveline_end1.y)
    ctx.lineWidth =10
    ctx.strokeStyle = "#0000CD"
    ctx.stroke()
    let curveline_start2 = {x:vb_x-25,y:vb_y};
    let curveline_end2 = {x:vb_x+25,y:vb_y};
    let controlpoint3 = {x:vb_x-10,y:vb_y+15};
    let controlpoint4 = {x:vb_x+10,y:vb_y-15};
    ctx.beginPath();
    ctx.moveTo(curveline_start2.x,curveline_start2.y)
    ctx.bezierCurveTo(controlpoint3.x,controlpoint3.y
        ,controlpoint4.x,controlpoint4.y
        ,curveline_end2.x,curveline_end2.y)
    ctx.lineWidth =8
    ctx.strokeStyle = "#0000CD"
    ctx.stroke()
}
function drawcircle_4(x,y){//4號位
    
    ctx.beginPath();
    ctx.lineWidth = 2
    ctx.strokeStyle = "white"
    ctx.fillStyle = "#4682B4"
    ctx.arc(x,y,40,0,Math.PI*2)
    ctx.fill()
    ctx.closePath();
}
function drawcircle_2(x,y){//2號位
    
    ctx.beginPath();
    ctx.lineWidth = 2
    ctx.strokeStyle = "white"
    ctx.fillStyle = "#6A5ACD"
    ctx.arc(x,y,40,0,Math.PI*2)
    ctx.fill()
    ctx.closePath();
}
function drawcircle_3(x,y){//3號位
    
    ctx.beginPath();
    ctx.lineWidth = 2
    ctx.strokeStyle = "white"
    ctx.fillStyle = "#87CEEB"
    ctx.arc(x,y,40,0,Math.PI*2)
    ctx.fill()
    ctx.closePath();
}
function drawcircle_6(x,y){ //6號位

    ctx.beginPath();
    ctx.lineWidth = 2
    ctx.strokeStyle = "white"
    ctx.fillStyle = "#4682B4"
    ctx.arc(x,y,40,0,Math.PI*2)
    ctx.fill()
    ctx.closePath();
}
function drawcircle_1(x,y){//1號位
    
    ctx.beginPath();
    ctx.lineWidth = 2
    ctx.strokeStyle = "white"
    ctx.fillStyle = "#6A5ACD"
    ctx.arc(x,y,40,0,Math.PI*2)
    ctx.fill()
    ctx.closePath();
}
function drawcircle_5(x,y){//5號位
    
    ctx.beginPath();
    ctx.lineWidth = 2
    ctx.strokeStyle = "white"
    ctx.fillStyle = "#4B0082"
    ctx.arc(x,y,40,0,Math.PI*2)
    ctx.fill()
    ctx.closePath();
}