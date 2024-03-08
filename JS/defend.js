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
function WS_attackline(){//主攻手攻擊線
        //主攻手攻擊線
        //直線
        ctx.beginPath();
        ctx.lineWidth = 3
        ctx.strokeStyle = "red"
        ctx.moveTo(540,30)
        ctx.lineTo(540,530)
        ctx.stroke()
        //2直線
        ctx.beginPath();
        ctx.lineWidth = 3
        ctx.strokeStyle = "red"
        ctx.moveTo(540,30)
        ctx.lineTo(460,530)
        ctx.stroke()
        //腰線
        ctx.beginPath();
        ctx.lineWidth = 3
        ctx.strokeStyle = "red"
        ctx.moveTo(490,30)
        ctx.lineTo(60,220)
        ctx.stroke()
        //斜線
        ctx.beginPath();
        ctx.lineWidth = 3
        ctx.strokeStyle = "red"
        ctx.moveTo(490,30)
        ctx.lineTo(60,400)
        ctx.stroke()        
}
drawsquare()
drawcircle_4(150,120);
drawcircle_3(300,120);
drawcircle_2(450,120);
drawcircle_1(450,400);
drawcircle_6(300,500);
drawcircle_5(150,400);
volleyball(620,100);

function WSAtackMove(){//對方主攻手攻擊
    
    ctx.clearRect(0,0,canvas.width,canvas.height)
    
    drawsquare()
    volleyball(520,0)
    WSA_fontWSMove();
    WSA_fontStOpMove();
    WSA_MBMove();
    WSA_LBMove();
    WSA_backWSMove();
    WSA_backStOpMove();
    WS_attackline();
}
function OPAtackMove(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    drawsquare()
    volleyball(80,0)
    OPA_fontWSMove();
    OPA_backWSMove();
    OPA_LBMove();
    OPA_backStOpMove();
    OPA_fontStOpMove();
    OPA_MBMove();
    OP_attackline();
}
function MBAtackMove(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    drawsquare()
    volleyball(320,0)
    MBA_fontWSMove();
    MBA_backWSMove();
    MBA_LBMove();
    MBA_backStOpMove();
    MBA_fontStOpMove();
    MBA_MBMove();
    MB_attackline();
}
function WSA_fontWSMove(){

    let dx = - 1;
    let dy = 7;
    volleyball(520,0)
    if(x4>140 && y4 < 190){
        x4 += dx;
        y4 += dy;
    }
    drawcircle_4(x4,y4);
}
function WSA_backWSMove(){
    let dx = 16;
    let dy = -1;
    
    if(x6 < 460 && y6 > 490){
        x6 += dx;
        y6 += dy;
    }
    drawcircle_6(x6,y6);
}
function WSA_LBMove(){
    let dx = -3;
    let dy = -2;
    
    if(x5 > 120 && y5 > 380){
        x5 += dx;
        y5 += dy;
    }
    drawcircle_5(x5,y5);
}
function WSA_backStOpMove(){
    
    let dx = 8;
    let dy = -2;
    
    if(x1 < 530 && y1 > 380){
        x1 += dx;
        y1 += dy;
    }
    drawcircle_1(x1,y1);

}
function WSA_fontStOpMove(){
    
    let dx = 4;
    let dy = -2.7;
    
    if(x2 < 490 && y2 > 93){
        x2 += dx;
        y2 += dy;
    }
    drawcircle_2(x2,y2);
    
}
function WSA_MBMove(){
    
    let dx = 16;
    let dy = -2.7;
    
    if(x3 < 460 && y3 > 93){
        x3 += dx;
        y3 += dy;
    }
    drawcircle_3(x3,y3);
    
}
//*********************/
//OP攻擊
//********************/
function OPA_fontWSMove(){

    let dx = - 4;
    let dy = -3;
    
    if(x4>110 && y4 > 90){
        x4 += dx;
        y4 += dy;
    }
    drawcircle_4(x4,y4);
}
function OPA_backWSMove(){
    let dx = -16;
    let dy = -1;
    
    if(x6 < 460 && y6 > 490){
        x6 += dx;
        y6 += dy;
    }
    drawcircle_6(x6,y6);
}
function OPA_LBMove(){
    let dx = -6;
    let dy = -5;
    
    if(x5 > 90 && y5 > 350){
        x5 += dx;
        y5 += dy;
    }
    drawcircle_5(x5,y5);
}
function OPA_backStOpMove(){
    let dx = 8;
    let dy = -2;
    
    if(x1 < 530 && y1 > 360){
        x1 += dx;
        y1 += dy;
    }
    drawcircle_1(x1,y1);
}
function OPA_fontStOpMove(){
    
    let dx = 7;
    let dy = 6;
    
    if(x2 < 520 && y2 < 180){
        x2 += dx;
        y2 += dy;
    }
    drawcircle_2(x2,y2);
}
function OPA_MBMove(){
    
    let dx = -16;
    let dy = -2.7;
    
    if(x3 > 140 && y3 > 93){
        x3 += dx;
        y3 += dy;
    }
    drawcircle_3(x3,y3);
    
}
function OP_attackline(){//舉對攻擊線
    //主攻手攻擊線
    //直線
    ctx.beginPath();
    ctx.lineWidth = 3
    ctx.strokeStyle = "red"
    ctx.moveTo(75,30)
    ctx.lineTo(75,530)
    ctx.stroke()
    //2直線
    ctx.beginPath();
    ctx.lineWidth = 3
    ctx.strokeStyle = "red"
    ctx.moveTo(75,30)
    ctx.lineTo(120,530)
    ctx.stroke()
    //腰線
    ctx.beginPath();
    ctx.lineWidth = 3
    ctx.strokeStyle = "red"
    ctx.moveTo(110,10)
    ctx.lineTo(520,190)
    ctx.stroke()
    //斜線
    ctx.beginPath();
    ctx.lineWidth = 3
    ctx.strokeStyle = "red"
    ctx.moveTo(110,10)
    ctx.lineTo(520,400)
    ctx.stroke()        
}
//*********************/
//MB攻擊
//********************/
function MBA_fontWSMove(){

    let dx = - 4;
    let dy = 15;
    
    if(x4>110 && y4 < 250){
        x4 += dx;
        y4 += dy;
    }
    drawcircle_4(x4,y4);
}
function MBA_backWSMove(){
    let dx = 20;
    let dy = -5;
    
    if(x6 < 500 && y6 > 450){
        x6 += dx;
        y6 += dy;
    }
    drawcircle_6(x6,y6);
}
function MBA_LBMove(){
    let dx = -5;
    let dy = 3;
    
    if(x5 > 100 && y5 < 430){
        x5 += dx;
        y5 += dy;
    }
    drawcircle_5(x5,y5);
}
function MBA_backStOpMove(){
    let dx = 5;
    let dy = -15;
    
    if(x1 < 500 && y1 > 250){
        x1 += dx;
        y1 += dy;
    }
    drawcircle_1(x1,y1);
}
function MBA_fontStOpMove(){
    
    let dx = -11;
    let dy = -3;
    
    if(x2 > 340 && y2 > 90){
        x2 += dx;
        y2 += dy;
    }
    drawcircle_2(x2,y2);
}
function MBA_MBMove(){
    
    let dx = 0;
    let dy = -3;
    
    if(x3 <= 300 && y3 > 90){
        x3 += dx;
        y3 += dy;
    }
    drawcircle_3(x3,y3);
    
}
function MB_attackline(){//舉對攻擊線
    //主攻手攻擊線
    //左邊斜線
    ctx.beginPath();
    ctx.lineWidth = 3
    ctx.strokeStyle = "red"
    ctx.moveTo(300,30)
    ctx.lineTo(75,450)
    ctx.stroke()
    //左邊腰線
    ctx.beginPath();
    ctx.lineWidth = 3
    ctx.strokeStyle = "red"
    ctx.moveTo(300,30)
    ctx.lineTo(120,250)
    ctx.stroke()
    //右邊斜線
    ctx.beginPath();
    ctx.lineWidth = 3
    ctx.strokeStyle = "red"
    ctx.moveTo(300,30)
    ctx.lineTo(520,450)
    ctx.stroke()
    //右邊腰線
    ctx.beginPath();
    ctx.lineWidth = 3
    ctx.strokeStyle = "red"
    ctx.moveTo(300,30)
    ctx.lineTo(480,250)
    ctx.stroke()        
}

function actionWS(){
    actionWS = setInterval(WSAtackMove, 100);
}
function actionOP(){
    actionOP = setInterval(OPAtackMove, 100);
}
function actionMB(){
    actionMB = setInterval(MBAtackMove, 100);
}
function resetgrape(){
    clearInterval(actionWS);
    clearInterval(actionOP);
    clearInterval(actionMB);
    
    ctx.clearRect(0,0,canvas.width,canvas.height)

    drawsquare();
    drawcircle_4(x4=150,y4=120)
    drawcircle_3(x3=300,y3=120)
    drawcircle_2(x2=450,y2=120)
    drawcircle_1(x1=450,y1=400)
    drawcircle_6(x6=300,y6=500)
    drawcircle_5(x5=150,y5=400)
    volleyball(620,100)
}

startWS.addEventListener("click", actionWS);
startOP.addEventListener("click", actionOP);
startMB.addEventListener("click", actionMB);
reset.addEventListener("click", resetgrape);
