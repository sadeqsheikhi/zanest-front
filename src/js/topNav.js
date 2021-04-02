let secondTexts = document.querySelectorAll('.second-nav-text')

const main = document.querySelector('main')

// shows dropdowns on hover
const dropDowns = document.querySelectorAll('.dropdown-holder');
dropDowns.forEach(function(node) {
    node.addEventListener('mouseover', function() {
        node.querySelector('.main-dropdown').style="display:initial";
    })

    node.addEventListener('mouseout', function() {
        node.querySelector('.main-dropdown').style="display:none";
    })
})


