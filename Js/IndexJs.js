// document.getElementById("hamburguer-icon").onclick = function(){
//     document.getElementById("sliding-header-menu-outer").style.right = "0px";
//   };
//   document.getElementById("sliding-header-menu-close-button").onclick = function(){
//     document.getElementById("sliding-header-menu-outer").style.right = "-320px";
//   };

//  let dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
// let dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
//   return new bootstrap.Dropdown(dropdownToggleEl)
// })

document.querySelector('.ball').addEventListener('click', (e)=>{
  e.target.classList.toggle('ball-move');
  document.body.classList.toggle('dark');

  const elementsToChange = document.querySelectorAll('h3, h4, div');

  const modoDark = document.body.classList.contains('dark');
  localStorage.setItem('darkMode', modoDark);
  
  elementsToChange.forEach(element => {
      if (modoDark) {
        element.style.color = 'white';
      } else {
        element.style.color = 'black';
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const salvarDarkMode = localStorage.getItem('darkMode');
  
    if (salvarDarkMode === 'true') {
      document.body.classList.add('dark');
  
      const elementsToChange = document.querySelectorAll('h3, h4, div');
      elementsToChange.forEach(element => {
        element.style.color = 'white';
      });
  
      document.querySelector('.ball').classList.add('ball-move');
    }

//fazer com que o traço quando o fundo estiver branco seja preto e quando estiver preto seja esta cor "rgb(0, 221, 255)"
});

const arrastavel = document.getElementById('arrastavel');
let isMouseDown = false;
let startX, scrollLeft;

arrastavel.addEventListener('mousedown', (e) => {
  isMouseDown = true;
  startX = e.pageX - arrastavel.offsetLeft;
  scrollLeft = arrastavel.scrollLeft;
});

arrastavel.addEventListener('mouseup', () => {
  isMouseDown = false;
});

arrastavel.addEventListener('mousemove', (e) => {
  if (!isMouseDown) return;
  e.preventDefault();
  const x = e.pageX - arrastavel.offsetLeft;
  const walk = (x - startX) * 1;
  arrastavel.scrollLeft = scrollLeft - walk;
});


