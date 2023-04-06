import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

player.on('timeupdate', throttle(function() {
  player.getCurrentTime().then(function(seconds) {
    localStorage.setItem('videoplayer-current-time', seconds);
  }).catch(function(error) {
    console.log('Error');
  });
}, 1000));

function onPlay() {
  const savedTime = localStorage.getItem('videoplayer-current-time');
  if (savedTime) {
    player.setCurrentTime(savedTime).then(function(seconds) {
    }).catch(function(error) {
      console.log('Error');
    });
  }
}

player.on('play', onPlay);

