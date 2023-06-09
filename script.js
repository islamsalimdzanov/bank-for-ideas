const projectsButton = document.getElementById('projects-btn');
const workersButton = document.getElementById('workers-btn');
const projectsContent = document.getElementById('projects-content');
const workersContent = document.getElementById('workers-content');

  // Обработчик события для кнопки проектов
  projectsButton.addEventListener('click', () => {
    projectsContent.style.display = 'block'; // Отображаем контент проектов
    workersContent.style.display = 'none'; // Скрываем контент сотрудников
    projectsButton.classList.add('active'); // Добавляем класс "active" к кнопке проектов
    workersButton.classList.remove('active'); // Удаляем класс "active" у кнопки сотрудников
  });

  // Обработчик события для кнопки сотрудников
  workersButton.addEventListener('click', () => {
    workersContent.style.display = 'block'; // Отображаем контент сотрудников
    projectsContent.style.display = 'none'; // Скрываем контент проектов
    workersButton.classList.add('active'); // Добавляем класс "active" к кнопке сотрудников
    projectsButton.classList.remove('active'); // Удаляем класс "active" у кнопки проектов
  });