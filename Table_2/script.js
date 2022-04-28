const name = document.getElementById('name').value;
const email = document.getElementById('email').value;

function add() {
  document.getElementById('tableName').innerHTML = name;
  document.getElementById('tableEmail').innerHTML = email;
}

function RemoveRow() {
  // event.target will be the input element.
  var td = event.target.parentNode;
  var tr = td.parentNode; // the row to be removed
  tr.parentNode.removeChild(tr);
}
