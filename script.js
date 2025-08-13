
player = document.getElementById('player'); // This is my audio element
play_pause_button = document.getElementById('playpause'); // This is the play button
progress = document.querySelector(".seeker");
currentTime = document.getElementById('current-time');
duration = document.getElementById('duration')

// Function to hide the audio element
function hide() {
    if (player){
        player.style.visibility = "hidden";
    }
}

// This updates the progressbar
function updateProgress() {
    progress.value = (player.currentTime / player.duration) * 100 // A percentage of how far we've gone
    currentTime.textContent = formatTime(player.currentTime);

    // If duration is available...update it then
    if (!isNaN(player.duration)) {
        duration.textContent = formatTime(player.duration)
    }

    // Update the gradient fill
    let percent = (player.currentTime / player.duration) * 100;
    progress.style.setProperty('--seek-before-width', `${percent}%`);
}

// formatting time from seconds to MM:SS
function formatTime(seconds) {
    minutes = Math.floor(seconds/60);
    secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// Sets the progress bar when clicked
function setProgress() {
    newTime = (progress.value * player.duration) / 100;
    player.currentTime = newTime;

    // Update the fill immediately
    progress.style.setProperty('--seek-before-width', `${progress.value}%`);
}

// the function for playing and pausing the audio
play_pause_button.addEventListener('click', function() {
    if (player.paused) { // audio will play
        player.play();
        play_pause_button.src = 'assets/pause.svg'
        console.log('Play!');
    } else { // audio will pause
        player.pause();
        play_pause_button.src = 'assets/play.svg'
        console.log('Paused!');
    };

});

// Update the bar as the audio plays
player.addEventListener('timeupdate', updateProgress);

// Update duration as per the metadata
player.addEventListener('loadmetadata', function() {
    duration.textContent = formatTime(player.duration);
});

// Allow seeker to be interactive via clicking
progress.addEventListener('input', setProgress);

play_pause_button.src = player.paused ? 'assets/play.svg' : 'assets/pause.svg' // Maintaining the default to play

hide() // Hide the audio element...looks ghetto and cheap

