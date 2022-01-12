const musicdiv = document.getElementsByClassName("musicdiv")[0];

musicdiv.style.width = "100%";
let musicbtn = document.getElementsByClassName("music")[0];
let closemusic = document.getElementsByClassName("close")[4];
let maximizemusic = document.getElementsByClassName("maximize")[4];

let musicStartmenu = document.getElementById("3");

//open music player
musicbtn.addEventListener("dblclick", function () {
  open(musicdiv);
});

musicStartmenu.addEventListener("click", function () {
  open(musicdiv);
  startmenuTransition();
});

//close btn for music player
closemusic.addEventListener("click", function () {
  closeFunc(musicdiv);
  track.pause();
});

//maximize button for music player

maximizemusic.addEventListener("click", function () {
  maximizeFunc(musicdiv);
});

const track = document.getElementById("track");
const thumbnail = document.getElementById("thumbnail");
const background = document.getElementById("background");
const trackArtist = document.getElementById("track-artist");
const trackTitle = document.getElementById("track-title");
const progressBar = document.getElementById("progressBar");
const currentTime = document.getElementById("currentTime");
const durationTime = document.getElementById("durationTime");

let play = document.getElementById("play");
let pause = document.getElementById("pause");
let next = document.getElementById("next-track");
let prev = document.getElementById("prev-track");
trackIndex = 0;

tracks = [
  "./music/demons.mp3",
  "./music/middlechild.mp3",
  "./music/stressedout.mp3",
  "./music/numb.mp3",
];
thumbnails = [
  "https://i1.sndcdn.com/artworks-000206628688-vv8i37-t500x500.jpg",
  "https://i1.sndcdn.com/artworks-000486290040-93nkso-t500x500.jpg",
  "https://i1.sndcdn.com/artworks-000202188614-hljd01-t500x500.jpg",
  "https://i1.sndcdn.com/artworks-000105604285-me2956-t500x500.jpg",
];
trackArtists = [
  "Imagine Dragons",
  "J COle",
  "21 Pilots",
  "Linkin Park",
  "Nepathya",
];
trackTitles = ["Demons", "MiddleChild", "StressedOut", "Numb", "Bheda Ko OOn"];

let playing = true;

function pausePlay() {
  if (playing) {
    play.style.display = "none";
    pause.style.display = "block";

    thumbnail.style.transform = "scale(1.25)";

    track.play();
    playing = false;
  } else {
    pause.style.display = "none";
    play.style.display = "block";

    thumbnail.style.transform = "scale(1)";

    track.pause();
    playing = true;
  }
}

play.addEventListener("click", pausePlay);
pause.addEventListener("click", pausePlay);

track.addEventListener("ended", nextTrack);

function nextTrack() {
  trackIndex++;
  if (trackIndex > tracks.length - 1) {
    trackIndex = 0;
  }

  track.src = tracks[trackIndex];
  thumbnail.src = thumbnails[trackIndex];
  background.src = thumbnails[trackIndex];

  trackArtist.textContent = trackArtists[trackIndex];
  trackTitle.textContent = trackTitles[trackIndex];

  playing = true;
  pausePlay();
}

next.addEventListener("click", nextTrack);

function prevTrack() {
  trackIndex--;
  if (trackIndex < 0) {
    trackIndex = tracks.length - 1;
  }

  track.src = tracks[trackIndex];
  thumbnail.src = thumbnails[trackIndex];
  background.src = thumbnails[trackIndex];

  trackArtist.textContent = trackArtists[trackIndex];
  trackTitle.textContent = trackTitles[trackIndex];

  playing = true;
  pausePlay();
}

prev.addEventListener("click", prevTrack);

function progressValue() {
  progressBar.max = track.duration;
  progressBar.value = track.currentTime;

  currentTime.textContent = formatTime(track.currentTime);
  durationTime.textContent = formatTime(track.duration);
}

setInterval(progressValue, 500);

function formatTime(sec) {
  let minutes = Math.floor(sec / 60);
  let seconds = Math.floor(sec - minutes * 60);
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
}

function changeProgressBar() {
  track.currentTime = progressBar.value;
}

progressBar.addEventListener("click", changeProgressBar);
