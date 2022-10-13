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

/* Events */

/* Display Functions */
