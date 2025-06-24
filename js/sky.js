
const sky = document.querySelector('.sky');
const numStars = 200;
let stars = [];



// Function to generate random position and size for stars
function generateStars() {
	for (let i = 0; i < numStars; i++) {
		let star = document.createElement('div');
		star.classList.add('star');
		star.style.width = `${Math.random() * 3 + 1}px`; // random size between 1px and 3px
		star.style.height = star.style.width;
		star.style.top = `${Math.random() * 100}vh`; // random position in viewport height
		star.style.left = `${Math.random() * 100}vw`; // random position in viewport width

		// Random animation delay to make twinkling different for each star
		let randomDelay = Math.random() * 2; // Random delay between 0 and 2 seconds
		star.style.animationDelay = `${randomDelay}s`;

		// Initialize velocity for each star (initially 0)
		star.velocityX = 0;
		star.velocityY = 0;

		// Random drift speed for each star
		star.driftX = (Math.random() - 0.5) * 0.05; // Slight drift in X direction
		star.driftY = (Math.random() - 0.5) * 0.05; // Slight drift in Y direction

		sky.appendChild(star);
		stars.push(star);
	}
}

// Function to attract stars towards mouse cursor with momentum and flow
function handleMouseMove(event) {
	const mouseX = event.clientX;
	const mouseY = event.clientY;

	stars.forEach(star => {
		let starRect = star.getBoundingClientRect();
		let starX = starRect.left + starRect.width / 2;
		let starY = starRect.top + starRect.height / 2;

		// Calculate distance between mouse and star
		let deltaX = mouseX - starX;
		let deltaY = mouseY - starY;
		let distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

		// Apply a small force towards the cursor (with velocity)
		let moveFactor = 0.1;
		let moveX = deltaX * moveFactor / distance;
		let moveY = deltaY * moveFactor / distance;

		// Apply velocity to move the stars smoothly towards the mouse
		star.velocityX += moveX;
		star.velocityY += moveY;

		// Apply momentum when the mouse moves away (slow down over time)
		star.velocityX *= 0.98; // Gradual deceleration (momentum effect)
		star.velocityY *= 0.98; // Gradual deceleration (momentum effect)

		// Update the position of the star
		star.style.transform = `translate(${star.velocityX * 10}px, ${star.velocityY * 10}px)`;
	});
}

// Function to apply random flow when the mouse is not moving
function applyRandomFlow() {
	stars.forEach(star => {
		// Apply random drift movement while preserving momentum
		star.velocityX += star.driftX;
		star.velocityY += star.driftY;

		// Gradually slow down drift (you can tweak this to make it more/less intense)
		star.velocityX *= 0.795;
		star.velocityY *= 0.795;

		// Update the position with the new velocity
		star.style.transform = `translate(${star.velocityX * 10}px, ${star.velocityY * 10}px)`;
	});
}

// Initialize stars and event listeners
generateStars();
document.addEventListener('mousemove', handleMouseMove);

// Apply random flow every frame to simulate subtle movement
setInterval(applyRandomFlow, 20); // Adjust interval for smoother flow
