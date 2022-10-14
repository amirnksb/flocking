const flock = [];

let slideAlign, slideCohesion, slideSeparate;

function setup() {
	createCanvas(640, 360);
	slideAlign = createSlider(0, 5, 1, 0.1)
	slideCohesion = createSlider(0, 5, 1, 0.1)
	slideSeparate = createSlider(0, 5, 1, 0.1)
	for (let i = 0; i < 100; i++) {
		flock.push(new Boid());
	}

}

function draw() {
	background(51);

	for (let boid of flock) {
		boid.edges();
		boid.flock(flock);
		boid.update();
		boid.show();
	}
}
