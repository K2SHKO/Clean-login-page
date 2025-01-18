function toggleLoginModal() {
    const modal = document.getElementById('loginModal');
    const overlay = document.getElementById('overlay');
    if (modal.style.display === 'none' || modal.style.display === '') {
        modal.style.display = 'block';
        overlay.style.display = 'block';
        modal.classList.add('fade-in');
        overlay.classList.add('fade-in');
    } else {
        modal.style.display = 'none';
        overlay.style.display = 'none';
        modal.classList.remove('fade-in');
        overlay.classList.remove('fade-in');
    }
}