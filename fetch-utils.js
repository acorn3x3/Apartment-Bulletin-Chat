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
    const response = await client.from('posts').select(`*, user:profiles(user_name, unit)`);
    // const response = await client.from('posts').select('*', profiles(user_name, unit));
    console.log(response);
    return response;
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

export async function getPost(id) {
    return await client
        .from('posts')
        .select(`*,comments(*, profiles(*))`)
        .eq('id', id)
        .order('created_at', { foreignTable: 'comments', ascending: false })
        .single();
}

export async function createComment(comment) {
    return await client.from('comments').insert(comment).single();
}

export function onComment(postID, handleComment) {
    client.from(`comments:post_id=eq.${postID}`).on('INSERT', handleComment).subscribe();
}

export async function getComment(id) {
    return await client
        .from('comments')
        .select(`*, profiles(id, user_name, unit)`)
        .eq('id', id)
        .single();
}
