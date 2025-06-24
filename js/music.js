// const audio = new Audio("assets/audio/Entanglement.mp3"); // Replace with your song file
// const audioContext = new (window.AudioContext || window.webkitAudioContext)();
// const analyser = audioContext.createAnalyser();
// const source = audioContext.createMediaElementSource(audio);
// source.connect(analyser);
// analyser.connect(audioContext.destination);
// analyser.fftSize = 256;

// const bufferLength = analyser.frequencyBinCount;
// const dataArray = new Uint8Array(bufferLength);

// const sizeMultiplier = 0.5;

// const maxSize = 400;

// // Function to process audio and pulse glow
// function animateGlowWithMusic() {
// 	analyser.getByteFrequencyData(dataArray);

// 	let bass = dataArray.slice(0, 10).reduce((a, b) => a + b, 0) / 10; // Get bass intensity
// 	let intensity = bass / 255; // Normalize (0 to 1)

// 	const baseSize1 = 250;
// 	const baseSize2 = 350;

// 	intensity = Math.min(maxSize, (intensity * 100) ** 1.3) - (baseSize1 + 20);

// 	if (audioContext.currentTime >= audio.duration) {
// 		audioContext.close();
// 		intensity = 0;
// 	}

// 	// Apply glow size change based on bass intensity
// 	glowElement1.style.width = `${baseSize1 + intensity}px`;
// 	glowElement1.style.height = `${baseSize1 + intensity}px`;

// 	// Slightly delay second glow effect
// 	glowElement2.style.width = `${baseSize2 + intensity}px`;
// 	glowElement2.style.height = `${baseSize2 + intensity}px`;

// 	requestAnimationFrame(animateGlowWithMusic);
// }

// // Smooth transition
// glowElement1.style.transition = "width 0.2s ease, height 0.05s ease";
// glowElement2.style.transition = "width 0.2s ease, height 0.2s ease";

// // Start music and animation on user interaction (required by browsers)
// // document.addEventListener("click", () => {
// // 	if (audioContext.state === "suspended") {
// // 		audioContext.resume();
// // 	}
// // 	audio.play();
// // 	animateGlowWithMusic();
// // });
