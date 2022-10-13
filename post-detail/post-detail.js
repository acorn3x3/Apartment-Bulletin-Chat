/* Imports */
import { getPost } from '../fetch-utils.js';
import { createComment, onComment, getComment } from '../fetch-utils.js';
import { renderComment } from '../render-utils.js';

// this will check if we have a user and set signout link if it exists
import '../auth/user.js';

/* Get DOM Elements */
const postDisplay = document.getElementById('post-display');
const commentList = document.getElementById('comment-list');
const addCommentForm = document.getElementById('add-comment-form');

/* State */
let post = null;
let error = null;

/* Events */
window.addEventListener('load', async () => {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
    if (!id) {
        location.assign('/');
        return;
    }
    const response = await getPost(id);
    error = response.error;

    if (error) {
        alert(error.message);
    } else {
        post = response.data;
        console.log('line 33 here', post);
    }
    if (!post) {
        location.assign('/');
    } else {
        displayPost();
        displayComments();
    }

    onComment(post.id, async (payload) => {
        const commentId = payload.new.id;
        const commentResponse = await getComment(commentId);
        error = commentResponse.error;
        if (error) {
            alert(error.message);
        } else {
            const comment = commentResponse.data;
            post.comments.unshift(comment);
            console.log(post.comments);
            displayComments();
        }
    });
});

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
        displayComments();
    }
});

/* Display Functions */
function displayPost() {
    const h2 = document.createElement('h2');
    h2.textContent = post.title;

    const p = document.createElement('p');
    p.textContent = post.content;

    postDisplay.append(h2, p);
}

// }

function displayComments() {
    console.log(post.comments);
    commentList.innerHTML = '';
    for (const comment of post.comments) {
        const commentEl = renderComment(comment);
        commentList.append(commentEl);
    }
}
