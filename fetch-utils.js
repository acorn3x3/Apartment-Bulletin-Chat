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
export async function createPost(newPost) {
    console.log(newPost);
}
