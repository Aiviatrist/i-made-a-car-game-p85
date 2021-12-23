var canvas= document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");

var width=75;
var height=100;
var xc=5;
var yc=225;

var background_image = "parkingLot.jpg";
var greencar_image = "car2.png";



function add() {
  bg=new Image();
  bg.onload=ubg;
  bg.src=background_image;
  cg=new Image();
  cg.onload=ucg;
  cg.src=greencar_image;
}

function ubg() {
	ctx.drawImage(bg,0,0,canvas.width,canvas.height);
}

function ucg() {
	ctx.drawImage(cg,xc,yc,width,height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(yc>=0){
		yc=yc-10;
		ubg();
		ucg();
	}
}

function down()
{
	if(yc<=350){
		yc=yc+10;
		ubg();
		ucg();
	}
}

function left()
{
	if(xc>=0){
		xc=xc-10;
		ubg();
		ucg();
	}
}

function right()
{
	if(xc<=750){
		xc=xc+10;
		ubg();
		ucg();
	}
}
