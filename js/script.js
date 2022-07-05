let video = document.getElementsByClassName('video')[0]

function play() {
    video.play();
}

function pause() {
    video.pause();
}

function most() {
    video.playbackRate += 0.10;
}

function less() {
    video.playbackRate -= 0.10;
}

function voltar() {
    video.currentTime -= 10;
}

function avancar() {
    video.currentTime += 10;
}