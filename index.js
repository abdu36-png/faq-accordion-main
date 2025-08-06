const btns = document.querySelectorAll('.questions');

btns.forEach((btn, index) => {
    btn.addEventListener('click', handleToggle);
    btn.addEventListener('keydown', (e) => {
        switch (e.key) {
            case 'Enter':
            case ' ':
                e.preventDefault(); // Prevent scrolling on Space
                handleToggle.call(btn);
                break;

            case 'ArrowDown':
                e.preventDefault();
                const nextBtn = btns[index + 1] || btns[0];
                nextBtn.focus();
                break;

            case 'ArrowUp':
                e.preventDefault();
                const prevBtn = btns[index - 1] || btns[btns.length - 1];
                prevBtn.focus();
                break;
        }
    });
});

function handleToggle() {
    const parent = this.parentElement;
    const isActive = parent.classList.contains('active');

    // Remove all actives
    btns.forEach(b => b.parentElement.classList.remove('active'));

    // If it was not already active, activate it
    if (!isActive) {
        parent.classList.add('active');
    }
}




