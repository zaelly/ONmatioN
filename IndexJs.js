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

  
})