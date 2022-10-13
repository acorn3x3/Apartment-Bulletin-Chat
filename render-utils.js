export function renderPost(post) {
    const li = document.createElement('li');

    const divHead = document.createElement('div');
    divHead.classList.add('card-header');

    const pUser = document.createElement('p');
    pUser.textContent = post.user.user_name;

    const pUnit = document.createElement('p');
    pUnit.textContent = post.user.unit;

    const divUser = document.createElement('div');
    divUser.classList.add('user-info');

    const pCreatedDate = document.createElement('p');

    pCreatedDate.textContent = new Date(post.created_at).toLocaleString('en-US', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    });

    const a = document.createElement('a');
    a.href = `./post-detail/?id=${post.id}`;

    const h2 = document.createElement('h2');
    h2.textContent = post.title;

    const p = document.createElement('p');
    p.textContent = post.content;

    divUser.append(pUser);
    divUser.append(pUnit);
    divHead.append(divUser);
    divHead.append(pCreatedDate);
    a.append(divHead, h2, p);
    li.append(a);

    return li;
}

export function renderComment(comment) {
    const li = document.createElement('li');
    li.textContent = comment.comment;
    return li;
}
