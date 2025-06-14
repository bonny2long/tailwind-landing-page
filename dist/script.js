const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

btn.addEventListener('click', () => {
  btn.classList.toggle('open');
  nav.classList.toggle('flex');
  nav.classList.toggle('hidden');
});

// Select all elements with the class 'copyright-year' and the one with id 'current-year'
const yearElements = document.querySelectorAll(
  '.copyright-year, #current-year'
);
const currentYear = new Date().getFullYear();

// Loop through each selected element and update its text content
yearElements.forEach(element => {
  element.textContent = currentYear;
});
