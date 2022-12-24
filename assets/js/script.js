const btns = document.querySelectorAll('.btn-rounded');

for (let btn of btns) {
    btn.addEventListener('touchstart', () => {
        if(btn.classList.contains('hover-btn')) {
            btn.classList.remove('hover-btn')
        } else {
            btn.classList.add('hover-btn')
        }
    });
}
