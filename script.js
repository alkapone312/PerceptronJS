let points = new Array();

let brain = new Perceptron();


function draw()
{
	points.push(new Point());
	clear();

	//draw cartesian and line

	line(width/2,0,width/2,height);
	stroke('lightgray');
	line(0,height/2,width,height/2);
	stroke('lightgray');

	let p1 = new Point(-1, f(-1));
	let p2 = new Point(1, f(1));

	strokeWeight(3);
	line(p1.getX(), p1.getY(), p2.getX(), p2.getY());
	stroke("black");

	let pp1 = new Point(-1,brain.guessY(-1));
	let pp2 = new Point(1,brain.guessY(1));
	line(pp1.getX(), pp1.getY(), pp2.getX(), pp2.getY());
	stroke('blue');

	for (let p of points)
	{
		p.show();
		let inputs = [p.x, p.y, 1];
		let target = p.label;

		circle(p.getX(), p.getY(), 5);
		if(brain.guess(inputs) == p.label)
			fill('green');
		else
			fill('red');

		brain.train(inputs, target);
	}

}

setInterval(draw, 50);