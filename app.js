/* Imports */
// this will check if we have a user and set signout link if it exists
import './auth/user.js';
import { getPosts } from './fetch-utils.js';

/* Get DOM Elements */
const postList = document.getElementById('post-list');

/* State */
let posts = [];
let error = null;

/* Events */
window.addEventListener('load', async () => {
    getPosts();
});

/* Display Functions */
