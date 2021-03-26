let secondTexts = document.querySelectorAll('.second-nav-text')
const menuToggle = document.querySelector('#menu-toggle')
const secondaryMenu = document.querySelector('#secondary-menu')
const secondaryMenuEls = document.querySelectorAll('.side-nav-li')
menuToggle.addEventListener('click', e=> {
        if (secondaryMenu.classList.contains('w-56')) {
            secondaryMenu.classList.remove('w-56')
            secondaryMenu.classList.add('w-16')
            secondaryMenuEls.forEach(node => {
                node.classList.add('closed')
            })
        } else {
            secondaryMenu.classList.remove('w-16')
            secondaryMenu.classList.add('w-56')
            secondaryMenuEls.forEach(node => {
                node.classList.remove('closed')
            })
        }
})




const dropDowns = document.querySelectorAll('.dropdown-holder');

dropDowns.forEach(function(node) {
    node.addEventListener('mouseover', function() {
        node.querySelector('.main-dropdown').style="display:initial";
    })

    node.addEventListener('mouseout', function() {
        node.querySelector('.main-dropdown').style="display:none";
    })
})


