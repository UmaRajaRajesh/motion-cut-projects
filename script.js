document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.pricing-option button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert('You have selected the ' + this.parentElement.querySelector('h2').textContent + ' plan.');
        });
    });
});
