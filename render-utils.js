export function renderPost(post) {
    const li = document.createElement('li');
    const h2 = document.createElement('h2');
    h2.textContent = post.title;
    const p = document.createElement('p');
    p.textContent = post.content;
    li.append(h2, p);
    return li;
}
