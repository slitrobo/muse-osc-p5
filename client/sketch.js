var display = {
	delta: null,
	theta: null,
	alpha: null,
	beta: null,
	gamma: null
};

var params = {
	offset: 3,
	size: 1,
	scale: 100
}


var img;

function setup() {

	createCanvas(512, 512);
	background(0);

	colorMode(HSL);

	display.delta = select('#n_delta');
	display.theta = select('#n_theta');
	display.alpha = select('#n_alpha');
	display.beta = select('#n_beta');
	display.gamma = select('#n_gamma');

	noStroke();

}

function draw() {

	// Delta
	fill(0, 100, 50);
	ellipse(width - params.offset, height / 2 - params.scale / 2 + osc.data.delta * params.scale, params.size, params.size);

	// Theta
	fill(25, 100, 50);
	ellipse(width - params.offset, height / 2 - params.scale / 2 + osc.data.theta * params.scale, params.size, params.size);

	// Alpha
	fill(60, 100, 50);
	ellipse(width - params.offset, height / 2 - params.scale / 2 + osc.data.alpha * params.scale, params.size, params.size);

	// Beta
	fill(150, 100, 50);
	ellipse(width - params.offset, height / 2 - params.scale / 2 + osc.data.beta * params.scale, params.size, params.size);

	// Gamma
	fill(220, 100, 50);
	ellipse(width - params.offset, height / 2 - params.scale / 2 + osc.data.gamma * params.scale, params.size, params.size);


	copy(0, 0, width, height, -0.5, 0, width, height);

	display.delta.html(osc.data.delta);
	display.theta.html(osc.data.theta);
	display.alpha.html(osc.data.alpha);
	display.beta.html(osc.data.beta);
	display.gamma.html(osc.data.gamma);


}
