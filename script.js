const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', manageBoxes);

manageBoxes();

function manageBoxes() {
    const windowTop = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        if (box.getBoundingClientRect().top < windowTop) {
            box.classList.add('show');
        }
        else {
            box.classList.remove('show');
        }
    })
}