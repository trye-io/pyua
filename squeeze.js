function addTooltip(button) {
    var tooltip = document.createElement("span");
    tooltip.className = "tooltip";
    tooltip.textContent = "Ми зараз над цим працюємо 🤫";
    button.appendChild(tooltip);
}

/* Listener to adjust header buttons' text when widnow is squeezed */
window.addEventListener('DOMContentLoaded', function() {

    var maxWidth = 150;

    var lectureButtons = document.querySelectorAll('.lecture');
    var podcastButtons = document.querySelectorAll('.podcast');
    var notebookButtons = document.querySelectorAll('.notebook');
    var exercisesButtons = document.querySelectorAll('.exercises');
    var cheatButtons = document.querySelectorAll('.cheat');

    function updateButtonText() {

        for (var i = 0; i < lectureButtons.length; i++) {
            var button = lectureButtons[i];
            if (button.offsetWidth < maxWidth) {
                button.textContent = '🎥';
            } else {
                button.textContent = '🎥 Лекція';
            }
            if (button.disabled) {
                addTooltip(button);
            }
            
        }

        for (var i = 0; i < podcastButtons.length; i++) {
            var button = podcastButtons[i];
            if (button.offsetWidth < maxWidth) {
                button.textContent = '🎙';
            } else {
                button.textContent = '🎙️ Подкаст';
            }
            if (button.disabled) {
                addTooltip(button);
            }
        }

        for (var i = 0; i < notebookButtons.length; i++) {
            var button = notebookButtons[i];
            if (button.offsetWidth < maxWidth) {
                button.textContent = '📓';
            } else {
                button.textContent = '📓 Записник';
            }
            if (button.disabled) {
                addTooltip(button);
            }
        }

        for (var i = 0; i < exercisesButtons.length; i++) {
            var button = exercisesButtons[i];
            if (button.offsetWidth < maxWidth) {
                button.textContent = '🤸';
            } else {
                button.textContent = '🤸 Вправи';
            }
            if (button.disabled) {
                addTooltip(button);
            }
        }

        for (var i = 0; i < cheatButtons.length; i++) {
            var button = cheatButtons[i];
            if (button.offsetWidth < maxWidth) {
                button.textContent = '📝';
            } else {
                button.textContent = '📝 Шпора';
            }
            if (button.disabled) {
                addTooltip(button);
            }
        }

  }

  updateButtonText();

  window.addEventListener('resize', function() {
      updateButtonText();
  });

});