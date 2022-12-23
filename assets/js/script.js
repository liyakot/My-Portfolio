const projects = document.querySelectorAll('#project');
const btns = document.querySelectorAll('.btn-rounded');

for (let project of projects) {
    project.addEventListener('touchstart', () => {
        if(project.classList.contains('hover')) {
            project.classList.remove('hover')
        } else {
            project.classList.add('hover')
        }
    })
}

for (let btn of btns) {
    btn.addEventListener('touchstart', () => {
        if(btn.classList.contains('hover-btn')) {
            btn.classList.remove('hover-btn')
        } else {
            btn.classList.add('hover-btn')
        }
    });
}
