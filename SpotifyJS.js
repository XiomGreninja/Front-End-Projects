console.log("Welcome to Spotify");

// Initialise the Variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');

let songs = [
    {songName: "Youtube NonSense EDM", filePath: "songs/1.mp3", coverPath: "cover/1.jpg"},
    {songName: "Youtube NonSense EDM", filePath: "songs/1.mp3", coverPath: "cover/1.jpg"},
    {songName: "Youtube NonSense EDM", filePath: "songs/1.mp3", coverPath: "cover/1.jpg"},
    {songName: "Youtube NonSense EDM", filePath: "songs/1.mp3", coverPath: "cover/1.jpg"},
    {songName: "Youtube NonSense EDM", filePath: "songs/1.mp3", coverPath: "cover/1.jpg"},
    {songName: "Youtube NonSense EDM", filePath: "songs/1.mp3", coverPath: "cover/1.jpg"},
    {songName: "Youtube NonSense EDM", filePath: "songs/1.mp3", coverPath: "cover/1.jpg"},
    {songName: "Youtube NonSense EDM", filePath: "songs/1.mp3", coverPath: "cover/1.jpg"},
    {songName: "Youtube NonSense EDM", filePath: "songs/1.mp3", coverPath: "cover/1.jpg"},
    {songName: "Youtube NonSense EDM", filePath: "songs/1.mp3", coverPath: "cover/1.jpg"},
]




// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    }
})

// Listen to Events
document.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    // Update Seekbar
})
