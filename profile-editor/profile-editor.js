/* Imports */
// this will check if we have a user and set signout link if it exists
import '../auth/user.js';
import { updateProfile, getProfile, getUser } from '../fetch-utils.js';

const user = getUser();

/* Get DOM Elements */
const profileForm = document.getElementById('profile-form');
const saveProfileButton = document.getElementById('save-profile-button');
const usernameInput = document.getElementById('username-input');
const unitInput = document.getElementById('unit-input');
const errorDisplay = document.getElementById('error-display');

/* State */
let profile = null;
let error = null;

/* Events */
window.addEventListener('load', async () => {
    const response = await getProfile(user.id);

    error = response.error;
    profile = response.data;

    if (error) {
        displayError();
    }

    if (profile) {
        displayProfile();
    }
});

profileForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    errorDisplay.textContent = '';
    const buttonText = saveProfileButton.textContent;
    saveProfileButton.disabled = true;

    const formData = new FormData(profileForm);

    const profileUpdate = {
        user_name: formData.get('username-input'),
        unit: formData.get('unit-input'),
    };

    const response = await updateProfile(profileUpdate);

    error = response.error;

    if (error) {
        displayError();
        saveProfileButton.disabled = false;
        saveProfileButton.textContent = buttonText;
    } else {
        location.assign('../');
    }
});

/* Display Functions */
function displayProfile() {
    usernameInput.value = profile.user_name;
    unitInput.value = profile.unit;
}

function displayError() {
    errorDisplay.textContent = error.message;
}
