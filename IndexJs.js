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
  
  elementsToChange.forEach(element => {
      if (element.style.color === 'black' || element.style.color === '') {
          element.style.color = 'white';
      } else {
          element.style.color = 'black';
      }
  });
})


