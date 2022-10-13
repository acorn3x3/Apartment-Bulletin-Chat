/* Imports */
import { getPost } from '../fetch-utils.js';
import { createComment } from '../fetch-utils.js';
import { renderComment } from '../render-utils.js';

// this will check if we have a user and set signout link if it exists
import '../auth/user.js';

/* Get DOM Elements */
const postTitle = document.getElementById('post-title');
const postContent = document.getElementById('post-content');
const commentList = document.getElementById('comment-list');
const addCommentForm = document.getElementById('add-comment-form');

/* State */
let post = null;
// todo: delete this
post = {
    id: 12,
    text: 'blah',
};
let error = null;

/* Events */
addCommentForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(addCommentForm);
    const newComment = {
        comment: formData.get('comment'),
        post_id: post.id,
    };

    const response = await createComment(newComment);
    error = response.error;
    if (error) {
        alert(error.message);
    } else {
        addCommentForm.reset();
    }
});

/* Display Functions */
