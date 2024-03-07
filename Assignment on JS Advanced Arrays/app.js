var listOfActivities = [];
var input = document.getElementById("input");
var todolist = document.getElementById("todolist");
document.getElementById("button").onclick = click;

function click() {
  listOfActivities.push(input.value);
  input.value = "";
  showList();
}

function showList() {
  todolist.innerHTML = "";
  listOfActivities.forEach((activity, index) => {
    todolist.innerHTML += `<li>${activity}<a onclick='editItem(${index})'>Edit</a><a onclick='deleteItem(${index})'>&times | </a></li>`;
  });
}

function deleteItem(index) {
  listOfActivities.splice(index, 1);
  showList();
}

function editItem(index) {
  var newValue = prompt("Please insert your new value");
  listOfActivities.splice(index, 1, newValue);
  showList();
}
