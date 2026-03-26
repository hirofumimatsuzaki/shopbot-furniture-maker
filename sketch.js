// キャンバスのサイズを定義
const CANVAS_WIDTH = 2700;
const CANVAS_HEIGHT = 1400;

let d = 10;
let s = 80;
let s2 = 0;
let s3 = 0;
let s4 = 0;
let s5 = 0;
let s6 = 40;
let s7 = 20;
let s8 = -80;
let s9;
let s10;
let s11 = 0;
let s12 = 30;

let test = 0;
let offsetX;
let offsetY;
let offsetX2;
let offsetY2;
let newX1;
let newY1;
let newX2;
let newY2;
let newX3;
let newY3;
let x1, y1;
let x2, y2;
let x3, y3;
let x4, y4;
let yp3;
let yp4;
let yp5 = 100;
let xp6;
let yp6;
let xp7;
let yp7;
let resultX;
let resultX2;
let resultX3;
let resultX4;
let yp8;
let length2;
let length4;
let length5;
let length6;
let count = 0;
let mx;
let my;
let mx2;
let my2;
let centerY;

function setup() {
  let canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT, SVG);
  canvas.parent("canvas-container");

  const btn = document.getElementById("download-button");
  btn.addEventListener("click", saveS);

  const furnitureSelect = document.getElementById("furniture_type");

  furnitureSelect.addEventListener("change", function () {
    const type = this.value;

    const chairControls = document.getElementById("chair-controls");
const deskControls = document.getElementById("desk-controls");
const shelfControls = document.getElementById("shelf-controls");

chairControls.style.display = "none";
deskControls.style.display = "none";
shelfControls.style.display = "none";

if (type === "chair") {
    chairControls.style.display = "block";
} else if (type === "desk") {
    deskControls.style.display = "block";
} else if (type === "shelf") {
    shelfControls.style.display = "block";
}
  });

  furnitureSelect.dispatchEvent(new Event("change"));
}

function draw() {
  background(220);

  push();
  scale(0.6);
  translate(0, 400);

  const furnitureType = document.getElementById("furniture_type").value;

  updateCommonParams();

  if (furnitureType === "chair") {
    updateChairParams();
    drawChair();
  } else if (furnitureType === "desk") {
    updateDeskParams();
    drawDesk();
  }

  pop();
}

function updateCommonParams() {
  let inputValue = document.getElementById("material_thickness");
  let iValue = parseFloat(inputValue.value);

  d = iValue;
  document.getElementById("display_i").innerText = iValue + " mm";
}

function updateChairParams() {
  let sliderS = document.getElementById("s");
  let sValue = parseFloat(sliderS.value);
  document.getElementById("display_s").innerText = (sValue + 40) + " mm";

  let sliderS2 = document.getElementById("s2");
  let s2Value = parseFloat(sliderS2.value);
  document.getElementById("display_s2").innerText = s2Value + " mm";

  let sliderS3 = document.getElementById("s3");
  let s3Value = parseFloat(sliderS3.value);
  document.getElementById("display_s3").innerText = s3Value + " mm";

  let sliderS5 = document.getElementById("s5");
  let s5Value = parseFloat(sliderS5.value);
  document.getElementById("display_s5").innerText = s5Value + " mm";

  let sliderYP5 = document.getElementById("yp5");
  let yp5Value = parseFloat(sliderYP5.value);
  document.getElementById("display_yp5").innerText = yp5Value + " mm";

  let sliderS6 = document.getElementById("s6");
  let s6Value = parseFloat(sliderS6.value);
  document.getElementById("display_s6").innerText = s6Value + " mm";

  let sliderS7 = document.getElementById("s7");
  let s7Value = parseFloat(sliderS7.value);
  document.getElementById("display_s7").innerText = s7Value + " mm";

  let sliderS8 = document.getElementById("s8");
  let s8Value = parseFloat(sliderS8.value);
  document.getElementById("display_s8").innerText = s8Value + " mm";

  let sliderS11 = document.getElementById("s11");
  let s11Value = parseFloat(sliderS11.value);
  document.getElementById("display_s11").innerText = s11Value + " mm";

  let sliderS12 = document.getElementById("s12");
  let s12Value = parseFloat(sliderS12.value);
  document.getElementById("display_s12").innerText = s12Value + " mm";

  s = sValue;
  s2 = s2Value;
  s3 = s3Value;
  s5 = s5Value;
  s6 = s6Value;
  s7 = s7Value;
  s8 = s8Value;
  s11 = s11Value;
  s12 = s12Value;
  yp5 = yp5Value;
}

function updateDeskParams() {
  let deskWidth = parseFloat(document.getElementById("desk_width").value);
  let deskDepth = parseFloat(document.getElementById("desk_depth").value);
  let deskLegHeight = parseFloat(document.getElementById("desk_leg_height").value);
  let deskApronHeight = parseFloat(document.getElementById("desk_apron_height").value);
  let deskFootWidth = parseFloat(document.getElementById("desk_foot_width").value);
  let deskLeg1Right = parseFloat(document.getElementById("desk_leg1_right").value);
  let deskLeg2Right = parseFloat(document.getElementById("desk_leg2_right").value);
  let deskLeg1Left = parseFloat(document.getElementById("desk_leg1_left").value);
  let deskLeg2Left = parseFloat(document.getElementById("desk_leg2_left").value);

  document.getElementById("display_desk_width").innerText = deskWidth + " mm";
  document.getElementById("display_desk_depth").innerText = deskDepth + " mm";
  document.getElementById("display_desk_leg_height").innerText = deskLegHeight + " mm";
  document.getElementById("display_desk_apron_height").innerText = deskApronHeight + " mm";
  document.getElementById("display_desk_foot_width").innerText = deskFootWidth + " mm";
  document.getElementById("display_desk_leg1_right").innerText = deskLeg1Right + " mm";
  document.getElementById("display_desk_leg2_right").innerText = deskLeg2Right + " mm";
  document.getElementById("display_desk_leg1_left").innerText = deskLeg1Left + " mm";
  document.getElementById("display_desk_leg2_left").innerText = deskLeg2Left + " mm";

  // tenban() が使う変数
  s = deskWidth;
  s2 = deskDepth;

  // 今後 ashi や makuita で使うために残しておく
  s3 = deskLegHeight;
  s4 = deskApronHeight;
  s5 = deskFootWidth;
  s8 = deskLeg1Left;
  s6 = deskLeg1Right;
  s9 = deskLeg2Left;
  s7 = deskLeg2Right;
}

function updateShelfDisplays() {
    document.getElementById("display_shelf_thickness").innerText =
        document.getElementById("shelf_thickness").value + " mm";

    document.getElementById("display_shelf_width").innerText =
        document.getElementById("shelf_width").value + " mm";

    document.getElementById("display_shelf_depth").innerText =
        document.getElementById("shelf_depth").value + " mm";

    document.getElementById("display_shelf_foot_width").innerText =
        document.getElementById("shelf_foot_width").value + " mm";

    document.getElementById("display_shelf_leg_width").innerText =
        document.getElementById("shelf_leg_width").value + " mm";

    document.getElementById("display_shelf_leg_height").innerText =
        document.getElementById("shelf_leg_height").value + " mm";

    document.getElementById("display_shelf_joint_thickness").innerText =
        document.getElementById("shelf_joint_thickness").value + " mm";

    document.getElementById("display_shelf_leg_height_2").innerText =
        document.getElementById("shelf_leg_height_2").value + " mm";

    document.getElementById("display_shelf_columns").innerText =
        document.getElementById("shelf_columns").value;

    document.getElementById("display_shelf_rows").innerText =
        document.getElementById("shelf_rows").value;

    document.getElementById("display_shelf_joint_thickness_2").innerText =
        document.getElementById("shelf_joint_thickness_2").value + " mm";

    document.getElementById("display_shelf_height_body").innerText =
        document.getElementById("shelf_height_body").value + " mm";

        d = parseFloat(document.getElementById("shelf_thickness").value);
s = parseFloat(document.getElementById("shelf_width").value);
s2 = parseFloat(document.getElementById("shelf_depth").value);
s3 = parseFloat(document.getElementById("shelf_foot_width").value);
s4 = parseFloat(document.getElementById("shelf_leg_width").value);
s5 = parseFloat(document.getElementById("shelf_leg_height").value);
d2 = parseFloat(document.getElementById("shelf_joint_thickness").value);
s6 = parseFloat(document.getElementById("shelf_leg_height_2").value);
kazu = parseFloat(document.getElementById("shelf_columns").value);
kazu2 = parseFloat(document.getElementById("shelf_rows").value);
d3 = parseFloat(document.getElementById("shelf_joint_thickness_2").value);
s7 = parseFloat(document.getElementById("shelf_height_body").value);
}


function saveS(){
   save("mySVG.svg"); // give file name
  print("saved svg");
  //noLoop(); // we just want to export once
}

function mousePressed(){
    count++;
    if(count>2){
      count=0;
      mx=null;
      my=null;
      mx2=null;
      my2=null;
    }
    if(count==1){
      mx=mouseX;
      my=mouseY;
    }
    if(count==2){
      mx2=mouseX;
      my2=mouseY;
    }
  }

  function sokumen(x,y){
    stroke(1);
    strokeWeight(1);
    
    beginShape();
    vertex(x,y);
    vertex(xp7, yp7 + s11);
vertex(xp7, yp7 + s11 - offsetY2);
    vertex(x1+s2-s11/5,yp7+s11-offsetY2-s11/5);
    vertex(resultX+s2,yp3);
    vertex(resultX + offsetX+s2, yp3 + offsetY);
    vertex(resultX2 + offsetX+s2, yp4 + offsetY);
    vertex(resultX2+s2, yp4);
    vertex(resultX3+s2,yp5);
    vertex(resultX3+s2+d,newY2);
    vertex(x+170+s2,y+centerY/4);
    vertex(x+170+s2-d,y+centerY/4);
    vertex(x+170+s2-d,y+centerY/1.5);
    vertex(x+170+s2,y+centerY/1.5);
    vertex(x+170+s2,y+120+s3+d);
    vertex(x+170+s2-s12/2,y+120+s3+d);
    vertex(x+170+s2-s12/2,y+120+s3);
    vertex(x+170+s2-s12,y+120+s3);
    vertex(x+170-40-d+s5+s2,y+s6);
    vertex(x+40-s5,y+s6);
    vertex(x-d+s12,y+120+s3);
    vertex(x-d+s12/2,y+120+s3);
    vertex(x-d+s12/2,y+120+s3+d);
    vertex(x,y+120+s3+d);
    vertex(x,y+centerY/1.5);
    vertex(x-d,y+centerY/1.5);
    vertex(x-d,y+centerY/4);
    vertex(x,y+centerY/4);
    vertex(x,y);
    s9=y+centerY/4;
    s10=y+centerY/1.5;
    endShape();
    
  }

  function ue(x,y){
    beginShape();
    vertex(x+d,y);
    vertex(x+40+s-d,y);
    vertex(x+40+s-d,y+40);
    vertex(x+40+s,y+40);
    vertex(x+40+s,y+170+5+d*2+s2);
    vertex(x,y+170+5+d*2+s2);
    vertex(x,y+40);
    vertex(x+d,y+40);
    vertex(x+d,y);
    endShape();
    
    stroke(0);
    
    beginShape();
    vertex(x+20,y+170+s2-d+d);
    vertex(x+40+s-20,y+170+s2-d+d);
    vertex(x+40+s-20,y+170+s2+d);
    vertex(x+20,y+170+s2+d);
    vertex(x+20,y+170+s2-d+d);
    endShape();
    
    noStroke();
  }

  function semotare(x,y){
    stroke(1);
    strokeWeight(1);
    beginShape();
    vertex(x,y);
    vertex(x+40+s,y);
    vertex(x+40+s,y+20);
    vertex(x+40+s-d,y+20);
    vertex(x+40+s-d,y+20+length4);
    vertex(x+40+s,y+20+length4);
    vertex(x+40+s,y+20+length4+length2);
    vertex(x,y+20+length4+length2);
    vertex(x,y+20+length4);
    vertex(x+d,y+20+length4);
    vertex(x+d,y+20);
    vertex(x,y+20);
    vertex(x,y);
    endShape();
  }

  function mae(x,y){
    beginShape();
    vertex(x,y+10-d-s3);
    vertex(x+s,y+10-d-s3);
    vertex(x+s,y+10-s3);
    vertex(x+s+20,y+10-s3);
    vertex(x+s+20,s9+d);
    vertex(x+s+20-d,s9+d);
    vertex(x+s+20-d,s10+d);
    vertex(x+s+20,s10+d);
    vertex(x+s+20,y+130+d);
    vertex(x+s+20-s12/2,y+130+d);
    vertex(x+s+20-s12/2,y+130);
    vertex(x+s+20-s12,y+130);
    vertex(x+s-20+s5/2,y+60-s3);
    vertex(x+20-s5/2,y+60-s3);
    vertex(x-20+s12,y+130);
    vertex(x-20+s12/2,y+130);
    vertex(x-20+s12/2,y+130+d);
    vertex(x-20,y+130+d);
    vertex(x-20,s10+d);
    vertex(x-20+d,s10+d);
    vertex(x-20+d,s9+d);
    vertex(x-20,s9+d);
    vertex(x-20,y+10-s3);
    vertex(x,y+10-s3);
    vertex(x,y+10-d-s3);
    endShape();
  }

  function ushiro(x,y){
    beginShape();
    vertex(x+d,y+10-s3);
    vertex(x+s+40-d,y+10-s3);
    vertex(x+s+40-d,s9+d);
    vertex(x+s+40,s9+d);
    vertex(x+s+40,s10+d);
    vertex(x+s+40-d,s10+d);
    vertex(x+s+40-d,y+130+d);
    vertex(x+s+40-s12/2,y+130+d);
    vertex(x+s+40-s12/2,y+130);
    vertex(x+s+40-s12,y+130);
    vertex(x+s+s5/2,y+60-s3);
    vertex(x+40-s5/2,y+60-s3);
    vertex(x+s12,y+130);
    vertex(x+s12/2,y+130);
    vertex(x+s12/2,y+130+d);
    vertex(x+d,y+130+d);
    vertex(x+d,s10+d);
    vertex(x,s10+d);
    vertex(x,s9+d);
    vertex(x+d,s9+d);
    vertex(x+d,y+10-s3);
    endShape();
  }

  function ashi(x,y){
    beginShape();
   vertex(x,y);
   vertex(x+s12/2,y);
   vertex(x+s12/2,y+d);
   vertex(x+s12-d,y+d);
   vertex(x+s12-d,y+s12/2);
   vertex(x+s12,y+s12/2);
   vertex(x+s12,y+s12);
   vertex(x+s12-d,y+s12);
   vertex(x,y+d);
   vertex(x,y);

   endShape();
    /*beginShape();
   vertex(x,y);
   vertex(x+s12/2,y);
   vertex(x+s12/2,y-d);
   vertex(x+s12,y-d);
   vertex(x+s12,y-d+s12/2);
   vertex(x+s12,y-d+s12/2);
   vertex(x+s12/2-d,y+s12);
   vertex(x-d,y+s12);
   vertex(x-d,y+s12/2);
   vertex(x,y+s12/2);
   vertex(x,y);

   endShape();*/
    
  }

  function calculateX(xp, yp, xp2, yp2, yp3,xp6, yp6, xp7, yp7, yp8) {
    // 傾きを計算
    let m = (yp2 - yp) / (xp2 - xp);
  
    // 与えられた y に対する x の値を計算
    let x = (yp3 - yp) / m + xp;
  
    return x
    
  }


function deskTenban(x,y){
  beginShape();
  vertex(x,y);
  vertex((x+(s*1/3))-(d/2+d),y);
  vertex(x+(s*1/3)-(d/2+d),y+d);
  vertex(x+(s*1/3)-(d/2),y+d);
  vertex(x+(s*1/3)-(d/2),y+d+d);
  vertex(x+(s*1/3)+(d/2),y+d+d);
  vertex(x+(s*1/3)+(d/2),y+d);
  vertex(x+(s*1/3)+d+d/2,y+d);
  vertex(x+(s*1/3)+d+d/2,y);
  
  vertex((x+(s*2/3))-(d/2+d),y);
  vertex(x+(s*2/3)-(d/2+d),y+d);
  vertex(x+(s*2/3)-(d/2),y+d);
  vertex(x+(s*2/3)-(d/2),y+d+d);
  vertex(x+(s*2/3)+(d/2),y+d+d);
  vertex(x+(s*2/3)+(d/2),y+d);
  vertex(x+(s*2/3)+d+d/2,y+d);
  vertex(x+(s*2/3)+d+d/2,y);
  
  vertex(x+s,y);
  
  vertex(x+s,y+((s2*1/3))-(d/2+d));
  vertex(x+s-d,y+((s2*1/3))-(d/2+d));
  vertex(x+s-d,y+((s2*1/3))-(d/2));
  vertex(x+s-d*2,y+((s2*1/3))-(d/2));
  vertex(x+s-d*2,y+((s2*1/3))+(d/2));
  vertex(x+s-d,y+((s2*1/3))+(d/2));
  vertex(x+s-d,y+((s2*1/3))+(d/2+d));
  vertex(x+s,y+((s2*1/3))+(d/2+d));
  
  vertex(x+s,y+((s2*2/3))-(d/2+d));
  vertex(x+s-d,y+((s2*2/3))-(d/2+d));
  vertex(x+s-d,y+((s2*2/3))-(d/2));
  vertex(x+s-d*2,y+((s2*2/3))-(d/2));
  vertex(x+s-d*2,y+((s2*2/3))+(d/2));
  vertex(x+s-d,y+((s2*2/3))+(d/2));
  vertex(x+s-d,y+((s2*2/3))+(d/2+d));
  vertex(x+s,y+((s2*2/3))+(d/2+d));
  
  vertex(x+s,y+s2);
  
  vertex(x+(s*2/3)+d+d/2,y+s2);
  vertex(x+(s*2/3)+d+d/2,y+s2-d);
  vertex(x+(s*2/3)+(d/2),y+s2-d);
  vertex(x+(s*2/3)+(d/2),y+s2-d*2);
  vertex(x+(s*2/3)-(d/2),y+s2-d*2);
  vertex(x+(s*2/3)-(d/2),y+s2-d);
  vertex(x+(s*2/3)-(d/2+d),y+s2-d);
  vertex((x+(s*2/3))-(d/2+d),y+s2);
  
  vertex(x+(s*1/3)+d+d/2,y+s2);
  vertex(x+(s*1/3)+d+d/2,y+s2-d);
  vertex(x+(s*1/3)+(d/2),y+s2-d);
  vertex(x+(s*1/3)+(d/2),y+s2-d*2);
  vertex(x+(s*1/3)-(d/2),y+s2-d*2);
  vertex(x+(s*1/3)-(d/2),y+s2-d);
  vertex(x+(s*1/3)-(d/2+d),y+s2-d);
  vertex((x+(s*1/3))-(d/2+d),y+s2);
  
  vertex(x,y+s2);
  
  vertex(x,y+((s2*2/3))+(d/2+d));
  vertex(x+d,y+((s2*2/3))+(d/2+d));
  vertex(x+d,y+((s2*2/3))+(d/2));
  vertex(x+d*2,y+((s2*2/3))+(d/2));
  vertex(x+d*2,y+((s2*2/3))-(d/2));
  vertex(x+d,y+((s2*2/3))-(d/2));
  vertex(x+d,y+((s2*2/3))-(d/2+d));
  vertex(x,y+((s2*2/3))-(d/2+d));
  
  vertex(x,y+((s2*1/3))+(d/2+d));
  vertex(x+d,y+((s2*1/3))+(d/2+d));
  vertex(x+d,y+((s2*1/3))+(d/2));
  vertex(x+d*2,y+((s2*1/3))+(d/2));
  vertex(x+d*2,y+((s2*1/3))-(d/2));
  vertex(x+d,y+((s2*1/3))-(d/2));
  vertex(x+d,y+((s2*1/3))-(d/2+d));
  vertex(x,y+((s2*1/3))-(d/2+d));
  
  vertex(x,y);
  endShape();
  
  beginShape();
  vertex(x+(s*1/3)-d/2,y+((s2*1/3))-(d/2+d));
  vertex(x+(s*1/3)+d/2,y+((s2*1/3))-(d/2+d));
  vertex(x+(s*1/3)+d/2,y+((s2*1/3))-(d/2));
  vertex(x+(s*1/3)+d+d/2,y+((s2*1/3))-(d/2));
  vertex(x+(s*1/3)+d+d/2,y+((s2*1/3))+(d/2));
  vertex(x+(s*1/3)+d/2,y+((s2*1/3))+(d/2));
  vertex(x+(s*1/3)+d/2,y+((s2*1/3))+(d+d/2));
  vertex(x+(s*1/3)-d/2,y+((s2*1/3))+(d+d/2));
  vertex(x+(s*1/3)-d/2,y+((s2*1/3))+(d/2));
  vertex(x+(s*1/3)-d/2-d,y+((s2*1/3))+(d/2));
  vertex(x+(s*1/3)-d/2-d,y+((s2*1/3))-(d/2));
  vertex(x+(s*1/3)-d/2,y+((s2*1/3))-(d/2));
  vertex(x+(s*1/3)-d/2,y+((s2*1/3))-(d/2+d));
  
  endShape();
  
  beginShape();
  vertex(x+(s*2/3)-d/2,y+((s2*1/3))-(d/2+d));
  vertex(x+(s*2/3)+d/2,y+((s2*1/3))-(d/2+d));
  vertex(x+(s*2/3)+d/2,y+((s2*1/3))-(d/2));
  vertex(x+(s*2/3)+d+d/2,y+((s2*1/3))-(d/2));
  vertex(x+(s*2/3)+d+d/2,y+((s2*1/3))+(d/2));
  vertex(x+(s*2/3)+d/2,y+((s2*1/3))+(d/2));
  vertex(x+(s*2/3)+d/2,y+((s2*1/3))+(d+d/2));
  vertex(x+(s*2/3)-d/2,y+((s2*1/3))+(d+d/2));
  vertex(x+(s*2/3)-d/2,y+((s2*1/3))+(d/2));
  vertex(x+(s*2/3)-d/2-d,y+((s2*1/3))+(d/2));
  vertex(x+(s*2/3)-d/2-d,y+((s2*1/3))-(d/2));
  vertex(x+(s*2/3)-d/2,y+((s2*1/3))-(d/2));
  vertex(x+(s*2/3)-d/2,y+((s2*1/3))-(d/2+d));
  endShape();
  
  beginShape();
  vertex(x+(s*2/3)-d/2,y+((s2*2/3))-(d/2+d));
  vertex(x+(s*2/3)+d/2,y+((s2*2/3))-(d/2+d));
  vertex(x+(s*2/3)+d/2,y+((s2*2/3))-(d/2));
  vertex(x+(s*2/3)+d+d/2,y+((s2*2/3))-(d/2));
  vertex(x+(s*2/3)+d+d/2,y+((s2*2/3))+(d/2));
  vertex(x+(s*2/3)+d/2,y+((s2*2/3))+(d/2));
  vertex(x+(s*2/3)+d/2,y+((s2*2/3))+(d+d/2));
  vertex(x+(s*2/3)-d/2,y+((s2*2/3))+(d+d/2));
  vertex(x+(s*2/3)-d/2,y+((s2*2/3))+(d/2));
  vertex(x+(s*2/3)-d/2-d,y+((s2*2/3))+(d/2));
  vertex(x+(s*2/3)-d/2-d,y+((s2*2/3))-(d/2));
  vertex(x+(s*2/3)-d/2,y+((s2*2/3))-(d/2));
  vertex(x+(s*2/3)-d/2,y+((s2*2/3))-(d/2+d));
  endShape();
  
  beginShape();
  vertex(x+(s*1/3)-d/2,y+((s2*2/3))-(d/2+d));
  vertex(x+(s*1/3)+d/2,y+((s2*2/3))-(d/2+d));
  vertex(x+(s*1/3)+d/2,y+((s2*2/3))-(d/2));
  vertex(x+(s*1/3)+d+d/2,y+((s2*2/3))-(d/2));
  vertex(x+(s*1/3)+d+d/2,y+((s2*2/3))+(d/2));
  vertex(x+(s*1/3)+d/2,y+((s2*2/3))+(d/2));
  vertex(x+(s*1/3)+d/2,y+((s2*2/3))+(d+d/2));
  vertex(x+(s*1/3)-d/2,y+((s2*2/3))+(d+d/2));
  vertex(x+(s*1/3)-d/2,y+((s2*2/3))+(d/2));
  vertex(x+(s*1/3)-d/2-d,y+((s2*2/3))+(d/2));
  vertex(x+(s*1/3)-d/2-d,y+((s2*2/3))-(d/2));
  vertex(x+(s*1/3)-d/2,y+((s2*2/3))-(d/2));
  vertex(x+(s*1/3)-d/2,y+((s2*2/3))-(d/2+d));
  endShape();
}

function deskMakuita(x,y){
  beginShape();
  vertex(x,y);
  vertex(x+d*2,y);
  vertex(x+d*2,y+d);
  vertex(x+(s*1/3)-d-d/2,y+d);
  vertex(x+(s*1/3)-d-d/2,y);
  vertex(x+(s*1/3)+d+d/2,y);
  vertex(x+(s*1/3)+d+d/2,y+d);
  vertex(x+(s*2/3)-d-d/2,y+d);
  vertex(x+(s*2/3)-d-d/2,y);
  vertex(x+(s*2/3)+d+d/2,y);
  vertex(x+(s*2/3)+d+d/2,y+d);
  vertex(x+s-d*2,y+d);
  vertex(x+s-d*2,y);
  vertex(x+s,y);
  vertex(x+s,y+d*2);
  vertex(x+s-d,y+d*2);
  vertex(x+s-d,y+s4);
  vertex(x+(s*2/3)+d/2,y+s4);
  vertex(x+(s*2/3)+d/2,y+s4-s4/2);
  vertex(x+(s*2/3)-d/2,y+s4-s4/2);
  vertex(x+(s*2/3)-d/2,y+s4);
  vertex(x+(s*1/3)+d/2,y+s4);
  vertex(x+(s*1/3)+d/2,y+s4-s4/2);
  vertex(x+(s*1/3)-d/2,y+s4-s4/2);
  vertex(x+(s*1/3)-d/2,y+s4);
  vertex(x+d,y+s4);
  vertex(x+d,y+d*2);
  vertex(x,y+d*2);
  vertex(x,y);
  endShape();
}

function deskMakuita2(x,y){
  beginShape();
  vertex(x,y);
  vertex(x+d*2,y);
  vertex(x+d*2,y+d);
  vertex(x+s4,y+d);
  vertex(x+s4,y+s2-d);
  vertex(x+d*2,y+s2-d);
  vertex(x+d*2,y+s2);
  vertex(x,y+s2);
  vertex(x,y+s2-d*2);
  vertex(x+d,y+s2-d*2);
  vertex(x+d,y+(s2*2/3)+d+d/2);
  vertex(x,y+(s2*2/3)+d+d/2);
  vertex(x,y+(s2*2/3)+d/2);
  vertex(x+s4/2,y+(s2*2/3)+d/2);
  vertex(x+s4/2,y+(s2*2/3)-d/2);
  vertex(x,y+(s2*2/3)-d/2);
  vertex(x,y+(s2*2/3)-d-d/2);
  vertex(x+d,y+(s2*2/3)-d-d/2);
  vertex(x+d,y+(s2*1/3)+d+d/2);
  vertex(x,y+(s2*1/3)+d+d/2);
  vertex(x,y+(s2*1/3)+d/2);
  vertex(x+s4/2,y+(s2*1/3)+d/2);
  vertex(x+s4/2,y+(s2*1/3)-d/2);
  vertex(x,y+(s2*1/3)-d/2);
  vertex(x,y+(s2*1/3)-d-d/2);
  vertex(x+d,y+(s2*1/3)-d-d/2);
  vertex(x+d,y+d*2);
  vertex(x,y+d*2);
  vertex(x,y);
  endShape();
}

function deskAshi(x,y){
  beginShape();
  vertex(x,y+d);
  vertex(x+(s*1/3)-d-d/2,y+d);
  vertex(x+(s*1/3)-d-d/2,y);
  vertex(x+(s*1/3)-d/2,y);
  vertex(x+(s*1/3)-d/2,y+d*2);
  vertex(x+(s*1/3)+d/2,y+d*2);
  vertex(x+(s*1/3)+d/2,y);
  vertex(x+(s*1/3)+d+d/2,y);
  vertex(x+(s*1/3)+d+d/2,y+d);
  
  vertex(x+(s*2/3)-d-d/2,y+d);
  vertex(x+(s*2/3)-d-d/2,y);
  vertex(x+(s*2/3)-d/2,y);
  vertex(x+(s*2/3)-d/2,y+d*2);
  vertex(x+(s*2/3)+d/2,y+d*2);
  vertex(x+(s*2/3)+d/2,y);
  vertex(x+(s*2/3)+d+d/2,y);
  vertex(x+(s*2/3)+d+d/2,y+d);
  
  vertex(x+s-d,y+d);
  vertex(x+s-d,y+s4);
  vertex(x+s,y+s4);
  vertex(x+s,y+s4+(s3-s4)/2);
  vertex(x+s-d,y+s4+(s3-s4)/2);
  vertex(x+s-d,y+s3);///////
  vertex(x+s-d-s5/2,y+s3);
  vertex(x+s-d-s5/2,y+s3-d);
  vertex(x+s-d-s5,y+s3-d);
  vertex(x+s-d-s6,y+s4);
  vertex(x+s8,y+s4);
  vertex(x+s5,y+s3-d);
  vertex(x+s5/2,y+s3-d);
  vertex(x+s5/2,y+s3);
  vertex(x,y+s3);
  vertex(x,y+s4+(s3-s4)/2);
  vertex(x+d,y+s4+(s3-s4)/2);
  vertex(x+d,y+s4);
  vertex(x,y+s4);
  vertex(x,y+d);
  endShape();
}

function deskAshi2(x,y){
  beginShape();
  vertex(x,y+d);
  
  vertex(x+(s2*1/3)-d-d/2,y+d);
  vertex(x+(s2*1/3)-d-d/2,y);
  vertex(x+(s2*1/3)-d/2,y);
  vertex(x+(s2*1/3)-d/2,y+d*2);
  vertex(x+(s2*1/3)+d/2,y+d*2);
  vertex(x+(s2*1/3)+d/2,y);
  vertex(x+(s2*1/3)+d+d/2,y);
  vertex(x+(s2*1/3)+d+d/2,y+d);
  
  vertex(x+(s2*2/3)-d-d/2,y+d);
  vertex(x+(s2*2/3)-d-d/2,y);
  vertex(x+(s2*2/3)-d/2,y);
  vertex(x+(s2*2/3)-d/2,y+d*2);
  vertex(x+(s2*2/3)+d/2,y+d*2);
  vertex(x+(s2*2/3)+d/2,y);
  vertex(x+(s2*2/3)+d+d/2,y);
  vertex(x+(s2*2/3)+d+d/2,y+d);
  
  vertex(x+s2-d,y+d);
  vertex(x+s2-d,y+s4);
  vertex(x+s2,y+s4);
  vertex(x+s2,y+s4+(s3-s4)/2);
  vertex(x+s2-d,y+s4+(s3-s4)/2);
  
  vertex(x+s2-d,y+s3);/////
  vertex(x+s2-d-s5/2,y+s3);
  vertex(x+s2-d-s5/2,y+s3-d);
  vertex(x+s2-d-s5,y+s3-d);
  vertex(x+s2-d-s7,y+s4);
  vertex(x+s9,y+s4);
  vertex(x+s5,y+s3-d);
  vertex(x+s5/2,y+s3-d);
  vertex(x+s5/2,y+s3);
  vertex(x,y+s3);
  vertex(x,y+s4+(s3-s4)/2);
  vertex(x+d,y+s4+(s3-s4)/2);
  vertex(x+d,y+s4);
  vertex(x,y+s4);
  vertex(x,y+d);
  endShape();
}

function deskAshisaki(x,y){
  beginShape();
  vertex(x+s5/2-d,y);
  vertex(x+s5/2-d+d,y);
  //vertex(x+s5+s5/2,y);
  vertex(x+s5+s5/2-d,y+s5+d-d);
  vertex(x+s5+s5/2-d,y+s5+d);
  vertex(x+s5-d,y+s5+d);
  vertex(x+s5-d,y+s5);
  vertex(x+s5/2,y+s5);
  vertex(x+s5/2,y+s5/2);
  vertex(x+s5/2-d,y+s5/2);
  vertex(x+s5/2-d,y);
  //vertex(x+s-s4/2,y+s3);
  endShape();
}

function drawChair() {
  fill(50);
  textSize(24);
  text("側面縦幅:" + (320 + s3 + d - (0 + yp5)) + "mm", 10, -50);
  text("側面横幅:" + (170 + d + s2) + "mm", 220, -50);
  text("必要パーツ数: 側面2つ 足先4つ その他1つずつ", 430, -50);

  fill(0, 255, 0);
  text("全体縦幅:" + (320 + s3 + d - (0 + yp5) + 20) + "mm", 10, 0);
  fill(255, 0, 0);
  text("全体横幅:" + (170 + d * 2 + s2) + "mm", 220, 0);
  fill(0, 0, 255);
  text("全体奥行き:" + (40 + s) + "mm", 430, 0);

  fill(50);
  text(length6 || "", 10, 60);

  translate(0, 300);

  // ここで椅子用の計算をしてから描画
  x1 = 140 + s8;
  y1 = 200 - d;
  x2 = 145 + s7 + s8;
  y2 = 100;

  x3 = 30;
y3 = 200;
x4 = 160 + s2;
y4 = 200;

xp6 = x3;
yp6 = y3;
xp7 = x4;
yp7 = y4;

yp3 = y1 - 20;
yp4 = y1 - 60;
yp8 = y4 - d / 9;

  resultX = calculateX(x1, y1, x2, y2, yp3);
  resultX2 = calculateX(x1, y1, x2, y2, yp4);
  resultX3 = calculateX(x1, y1, x2, y2, yp5);
  resultX4 = calculateX(x3, y3, x4, y4, yp8);

  let dx = x2 - x1;
  let dy = y2 - y1;
  let length = dist(x1, y1, x2, y2);

  let perpDx = -dy / length;
  let perpDy = dx / length;

  offsetX = perpDx * d;
  offsetY = perpDy * d;

  newX1 = x1 + offsetX;
  newY1 = y1 + offsetY;
  newX2 = resultX3 + offsetX;
  newY2 = yp5 + offsetY;

  let dx2 = x4 - x3;
  let dy2 = y4 - y3;
  let length3 = dist(x3, y3, x4, y4);

  let perpDx2 = -dy2 / length3;
  let perpDy2 = dx2 / length3;

  offsetX2 = perpDx2 * d;
  offsetY2 = perpDy2 * d;

  length2 = dist(resultX + s2, yp3, resultX2 + s2, yp4);
  length4 = dist(resultX2 + s2, yp4, resultX3 + s2, yp5);

  centerY = 120 + s3 + d;

  fill(255);
  noStroke();

  sokumen(30, 200);
  ue(230 + s2, 100);
  semotare(330 + s2 + s, 100);
  mae(450 + s2 + s * 2, 200 + s3);
  ushiro(500 + s2 + s * 3, 200 + s3);
  ashi(300 + s2, 50);
}

function drawDesk() {
  fill(0);
  textSize(24);
  text("横幅:"+s+"mm",10,-50);
  text("縦幅:"+s2+"mm",200,-50);
  text("脚長:"+s3+"mm",370,-50);
  text("板の厚さ:"+d+"mm",540,-50);
  text("幕板:"+s4+"mm",730,-50);
  text("足幅:"+s5+"mm",890,-50);
  text("必要パーツ数: 天板1つ 幕板2つずつ 脚2つずつ 足先4つ", 1050, -50);
  text("脚1右:"+s6+"mm",10,0);
  text("脚2右:"+s7+"mm",200,0);
  text("脚1左:"+s8+"mm",370,0);
  text("脚2左:"+s9+"mm",540,0);

  noFill();
  stroke(0);

  scale(0.5);
  translate(0,100);

  deskTenban(10,10);
  deskMakuita(10,30+910+s2-910);
  deskMakuita2(30+1820+s-1820,10);
  deskAshi(80+1820+s-1820+s4,10);
  deskAshi2(100+1820+(s*2)-1820+s4,10);
  deskAshisaki(130+1820+(s*2)-1820+s4+s2,10);
}