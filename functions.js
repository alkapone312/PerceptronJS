let c = document.createElement('canvas');
let width = window.innerWidth;
let height = window.innerHeight;
c.width = width;
c.height = height;
document.body.appendChild(c);
let ctx = c.getContext("2d");

function f(x)
{
	//y = ax + b
	return -0.66*x+0.2;
}


function strokeWeight(n)
{
	ctx.lineWidth = n;
}

function stroke(color)
{
	if(typeof color != 'undefined')
		ctx.strokeStyle = color;
	ctx.stroke();
}

function fill(color)
{
	if(typeof color != 'undefined')
		ctx.fillStyle = color;
	ctx.fill();
}

function line(x,y,x1,y1)
{
	ctx.beginPath();
	ctx.moveTo(x,y);
	ctx.lineTo(x1,y1);
}

function circle(x,y,r)
{
	ctx.beginPath();
	ctx.ellipse(x,y,r,r,0,Math.PI*2,0);
}

function clear()
{
	ctx.clearRect(0,0,width,height);
}