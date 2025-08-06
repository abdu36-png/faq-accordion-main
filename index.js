const btns = document.querySelectorAll('.questions')


btns.forEach(btn  => {
    btn.addEventListener('click', () => {
        const parent = btn.parentElement;
        const isActive = parent.classList.contains('active');
        
         btns.forEach(b => b.parentElement.classList.remove('active'));

         if (!isActive) {
            parent.classList.add('active');
        }
        
    })
})


