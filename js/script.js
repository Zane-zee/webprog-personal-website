document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('nav a');
    let currentSection = 'about-me';

    // Navigation handling
    function switchSection(targetId) {
        sections.forEach(section => {
            section.classList.remove('active');
            section.style.display = 'none';
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-target') === targetId) {
                link.classList.add('active');
            }
        });

        const targetSection = document.getElementById(targetId);
        targetSection.style.display = 'block';
        setTimeout(() => targetSection.classList.add('active'), 50);
        currentSection = targetId;
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');
            switchSection(targetId);
        });
    });

    // Form handling
    const surveyForm = document.getElementById('survey-form');
    if (surveyForm) {
        surveyForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const notification = document.getElementById('notification');
            
            // Simulate form submission
            notification.textContent = 'Thank you for your feedback!';
            notification.style.display = 'block';
            
            setTimeout(() => {
                notification.style.opacity = '0';
                setTimeout(() => {
                    notification.style.display = 'none';
                    notification.style.opacity = '1';
                }, 500);
            }, 3000);

            surveyForm.reset();
        });
    }

    // Initialize first section
    switchSection('about-me');
});

const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const task = input.value.trim();
  if (!task) return;

  const li = document.createElement('li');
  li.innerHTML = `
    <span>${task}</span>
    <button class="delete">Delete</button>
  `;
  list.appendChild(li);
  input.value = '';

  // Add delete functionality
  li.querySelector('.delete').addEventListener('click', function() {
    li.remove();
  });
});