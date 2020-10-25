class Point
{
	constructor(x,y)
	{
		if(typeof x != 'undefined' && typeof y != 'undefined')
		{
			this.x = x;
			this.y = y;
		}
		else
		{
			this.x = Math.random()*2-1;
			this.y = Math.random()*2-1;
		}
		this.label;

		if(this.y > f(this.x))
			this.label = 1;
		else
			this.label = -1;
	}

	getX()
	{
		return this.x * width/2 + width/2;
	}

	getY()
	{
		return -this.y * height/2 + height/2;
	}

	show()
	{
		circle(this.getX(), this.getY(), 10);
		if(this.label == 1)
			fill('black');
		else
			fill('white');
		stroke('black');

	}


}