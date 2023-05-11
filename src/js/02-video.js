import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const getDurationTime = data => {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};

player.on('timeupdate', throttle(getDurationTime, 1000));
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
