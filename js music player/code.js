const audioPlayer = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const stopBtn = document.getElementById('stop-btn');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const volumeSlider = document.getElementById('volume-slider');
const trackTitle = document.getElementById('track-title');

// Array of song objects
const playlist = [
    { title: "Song 1", src: "song1.mp3" },
    { title: "Song 2", src: "song2.mp3" },
    { title: "Song 3", src: "song3.mp3" }
];

let currentTrackIndex = 0;

// Load the first track
function loadTrack(index) {
    audioPlayer.src = playlist[index].src;
    trackTitle.textContent = playlist[index].title;
    audioPlayer.play();
}

// Play the current track
playBtn.addEventListener('click', () => {
    audioPlayer.play();
});

// Pause the current track
pauseBtn.addEventListener('click', () => {
    audioPlayer.pause();
});

// Stop the current track
stopBtn.addEventListener('click', () => {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
});

// Play the next track
nextBtn.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
    loadTrack(currentTrackIndex);
});

// Play the previous track
prevBtn.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    loadTrack(currentTrackIndex);
});

// Adjust the volume
volumeSlider.addEventListener('input', (e) => {
    audioPlayer.volume = e.target.value;
});

// Automatically load the first track when the page loads
window.addEventListener('load', () => {
    loadTrack(currentTrackIndex);
});
