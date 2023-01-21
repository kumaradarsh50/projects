const panel = document.querySelectorAll('.panel');

panel.forEach((li) => {
  li.addEventListener('click', () => {
    removeActiveClass();
    li.classList.add('active');
  });
});

const removeActiveClass = () => {
  panel.forEach((li) => {
    li.classList.remove('active');
  });
};
