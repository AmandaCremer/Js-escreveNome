function setup() {
    createCanvas(700,700);
    background('#C674D8');
   
   }
   
   function draw() {
   
     fill('black')
   // console.log (mouseIsPressed)
     if(mouseIsPressed)
   rect(mouseX,mouseY,20,30);
     
   }  
