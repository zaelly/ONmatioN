document.getElementById("hamburguer-icon").onclick = function(){
    document.getElementById("sliding-header-menu-outer").style.right = "0px";
  };
  document.getElementById("sliding-header-menu-close-button").onclick = function(){
    document.getElementById("sliding-header-menu-outer").style.right = "-320px";
  };

 let dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
let dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
  return new bootstrap.Dropdown(dropdownToggleEl)
})

document.getElementById("button-mode").addEventListener("click", function(){
  document.querySelector("body").setAttribute("class","dark");
});

