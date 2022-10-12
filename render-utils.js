export function renderPost(post) {
    const li = document.createElement('li');

    const a = document.createElement('a');
    a.href = `./post-detail/?id=${post.id}`;

    const h2 = document.createElement('h2');
    h2.textContent = post.title;

    const p = document.createElement('p');
    p.textContent = post.content;

    a.append(h2, p);
    li.append(a);

    return li;
}
