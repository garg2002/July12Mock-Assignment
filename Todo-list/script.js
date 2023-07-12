var inputBox = document.getElementById("input");
var addButton = document.getElementById("button");

addButton.addEventListener("click", function () {
    var text = inputBox.value;
    if (text === "") {
        alert("Please enter something!");
        return;
    }       
    var list = document.getElementById("list");
    var newListItem = document.createElement("li");
    newListItem.innerHTML = text;
    list.appendChild(newListItem);
    inputBox.value = "";    
     
});