function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);
    var targetElement = event.target;

    if (targetElement.className === "answer_pool" ||
        targetElement.className === "bucket") {

        targetElement.appendChild(draggedElement);

    } else if (targetElement.className === "element" &&
               (targetElement.parentNode.className === "answer_pool" ||
               targetElement.parentNode.className === "bucket")) {

        var container = targetElement.parentNode;
        var items = Array.from(container.getElementsByClassName("element"));
        var currentIndex = items.indexOf(draggedElement);
        var targetIndex = Array.from(targetElement.parentNode.children).indexOf(targetElement);

        if (currentIndex > targetIndex) {
            container.insertBefore(draggedElement, targetElement);
        } else if (currentIndex < targetIndex) {
            container.insertBefore(draggedElement, targetElement.nextSibling);
        }
    } else if (targetElement.tagName === "CODE" &&
               targetElement.parentNode.className === "element" &&
               (targetElement.parentNode.parentNode.className === "answer_pool" ||
                targetElement.parentNode.parentNode.className === "bucket")) {

        var container = targetElement.parentNode.parentNode;
        var items = Array.from(container.getElementsByClassName("element"));
        var currentIndex = items.indexOf(draggedElement);
        var targetIndex = Array.from(container.children).indexOf(targetElement.parentNode);

        if (currentIndex > targetIndex) {
            container.insertBefore(draggedElement, targetElement.parentNode);
        } else if (currentIndex < targetIndex) {
            container.insertBefore(draggedElement, targetElement.parentNode.nextSibling);
        }

    }
}
