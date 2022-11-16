import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (data) { 
    
};
player.on('timeupdate', onPlay);
localStorage.setItem('videoplayer-current-time', 'currentTime');



