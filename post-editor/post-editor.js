// Imports
import '/auth/user.js';

import { createPost } from '/fetch-utils.js';

// Get DOM
const postForm = document.getElementById('post-form');

// State
let error = null;

// Events
postForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(postForm);

    const newPost = {
        title: formData.get('post-title'),
        content: formData.get('post-content'),
    };
    createPost(newPost);
});

// Display
