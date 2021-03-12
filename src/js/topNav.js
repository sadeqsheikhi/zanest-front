(function() {
const dropDowns = document.querySelectorAll('.dropdown-holder');

dropDowns.forEach(function(node) {
    node.addEventListener('mouseover', function() {
        node.querySelector('.main-dropdown').style="display:initial";
    })

    node.addEventListener('mouseout', function() {
        node.querySelector('.main-dropdown').style="display:none";
    })
})


let hamburgerButton = document.querySelector("#menu-toggle")
let secondaryMenu = document.querySelector("#secondary-menu")
hamburgerButton.addEventListener('click', function() {
    console.log('hiiii')
    secondaryMenu.classList.toggle('hidden')
    secondaryMenu.classList.toggle("md:hidden")
    console.log('hey')
})

})()