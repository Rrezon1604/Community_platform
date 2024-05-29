// posts/static/posts/js/scripts.js

// Funksion për të shfaqur një mesazh kur klikohet butoni "Create a new post"
document.addEventListener('DOMContentLoaded', (event) => {
    const createPostButton = document.querySelector('.create-post');
    if (createPostButton) {
        createPostButton.addEventListener('click', () => {
            alert('You clicked on Create a new post!');
        });
    }
});
