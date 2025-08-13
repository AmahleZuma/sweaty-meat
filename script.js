
player = document.getElementById('player'); // This is my audio element
play_pause_button = document.getElementById('playpause'); // This is the play button

// Function to hide the audio element
function hide() {
    if (player){
        player.style.visibility = "hidden";
    }
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

play_pause_button.src = player.paused ? 'assets/play.svg' : 'assets/pause.svg' // Maintaining the default to play

hide() // Hide the audio element...looks ghetto and cheap

