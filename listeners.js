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
        }
        
        for (var i = 0; i < podcastButtons.length; i++) {
            var button = podcastButtons[i];
            if (button.offsetWidth < maxWidth) {
                button.textContent = '🎙';
            } else {
                button.textContent = '🎙️ Подкаст';
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

/* Listeners to enable quizzes' buttons when an option is selected */

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

window.addEventListener('DOMContentLoaded', function() {
    const radioButtons = document.getElementsByName('mcq_list_1');
    const submitButton = document.getElementById('check_list_1');

    radioButtons.forEach(function(radioButton) {
      radioButton.addEventListener('change', function() {
        submitButton.disabled = false;
      });
    });
});

window.addEventListener('DOMContentLoaded', function() {
    const radioButtons = document.getElementsByName('mcq_list_2');
    const submitButton = document.getElementById('check_list_2');

    radioButtons.forEach(function(radioButton) {
      radioButton.addEventListener('change', function() {
        submitButton.disabled = false;
      });
    });
});

window.addEventListener('DOMContentLoaded', function() {
    const radioButtons = document.getElementsByName('mcq_list_3');
    const submitButton = document.getElementById('check_list_3');

    radioButtons.forEach(function(radioButton) {
      radioButton.addEventListener('change', function() {
        submitButton.disabled = false;
      });
    });
});

window.addEventListener('DOMContentLoaded', function() {
    const radioButtons = document.getElementsByName('mcq_list_4');
    const submitButton = document.getElementById('check_list_4');

    radioButtons.forEach(function(radioButton) {
      radioButton.addEventListener('change', function() {
        submitButton.disabled = false;
      });
    });
});

window.addEventListener('DOMContentLoaded', function() {
    const radioButtons = document.getElementsByName('mcq_list_5');
    const submitButton = document.getElementById('check_list_5');

    radioButtons.forEach(function(radioButton) {
      radioButton.addEventListener('change', function() {
        submitButton.disabled = false;
      });
    });
});

window.addEventListener('DOMContentLoaded', function() {
    const radioButtons = document.getElementsByName('mcq_list_6');
    const submitButton = document.getElementById('check_list_6');

    radioButtons.forEach(function(radioButton) {
      radioButton.addEventListener('change', function() {
        submitButton.disabled = false;
      });
    });
});

window.addEventListener('DOMContentLoaded', function() {
    const radioButtons = document.getElementsByName('mcq_list_7');
    const submitButton = document.getElementById('check_list_7');

    radioButtons.forEach(function(radioButton) {
      radioButton.addEventListener('change', function() {
        submitButton.disabled = false;
      });
    });
});

window.addEventListener('DOMContentLoaded', function() {
    const radioButtons = document.getElementsByName('mcq_list_8');
    const submitButton = document.getElementById('check_list_8');

    radioButtons.forEach(function(radioButton) {
      radioButton.addEventListener('change', function() {
        submitButton.disabled = false;
      });
    });
});

window.addEventListener('DOMContentLoaded', function() {
    const radioButtons = document.getElementsByName('mcq_list_9');
    const submitButton = document.getElementById('check_list_9');

    radioButtons.forEach(function(radioButton) {
      radioButton.addEventListener('change', function() {
        submitButton.disabled = false;
      });
    });
});

window.addEventListener('DOMContentLoaded', function() {
    const radioButtons = document.getElementsByName('mcq_list_10');
    const submitButton = document.getElementById('check_list_10');

    radioButtons.forEach(function(radioButton) {
      radioButton.addEventListener('change', function() {
        submitButton.disabled = false;
      });
    });
});

window.addEventListener('DOMContentLoaded', function() {
    const radioButtons = document.getElementsByName('mcq_tuple_1');
    const submitButton = document.getElementById('check_tuple_1');

    radioButtons.forEach(function(radioButton) {
      radioButton.addEventListener('change', function() {
        submitButton.disabled = false;
      });
    });
});

window.addEventListener('DOMContentLoaded', function() {
    const elements = document.getElementsByName('drg');
    const checkButton = document.getElementById('check_tuple_1');
    
    elements.forEach(function(element) {
        element.addEventListener('dragend', function() {
            
            const pool = document.getElementById('pool_c');
            
            
            if(pool.getElementsByClassName("element").length === 0) {
                checkButton.disabled = false;
            }
        });
    });
});
