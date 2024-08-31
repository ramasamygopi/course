const menuBtn = document.querySelector('.menu-btn');
const navList = document.querySelector('.nav-list');
const navItems = document.querySelectorAll('.nav-list li');

menuBtn.addEventListener('click', () => {
  navList.classList.toggle('active');
});

navItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.target.getAttribute('href');
    document.querySelector(target).scrollIntoView({
      behavior: 'smooth'
    });
    navList.classList.remove('active');
  });
});