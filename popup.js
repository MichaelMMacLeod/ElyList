inputTextField = document.getElementById('inputTextField');
inputForm      = document.getElementById('inputForm');
taskList       = document.getElementById('taskList');

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('inputForm').addEventListener('submit', function(e) {
        e.preventDefault();

        var node = document.createElement("LI");
        var text = document.createTextNode(inputTextField.value);

        node.appendChild(text);
        taskList.appendChild(node);

        inputTextField.value = "";
    });
});