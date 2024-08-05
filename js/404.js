document.addEventListener('DOMContentLoaded', function () {
    const link = document.getElementById('image-rights-link');
    const popup = document.getElementById('image-rights-popup');
    const closeBtn = document.getElementById('close-popup');

    link.addEventListener('click', function (e) {
        e.preventDefault();
        popup.style.display = 'block';
    });

    closeBtn.addEventListener('click', function () {
        popup.style.display = 'none';
    });
});
