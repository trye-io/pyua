function checkArraysOrder(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

function checkArrange(button_name, containerID, orderedIDs, success_messages, failure_messages) {

  const container = document.getElementById(containerID);
  const currentOrder = Array.from(container.children).map(box => box.id);

  /* var success_messages = [
      "Way to go 🌟",
      "You are amazing 🤩",
      "Cool 😎"
    ];

  var failure_messages = [
      "Oops, almost 😬",
      "It's slightly different 🙊",
      "Never give up 🚀"
  ]; */

  const button = document.getElementById(button_name);
  const message = document.createElement('div');

  if (checkArraysOrder(currentOrder, orderedIDs)) {

    message.textContent = success_messages[Math.floor(Math.random() * success_messages.length)];
    message.className = 'success';

  } else {
    message.textContent = failure_messages[Math.floor(Math.random() * failure_messages.length)];
    message.className = 'failure';

    // Move elements in the right order
    for (const elementID of orderedIDs) {
        container.appendChild(document.getElementById(elementID));
    }

  }

  button.parentNode.replaceChild(message, button);

}
