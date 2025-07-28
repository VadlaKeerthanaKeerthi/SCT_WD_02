let [hours, minutes, seconds] = [0, 0, 0];
let timer = null;

const display = document.getElementById('display');
const laps = document.getElementById('laps');

document.getElementById('start').addEventListener('click', () => {
  if (timer !== null) return;
  timer = setInterval(updateTime, 1000);
});

document.getElementById('pause').addEventListener('click', () => {
  clearInterval(timer);
  timer = null;
});

document.getElementById('reset').addEventListener('click', () => {
  clearInterval(timer);
  timer = null;
  [hours, minutes, seconds] = [0, 0, 0];
  display.innerText = '00:00:00';
  laps.innerHTML = '';
});

document.getElementById('lap').addEventListener('click', () => {
  const li = document.createElement('li');
  li.innerText = display.innerText;
  laps.appendChild(li);
});

function updateTime() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  display.innerText = `${format(hours)}:${format(minutes)}:${format(seconds)}`;
}

function format(unit) {
  return unit < 10 ? '0' + unit : unit;
}
