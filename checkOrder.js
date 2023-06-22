function checkArraysOrder(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

function checkOrder(button_name, containerID, orderedIDs) {
    
  const container = document.getElementById(containerID);
  const currentOrder = Array.from(container.children).map(box => box.id);
  
  var success_messages = [
      "Так тримати, чемпіон 🌟",
      "Просто супер 🤩",
      "Ти -- молодец 😎",
      "Йой, бачу довідченого кодера 🤓",
      "А ти точно не прцював в OpenAI до цього 🤖"
  ];
  
  var failure_messages = [
      "Упс, ще трошки 😬",
      "Це не зовсім те, що ми мали на увазі, але вже близько 🙊",
      "Ти ще на один крок ближче до успіху, тільки не здавайся 🚀",
      "Нічого, головне не здаватися 💪"
  ];
  
  const button = document.getElementById(button_name);
  const message = document.createElement('div');
  
  if (checkArraysOrder(currentOrder, orderedIDs)) {
    
    message.textContent = success_messages[Math.floor(Math.random() * success_messages.length)];
    message.className = 'success';

  } else {
    message.textContent = failure_messages[Math.floor(Math.random() * failure_messages.length)];
    message.className = 'failure';
  }
  
  button.parentNode.replaceChild(message, button);
  
}