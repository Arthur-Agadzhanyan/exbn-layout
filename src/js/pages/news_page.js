if (document.querySelector('.news_page')) {
    const audioPlayers = document.querySelectorAll(".podcast__list .list__item");
    const podcastItems = document.que

    let players;

    startplayer()

    function startplayer() {
        players = document.querySelectorAll('.podcast_player');

        players.forEach(audio => {
            audio.controls = false;
        })
    }

    function play_aud(player) {
        player.play();
    }

    function pause_aud(player) {
        player.pause();
    }

    function stop_aud(player) {
        player.pause();
        player.currentTime = 0;
    }

    audioPlayers.forEach(audioPlayer=>{
        const playBtn = audioPlayer.querySelector(".controls .toggle-play");
        const audio = audioPlayer.querySelector(".podcast_player");
        
            playBtn.addEventListener(
                "click",
                () => {
                    if (audio.paused) {
                        playBtn.classList.remove("play");
                        playBtn.classList.add("pause");
                        audio.play();
                    } else {
                        playBtn.classList.remove("pause");
                        playBtn.classList.add("play");
                        audio.pause();
                    }
                },
                false
            );
    })
}