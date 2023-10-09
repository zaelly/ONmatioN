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
});
let alphabet = document.getElementById('alphabet');

document.querySelector('.dropdown-menu').addEventListener('click', function () {

  
});

document.addEventListener('DOMContentLoaded', function() {
  const slider = document.getElementById('arrastavel');
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX);
    slider.scrollLeft = scrollLeft - walk;
  });
});

