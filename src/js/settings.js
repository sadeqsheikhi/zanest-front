(function() {

const addNewTopic = document.querySelectorAll(".add-topic");

addNewTopic.forEach(node => {
    node.addEventListener('click', function() {
        const mainSection = node.parentElement;
        const nextElement = mainSection.nextElementSibling;
        nextElement.classList.remove("hidden");
    })
})

const cancelButtons = document.querySelectorAll(".cancel-button");

cancelButtons.forEach(node => {
    node.addEventListener('click', function() {
        const mainSection = node.closest('.main-section');
        mainSection.remove();
    })
})
















})()