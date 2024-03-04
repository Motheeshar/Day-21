var listOfActivities = [];
//This array will store the list of activities entered by the user.
var input = document.getElementById("input");
//This variable references the input field in the HTML.
var todolist = document.getElementById("todolist");
//This variable references the unordered list in the HTML.
document.getElementById("button").onclick = click;
//This line assigns the click function to the click event of the button.
function click() {
//This function is called when the button is clicked.
  listOfActivities.push(input.value);
  console.log(listOfActivities);
  input.value = "";
  showList();
}



function showList() {

  todolist.innerHTML = " ";


  listOfActivities.forEach(function (n, i) {
    todolist.innerHTML +=
      "<li>" +
      n +
      "<a onclick='editItem(" +
      i +
      ")'>Edit</a>" +
      "<a onclick='deleteItem(" +
      i +
      ")'>&times | </a></li>";
  });
}

function deleteItem(i) {
  listOfActivities.splice(i, 1);
  showList();
}

function editItem(i) {
  var newValue = prompt("Please insert your new value");
  listOfActivities.splice(i, 1, newValue);
  showList();
}
