const toggleMode = document.getElementById('toggle-mode');
const container = document.querySelector('.container');
const navbar = document.querySelector('.navbar');
const title = document.querySelector('.title');
const textcontent = document.querySelector('.textcontent');
const navbarmenu = document.querySelectorAll('.navbarmenu li a');

toggleMode.addEventListener('change', () => {
  if (toggleMode.checked) {
    document.body.classList.add('dark-mode');
    navbar.classList.add('dark-mode');
    navbarmenu.forEach(item => item.classList.add('dark-mode'));
    title.classList.add('dark-mode');
    container.classList.add('dark-mode');
    textcontent.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
    navbar.classList.remove('dark-mode');
    container.classList.remove('dark-mode');
    title.classList.remove('dark-mode');
    navbarmenu.forEach(item => item.classList.remove('dark-mode'));
    textcontent.classList.remove('dark-mode');
  }
});
