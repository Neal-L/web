let case1 = document.querySelector(".case1");
let case2 = document.querySelector(".case2");
let case3 = document.querySelector(".case3");
let case4 = document.querySelector(".case4");  
let case5 = document.querySelector(".case5");
let case6 = document.querySelector(".case6");
let rotate = document.querySelector(".rotate");
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let reset = document.querySelector(".reset");
canvas.height = 600;
canvas.width = 750;
let x = canvas.width;
let y = canvas.height;
drawsquare(0,0);
//----------------------------------//
BWS(120,70);
BMB(450,70);
SET(280,70);
//-------------------------------//
SWS(450,350);
OP(280,350);
LB(120,350);

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
function BWS(x,y){//4號位
    
    ctx.beginPath();
    ctx.lineWidth = 2
    ctx.strokeStyle = "white"
    ctx.fillStyle = "#4682B4"
    ctx.arc(x,y,40,0,Math.PI*2)
    ctx.fill()
    ctx.closePath();
}
function SET(x,y){//2號位
    
    ctx.beginPath();
    ctx.lineWidth = 2
    ctx.strokeStyle = "white"
    ctx.fillStyle = "#6A5ACD"
    ctx.arc(x,y,40,0,Math.PI*2)
    ctx.fill()
    ctx.closePath();
}
function BMB(x,y){//3號位
    
    ctx.beginPath();
    ctx.lineWidth = 2
    ctx.strokeStyle = "white"
    ctx.fillStyle = "#87CEEB"
    ctx.arc(x,y,40,0,Math.PI*2)
    ctx.fill()
    ctx.closePath();
}
function SWS(x,y){ //6號位

    ctx.beginPath();
    ctx.lineWidth = 2
    ctx.strokeStyle = "white"
    ctx.fillStyle = "#4682B4"
    ctx.arc(x,y,40,0,Math.PI*2)
    ctx.fill()
    ctx.closePath();
}
function OP(x,y){//1號位
    
    ctx.beginPath();
    ctx.lineWidth = 2
    ctx.strokeStyle = "white"
    ctx.fillStyle = "#6A5ACD"
    ctx.arc(x,y,40,0,Math.PI*2)
    ctx.fill()
    ctx.closePath();
}
function LB(x,y){//5號位
    
    ctx.beginPath();
    ctx.lineWidth = 2
    ctx.strokeStyle = "white"
    ctx.fillStyle = "#4B0082"
    ctx.arc(x,y,40,0,Math.PI*2)
    ctx.fill()
    ctx.closePath();
}

function case_1(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    drawsquare(0,0);
    BWS(130,350)
    SWS(440,300);
    LB(290,360);
    SET(280,50);
    BMB(460,140);
    OP(380,450);
}

function case_2(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    drawsquare(0,0);
    BWS(130,350)
    LB(440,300);
    SWS(290,360);
    SET(280,50);
    BMB(125,140);
    OP(250,450);
}
function case_3(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    drawsquare(0,0);
    BWS(440,250)
    SWS(130,340);
    LB(290,380);
    SET(480,280);
    OP(125,140);
    BMB(250,50);
}
function case_4(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    drawsquare(0,0);
    SWS(130,350)
    BWS(440,300);
    LB(290,360);
    OP(280,50);
    BMB(425,140);
    SET(300,100);
}
function case_5(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    drawsquare(0,0);
    SWS(130,350)
    LB(440,300);
    BWS(290,360);
    BMB(130,50);
    SET(100,140);
    OP(350,450);
}
function case_6(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    drawsquare(0,0);
    SWS(130,350)
    LB(440,300);
    BWS(290,360);
    SET(100,50);
    BMB(130,140);
    OP(270,450);
}
case1.addEventListener("click",case_1);
case2.addEventListener("click",case_2);
case3.addEventListener("click",case_3);
case4.addEventListener("click",case_4);
case5.addEventListener("click",case_5);
case6.addEventListener("click",case_6);
