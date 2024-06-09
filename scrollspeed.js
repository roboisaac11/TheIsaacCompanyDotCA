
const audioElements = document.querySelectorAll('.audio');
const progressBars = document.querySelectorAll('.progress1');

const playPauseButton = document.querySelectorAll('.play-button');

playPauseButton.forEach((button, index) => {
    button.addEventListener('click', (e) => {
        const audio = audioElements[index];
        if (audio.paused) {
            audio.play();
            button.textContent = 'Pause';
        } else {
            audio.pause();
            button.textContent = 'Play';
        }
    });
});
audioElements.forEach((audio, index) => {
    audio.addEventListener('timeupdate', () => {
        const currentTime = audio.currentTime;
        const duration = audio.duration;
        const progressPercentage = (currentTime / duration) * 100;
        progressBars[index].value = progressPercentage;
    });

    progressBars[index].addEventListener('input', (e) => {
        const seekTime = (e.target.value / 100) * audio.duration;
        audio.currentTime = seekTime;
    });
});
