let video;
let m;
let m1;
let m2; 
let m3;
let m4;
let m5;
let angle=0

let pics=[];
let numPics=4;



function preload(){
 let pic1=loadImage('assets/test.png');
 let pic2=loadImage('assets/t2.png');
  let pic3=loadImage('assets/test3.png')
let pic4=loadImage('assets/izgastuve.png');
  m1=loadImage('assets/maiss1.png');
  m=loadImage('assets/mmaiss.png');
  m3=loadImage ('assets/maiss3.png');
  m4=loadImage ('assets/maiss4.png');
  m5=loadImage ('assets/maiss5.png');
  
  //let pic4=loadImage('assets/maiss1.png')
  pics =[pic1,pic2,pic3,pic4];
}

function setup() {
  // Create a video capture object
 video = createCapture(VIDEO);
  video.size(windowWidth, windowHeight);
  video.hide(); // Hide the default video element

  // Create a canvas to draw on
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // Draw the video on the canvas
  image(video, 0, 0, width, height);
  

  // Draw on top of the video

   if( mouseX > width*0.3 &&
       mouseY > height*0.3 &&
      mouseX < width*0.8 
     ){
     z=true}
    else{
     z=false}
  
   let b=random(width)
   let f=random(height)
   
   if(z === true){
    filter(GRAY); 
    filter(INVERT);
     
     
     push();
     translate(width*0.6,height*0.2)
     rotate(angle);
     imageMode(CENTER)
     image(m5,mouseX-500,mouseY/2);
     pop();
     
     push();
     translate(width*0.8,height*0.8)
     rotate(angle);
     imageMode(CENTER)
     image(m1,mouseX-600,0);
     pop();
     
     push();
     translate(width/2,height/2)
     rotate(angle);
     imageMode(CENTER)
     image(m,0,0);
     pop();
     
     push();
     translate(width*0.3,height*0.7)
     rotate(angle);
     imageMode(CENTER)
     image(m3,0,mouseY-500);
     pop(); 
     angle += radians(2)
    
      push();
     translate(width*0.9,height*0.7)
     rotate(angle);
     imageMode(CENTER)
     image(m4,mouseX-300,0);
     pop();
     
      
   
   }

   if( z === true&& 
      mouseIsPressed){
     
     let randoImg = random(pics)
     image(randoImg,0,0,width,height); 
     //noLoop()

   }
}
function mouseReleased() {
    // Check if the mouse is within the rectangle
    if (mouseX > width*0.4 &&
      mouseY > height*0.5 &&
      mouseX < width*0.8 ) {
       //Open a link
      window.open('https://editor.p5js.org/renate.taurite/full/wOpvJkbF_');
    }
}
   
   
     

