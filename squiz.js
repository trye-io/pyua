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
        }
        
        for (var i = 0; i < podcastButtons.length; i++) {
            var button = podcastButtons[i];
            if (button.offsetWidth < maxWidth) {
                button.textContent = '🎙';
            } else {
                button.textContent = '🎙️ Подкас';
            }
        }
        
        for (var i = 0; i < notebookButtons.length; i++) {
            var button = notebookButtons[i];
            if (button.offsetWidth < maxWidth) {
                button.textContent = '📓';
            } else {
                button.textContent = '📓 Записник';
            }
        }
        
        for (var i = 0; i < exercisesButtons.length; i++) {
            var button = exercisesButtons[i];
            if (button.offsetWidth < maxWidth) {
                button.textContent = '🤸';
            } else {
                button.textContent = '🤸 Вправи';
            }
        }
        
        for (var i = 0; i < cheatButtons.length; i++) {
            var button = cheatButtons[i];
            if (button.offsetWidth < maxWidth) {
                button.textContent = '📝';
            } else {
                button.textContent = '📝 Шпора';
            }
        }
        
  }
  
  updateButtonText();
  
  window.addEventListener('resize', function() {
      updateButtonText();
  });
  
});