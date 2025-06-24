const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause');
const progressContainer = document.getElementById('progress-container');
const progressBar = document.getElementById('progress-bar');

let currentSong = null;

document.querySelectorAll('.song-card').forEach(card => {
  card.addEventListener('click', () => {
    const songSrc = card.getAttribute('data-src');
    if (currentSong !== songSrc) {
      currentSong = songSrc;
      audio.src = songSrc;
      audio.play();
      playPauseBtn.classList.add('playing');
    } 
  });
});

playPauseBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.classList.add('playing');
  } else {
    audio.pause();
    playPauseBtn.classList.remove('playing');
  }
});

audio.addEventListener('timeupdate', () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = progress + '%';
});

progressContainer.addEventListener('click', e => {
  const width = progressContainer.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
});





const section = document.getElementById('music-section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
}, {
  threshold: 0.60,    // fire as soon as any pixel is visible/invisible
});

observer.observe(section);

