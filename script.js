player = document.getElementById('player');
play_pause_button = document.getElementById('playpause');

function hide() {
    if (player){
        player.style.visibility = "hidden";
    }
}

play_pause_button.addEventListener('click', function() {
    console.log('Play!');
});

hide()