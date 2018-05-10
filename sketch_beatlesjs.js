var img;
var xInc, yInc;
var resolution;
var mx, my;
function preload(){
  img = loadImage("assets/beatles.jpg");
}

function setup() {
  createCanvas(img.width, img.height);
  ellipseMode(CORNER);
  resolution=60;
  xInc = img.width/resolution;
  yInc = img.height/resolution;
  mx = -100;
  my = -100;
  //img.loadPixels();
}

function fget(img, x, y) {
  var index = (y * img.width + x) * 4;
  var r = img.pixels[index];
  var g = img.pixels[index+1];
  var b = img.pixels[index+2];
  var a = img.pixels[index+3];
  return color(r, g, b);
}

function draw() {
  img.loadPixels();
  for (var y=0; y<resolution; y++) {
    for (var x=0; x<resolution; x++) {
      var ix = x * xInc;
      var iy = y * yInc;
      //fill(fget(img, ix+xInc/2, iy+yInc/2));
      fill(fget(img, ix, iy));
      //fill(img.pixels[]);
      ellipse(ix, iy, xInc, yInc);
    }
  }
  
  if (mouseIsPressed) {

    loadPixels();
    var mx = mouseX;
    var my = mouseY;
    var winsize = 80;
    for (var y = my-winsize/2; y < my+winsize/2; y++) {
      if (y < 0 || height <= y) {
        continue;
      }
      for (var x = mx-winsize/2; x < mx+winsize/2; x++) {
        if (0 <= x && x < width) {
          index = (y*width+x) * 4;
          pixels[index] = img.pixels[index];//img.get(x, y);
          pixels[index+1] = img.pixels[index+1];
          pixels[index+2] = img.pixels[index+2];
          pixels[index+3] = img.pixels[index+3];
        }
      }
    }
    updatePixels();
   
  }
}
