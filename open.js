function openDetailsById(id) {
  const detailsElement = document.getElementById(id);
  if (detailsElement) {
    detailsElement.open = true;
    detailsElement.scrollIntoView({ behavior: 'smooth', block: "start" });
  }
}

window.addEventListener('DOMContentLoaded', function() {
    const radioButtons = document.getElementsByName('create');
    const submitButton = document.getElementById('check-btn');

    radioButtons.forEach(function(radioButton) {
      radioButton.addEventListener('change', function() {
        submitButton.disabled = false;
      });
    });
});

window.addEventListener('DOMContentLoaded', function() {
    const radioButtons = document.getElementsByName('mcq_scalars_1');
    const submitButton = document.getElementById('check_scalars_1');

    radioButtons.forEach(function(radioButton) {
      radioButton.addEventListener('change', function() {
        submitButton.disabled = false;
      });
    });
});

window.addEventListener('DOMContentLoaded', function() {
    const radioButtons = document.getElementsByName('mcq_scalars_2');
    const submitButton = document.getElementById('check_scalars_2');

    radioButtons.forEach(function(radioButton) {
      radioButton.addEventListener('change', function() {
        submitButton.disabled = false;
      });
    });
});

window.addEventListener('DOMContentLoaded', function() {
    const radioButtons = document.getElementsByName('mcq_scalars_3');
    const submitButton = document.getElementById('check_scalars_3');

    radioButtons.forEach(function(radioButton) {
      radioButton.addEventListener('change', function() {
        submitButton.disabled = false;
      });
    });
});

window.addEventListener('DOMContentLoaded', function() {
    const radioButtons = document.getElementsByName('mcq_scalars_4');
    const submitButton = document.getElementById('check_scalars_4');

    radioButtons.forEach(function(radioButton) {
      radioButton.addEventListener('change', function() {
        submitButton.disabled = false;
      });
    });
});

window.addEventListener('DOMContentLoaded', function() {
    const radioButtons = document.getElementsByName('mcq_scalars_5');
    const submitButton = document.getElementById('check_scalars_5');

    radioButtons.forEach(function(radioButton) {
      radioButton.addEventListener('change', function() {
        submitButton.disabled = false;
      });
    });
});

window.addEventListener('DOMContentLoaded', function() {
    const radioButtons = document.getElementsByName('mcq_scalars_6');
    const submitButton = document.getElementById('check_scalars_6');

    radioButtons.forEach(function(radioButton) {
      radioButton.addEventListener('change', function() {
        submitButton.disabled = false;
      });
    });
});

window.addEventListener('DOMContentLoaded', function() {
    const radioButtons = document.getElementsByName('mcq_scalars_8');
    const submitButton = document.getElementById('check_scalars_8');

    radioButtons.forEach(function(radioButton) {
      radioButton.addEventListener('change', function() {
        submitButton.disabled = false;
      });
    });
});


function checkAnswer(button_name, radio_name) {
    
  const radioButtons = document.getElementsByName(radio_name);
  let hasTrueValue = true;
  
  for (var i = radioButtons.length - 1; i >= 0; i--) {
    const radioButton = radioButtons[i];
    const text = radioButton.value === 'true' ? '✅' : '❌';
    const textElement = document.createElement('span');
    textElement.textContent = text;
    textElement.style.width = '20px';
    radioButton.parentNode.replaceChild(textElement, radioButton);
    
    if ((radioButton.checked && radioButton.value != 'true') || (!radioButton.checked && radioButton.value != 'false')) {
      hasTrueValue = false;
    }
    
  }
  
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
  
  if (hasTrueValue) {
    
    message.textContent = success_messages[Math.floor(Math.random() * success_messages.length)];
    message.className = 'success';

  } else {
    message.textContent = failure_messages[Math.floor(Math.random() * failure_messages.length)];
    message.className = 'failure';
  }
  
  button.parentNode.replaceChild(message, button);
  
}
