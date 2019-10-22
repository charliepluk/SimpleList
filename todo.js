// Enter key listener
var inputBox = document.getElementById("taskInput");
inputBox.addEventListener('keyup', function(event) {
    if (event.defaultPrevented) {
        return false;
    }
    var key = event.keyCode;
    if (key === 13) {
        newListItem();
    }
})

// Creating a new list item
function newListItem() {
    if (document.getElementById("taskInput").value !== '') {
        // Create new li tag
        var li = document.createElement("li");

        // Create input checkbox
        var input = document.createElement("input");
        input.className = "toggle";
        input.type = "checkbox";

        // Create task text
        var label = document.createElement("label")
        var taskInput = document.getElementById("taskInput").value;
        var text = document.createTextNode(taskInput);
        label.appendChild(text);

        // Create close button for li tag
        var button = document.createElement("button");
        var t = document.createTextNode("\u00D7");
        button.className = "close";
        button.appendChild(t);

        // Append to li tag
        li.appendChild(input);
        li.appendChild(label);
        li.appendChild(button);

        // Listener for checkbox changed
        li.children[0].addEventListener('change', function() {
            if(li.children[0].checked) {
                li.classList.toggle('checked');
            }
            else {
                li.classList.toggle('checked');
            }
        });

        // Add li item to task list.
        document.getElementById("list").appendChild(li);
        document.getElementById("taskInput").value = "";

        // Click listener for closing task items
        var close = document.getElementsByClassName("close");
        for (let i = 0; i < close.length; i++) {
            close[i].onclick = function () {
                var div = this.parentElement;
                div.style.display = "none";
            }
        }
    }
}