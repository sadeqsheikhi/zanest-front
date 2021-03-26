let secondTexts = document.querySelectorAll('.second-nav-text')
const menuToggle = document.querySelector('#menu-toggle')
const secondaryMenu = document.querySelector('#secondary-menu')
const secondaryMenuEls = document.querySelectorAll('.side-nav-li')
const main = document.querySelector('main')

// handles toggle button for secondary menu
menuToggle.addEventListener('click', e=> {

        // when it becomes smaller
        if (secondaryMenu.classList.contains('w-56')) {

            secondaryMenu.classList.remove('w-56')
            secondaryMenu.classList.add('w-16')
            main.style.paddingRight = '4rem'
            secondaryMenuEls.forEach(node => {
                node.classList.add('closed')
            })

            // becoming Bigger
        } else {
            secondaryMenu.classList.remove('w-16')
            secondaryMenu.classList.add('w-56')
            main.style.paddingRight = '14rem'
            secondaryMenuEls.forEach(node => {
                node.classList.remove('closed')
            })
        }
})


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


