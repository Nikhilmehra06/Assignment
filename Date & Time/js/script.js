'use strict';
const currentDate = new Date();
const date = document.getElementById('date');

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
let day = currentDate.getDate();
let month = months[currentDate.getMonth()];
let year = currentDate.getFullYear();

function showTime() {
  const currentTime = new Date();
  document.getElementById('time').innerHTML = currentTime.toLocaleTimeString();
}
setInterval(showTime, 1000);

date.innerHTML = `${day}-${month}-${year}`;
