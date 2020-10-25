function sign(n)
{
	if(n>=0)
		return 1;
	return -1;
}


class Perceptron{
	constructor()
	{
		this.weights = new Array(3);
		this.lr = 0.0001;
		for (var i = this.weights.length - 1; i >= 0; i--) {
			this.weights[i] = Math.random()*2-1;
		}
	}

	guess(inputs)
	{
		let sum = 0;
		for (var i = inputs.length - 1; i >= 0; i--) {
			sum += inputs[i] * this.weights[i];
		}
		return sign(sum);
	}

	guessY(x)
	{
		let w0 = this.weights[0];
		let w1 = this.weights[1];
		let w2 = this.weights[2];
		return (-w2/w1) - (w0/w1) * x;
	}

	train(inputs, target)
	{
		let guess = this.guess(inputs);
		let error = target - guess;

		for (var i = this.weights.length - 1; i >= 0; i--) {
			this.weights[i] += error * inputs[i] * this.lr;
		}
	}

}