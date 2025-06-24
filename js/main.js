const svgPath = document.querySelector(".logo path");
const svgElement = document.querySelector(".logo svg");
const title = document.querySelector(".title");
const content = document.querySelector(".content");
const logoContainer = document.querySelector(".logo");
const totalLength = svgPath.getTotalLength();

const logo_speed = 1.5

const glowElement1 = document.getElementById("glow1");
const glowElement2 = document.getElementById("glow2");

const backgroundOverlay = document.getElementById("background-overlay");

const circles = {
	"front": {
		"element": glowElement1,
		"range": 80,
		"x": 0,
		"y": 0
	},
	"middle": {
		"element": glowElement2,
		"range": 120,
		"x": 0,
		"y": 0
	},
}


let mouseX = 0, mouseY = 0; // Mouse position
const inertiaFactor = 0.15; // Smoothing factor for glow movement
const maxStretch = 1.5;     // Max scale factor for stretching


// Update target mouse position
window.addEventListener("mousemove", (e) => {
	mouseX = e.clientX;
	mouseY = e.clientY;
});
function animateGlow() {
	const rect = logoContainer.getBoundingClientRect();
	const centerX = rect.left + rect.width / 2;
	const centerY = rect.top + rect.height / 2;

	Object.keys(circles).forEach(element => {
		var values = circles[element]

		// Calculate target offsets relative to the logo center
		let targetX = Math.max(Math.min((mouseX - centerX) / 5, 30), -30);
		let targetY = Math.max(Math.min((mouseY - centerY) / 5, 30), -30);

		if (Math.abs(mouseX - centerX) / 5 > values["range"] || Math.abs(mouseY - centerY) / 5 > values["range"]) {
			targetX = 0;
			targetY = 0;
		}

		// Smoothly move glow toward target position
		values["x"] += (targetX - values["x"]) * inertiaFactor;
		values["y"] += (targetY - values["y"]) * inertiaFactor;

		// Apply glow position relative to logo center
		values["element"].style.transform = `translate(calc(-50% + ${values["x"]}px), calc(-50% + ${values["y"]}px))`;

	});

	// Request next animation frame
	requestAnimationFrame(animateGlow);
}
animateGlow();

// Sync glow opacity with scroll
window.addEventListener("scroll", () => {
	const scrollPos = window.scrollY;
	const windowHeight = window.innerHeight;

	// Adjust opacity based on scroll
	const progress = Math.min(scrollPos / (windowHeight * logo_speed), 1);

	Object.keys(circles).forEach(element => {
		circles[element]["element"].style.opacity = `${1 - progress}`;
	})
});

function easeOutQuad(t) {
	return t * (2 - t);
}

window.addEventListener("load", () => {
	let space_needed = window.innerHeight * logo_speed - 600 //-600 because it seems to be going a little long
	content.style.marginTop = `${space_needed}px`;
})

window.addEventListener("scroll", () => {
	const scrollPos = window.scrollY;
	const windowHeight = window.innerHeight;

	// Calculate eased progress
	const progress = Math.min(scrollPos / (windowHeight * logo_speed), 1);
	const easedProgress = easeOutQuad(progress);

	// Change background opacity
	//backgroundOverlay.style.opacity = 1 - easedProgress;

	// Update stroke-dashoffset for disappearance effect
	const offset = easedProgress * totalLength;
	svgPath.style.strokeDashoffset = offset;

	// Update glow intensity
	const glowOpacity = 1 - easedProgress; // Fade glow as logo disappears
	svgElement.style.filter = `drop-shadow(0 0 ${10 + easedProgress * 10}px rgba(0, 0, 255, ${glowOpacity * 0.6}))`;

	// Fade out title and show content
	if (progress >= 1) {
		title.style.opacity = 0;
		title.style.transform = "translateY(-20px)";
		content.classList.add("active");
	} else {
		title.style.opacity = 1;
		title.style.transform = "translateY(0)";
		content.classList.remove("active");
	}
});