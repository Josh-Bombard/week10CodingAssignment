let id = 0;
//do the javascript of inserting all of the data into the table, create rows for the new individual meals, and add a delete button, also make sure that the forms get zerod out on each create click.
document.getElementById(`add`).addEventListener(`click`, () => {
  let createdDate = new Date();
  let table = document.getElementById(`list`);
  let row = table.insertRow(1);
  row.setAttribute(`id`, `item-${id}`);
  row.insertCell(0).innerHTML = document.getElementById(`new-meal`).value;
  row.insertCell(1).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth() + 1}-${createdDate.getDate()}`;
  row.insertCell(2).innerHTML = document.getElementById(`new-meal-date`).value
  row.insertCell(3).innerHTML = document.getElementById(`new-ingredients`).value
  let actions = row.insertCell(4);
  actions.appendChild(createDeleteButton(id++));
  document.getElementById(`new-meal-date`).value = ``;
  document.getElementById(`new-meal`).value = ``;
  document.getElementById(`new-ingredients`).value = ``;
});

// make a function that creates the delete button and is reactive to when it is clicked
function createDeleteButton(id) {
  let btn = document.createElement(`button`);
  btn.className = `btn btn-secondary`;
  btn.id = id;
  btn.innerHTML = `Delete`;
  btn.onclick = () => {
    console.log(`Deleting row with id: item-${id}`);
    let elementToDelete = document.getElementById(`item-${id}`);
    elementToDelete.parentNode.removeChild(elementToDelete);
  }
  return btn;
}