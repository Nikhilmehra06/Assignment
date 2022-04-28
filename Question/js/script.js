'use strict';

const btn = document.getElementById('btn');
const submitHandler = () => {
  let ans = document.getElementById('ans').value;

  if (ans === '') {
    document.getElementById('alert').innerHTML = 'Answer cannot be empty';
  } else if (ans > 4) {
    document.getElementById('alert').innerHTML = 'Oops Higher Number';
  } else if (ans < 4) {
    document.getElementById('alert').innerHTML = 'You are so close';
  } else if (ans == 4) {
    document.getElementById('alert').innerHTML = 'Wohoo Right answer';
  } else {
    document.getElementById('alert').innerHTML = 'Enter a number';
  }
};

btn.addEventListener('click', submitHandler);
