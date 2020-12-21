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









})()