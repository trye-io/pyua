function checkBucket(button_name, bucketsIDs, elementsIDs, success_messages, failure_messages) {

    let correctAnswer = true;

    for (let i = 0; i < bucketsIDs.length; i++) {

        const bucket = document.getElementById(bucketsIDs[i]);
        const elementsInBucket = Array.from(bucket.children).map(box => box.id);

        if (elementsInBucket.sort().join(',') != elementsIDs[i].sort().join(',')) {
            correctAnswer = false;
        }

    }

    const button = document.getElementById(button_name);
    const message = document.createElement('div');

  if (correctAnswer) {

    message.textContent = success_messages[Math.floor(Math.random() * success_messages.length)];
    message.className = 'success';

  } else {
    message.textContent = failure_messages[Math.floor(Math.random() * failure_messages.length)];
    message.className = 'failure';

    // Move elements to the correct buckets
    for (let i = 0; i < bucketsIDs.length; i++) {
        const bucket = document.getElementById(bucketsIDs[i]);
        const elementsInBucket = Array.from(bucket.children).map(box => box.id);
        for (const elementID of elementsIDs[i]) {
            if (!elementsInBucket.includes(elementID)) {
                bucket.appendChild(document.getElementById(elementID));
            }
        }
    }

  }

  button.parentNode.replaceChild(message, button);

}
