const SUPABASE_URL = 'https://cqtfftsuxyjifqhudgtz.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxdGZmdHN1eHlqaWZxaHVkZ3R6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjU1OTA1MDUsImV4cCI6MTk4MTE2NjUwNX0.Q_msQfsa90AVHCwjAszpX6kDlOLL_JJoPo1Cwzqmsdc';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* Auth related functions */

export function getUser() {
    return client.auth.user();
}

export async function signUpUser(email, password) {
    return await client.auth.signUp({
        email,
        password,
    });
}

export async function signInUser(email, password) {
    return await client.auth.signIn({
        email,
        password,
    });
}

export async function signOutUser() {
    return await client.auth.signOut();
}

/* Data functions */

// createPost
export async function createPost(newPost) {
    // const profile = {
    //     title: '',
    //     content: '',
    //     photo_url: '', //later
    // };
    return await client.from('posts').insert(newPost).single();
}

// getPosts
export async function getPosts() {
    console.log('working!');
}

export async function updateProfile(profile) {
    // const profile = {
    //     user_name: '',
    //     unit: '',
    //     photo_url: '', //later
    // };
    return await client.from('profiles').upsert(profile).single();
}

// getProfile()
export async function getProfile(id) {
    return await client.from('profiles').select('*').eq('id', id).maybeSingle();
}
