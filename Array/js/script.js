const list = document.getElementById('list');
let givenNames = new Array();

for (let i = 0; i < 5; i++) {
  let name = prompt('Enter some names. Only letters and digits are accepted!');

  givenNames.push(name);
}

list.innerHTML = givenNames.sort().join('<br>');
