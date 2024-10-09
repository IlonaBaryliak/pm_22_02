document.querySelectorAll(".skill").forEach((skill) => {
  const progress = skill.querySelector(".progress");

  // Отримуємо ширину прогресу
  const width = progress.style.width; // Наприклад, "80%"

  // Встановлюємо позицію квадратика
  progress.style.setProperty("--progress-width", width);
});
document.addEventListener("DOMContentLoaded", function() {
  const skills = document.querySelectorAll('.skill');

  skills.forEach((skill, index) => {
    setTimeout(() => {
      skill.classList.add('visible'); // Додаємо клас видимості
    }, index * 300); // Затримка для кожного елемента
  });
});