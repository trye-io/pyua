function checkShort(button_id, input_id, correct_answer, success_messages, failure_messages) {

    const button = document.getElementById(button_id);
    const input = document.getElementById(input_id);
    const message = document.createElement('div');

    if (input.value.trim() === correct_answer) {
        message.textContent = success_messages[Math.floor(Math.random() * success_messages.length)];
        message.className = 'success';
    } else {
        message.textContent = failure_messages[Math.floor(Math.random() * failure_messages.length)];
        message.className = 'failure';
        // Set the value of input to the correct_answer
        input.value = correct_answer;
    }

    button.parentNode.replaceChild(message, button);

}
