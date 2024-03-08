let case1 = document.querySelector(".case1");
let case2 = document.querySelector(".case2");
let case3 = document.querySelector(".case3");
let case4 = document.querySelector(".case4");  
let case5 = document.querySelector(".case5");
let case6 = document.querySelector(".case6");
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let reset = document.querySelector(".reset");
canvas.height = 600;
canvas.width = 750;
let x = canvas.width;
let y = canvas.height;

let x4=120,y4=70;
let x3=450,y2=70;
let x2=280,y3=70;
let x6=450,y6=350;
let x1=280,y1=350;
let x5=120,y5=350;
drawsquare(0,0);

//----------------------------------//
drawcircle_4(120,70);
drawcircle_3(450,70);
drawcircle_2(280,70);
//-------------------------------//
drawcircle_6(450,350);
drawcircle_1(280,350);
drawcircle_5(120,350);
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

function case_1(){

    ctx.clearRect(0,0,canvas.width,canvas.height)
    drawsquare(0,0);
    fontWSMove(1,28)
    backWSMove(-1,-5);
    LBMove(17,1);
    fontStOpMove(0,-2);
    MBMove(1,7);
    backStOpMove(10,10);

}
function fontWSMove(x,y){
    
    let dx = x;
    let dy = y;
    if(x4<130 && y4 < 350){
        x4 += dx;
        y4 += dy;
    }
    drawcircle_4(x4,y4);
}
function backWSMove(x,y){
    

    let dx = x;
    let dy = y;
    if(x6 > 440 && y6 > 300){
        x6 += dx;
        y6 += dy;
    }
    drawcircle_6(x6,y6);
}

function LBMove(x,y){
    let dx = x;
    let dy = y;
    
    if(x5 < 290 && y5 < 360){
        x5 += dx;
        y5 += dy;
    }
    drawcircle_5(x5,y5);
}
function MBMove(x,y){
    
    let dx = x;
    let dy = y;
    
    if(x3 < 460 && y3 < 140){
        x3 += dx;
        y3 += dy;
    }
    drawcircle_3(x3,y3);
    
}
function fontStOpMove(x,y){
    
    let dx = x;
    let dy = y;
    if(x2 >= 280 && y2 > 50){
        x2 += dx;
        y2 += dy;
    }
    drawcircle_2(x2,y2);
    
}
function backStOpMove(x,y){
    
    let dx = x;
    let dy = y;
    
    if(x1 < 380 && y1 < 450){
        x1 += dx;
        y1 += dy;
    }
    drawcircle_1(x1,y1);

}

function actionCase_1(){
    actionCase_1 = setInterval(case_1, 100);
}
case1.addEventListener("click",actionCase_1);