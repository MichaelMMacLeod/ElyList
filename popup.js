document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('inputForm').addEventListener('submit', function(e) {
        document.getElementById('taskList').appendChild(document.createTextNode(e));
        e.preventDefault();
    });
});