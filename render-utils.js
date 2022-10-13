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
    console.log(comment);
    const li = document.createElement('li');

    const pUser = document.createElement('p');
    pUser.textContent = comment.profiles.user_name;

    const pUnit = document.createElement('p');
    pUnit.textContent = comment.profiles.unit;

    // const divUser = document.createElement('div');
    // divUser.classList.add('user-info');

    const pCreatedDate = document.createElement('p');

    const divHead = document.createElement('div');
    pCreatedDate.textContent = new Date(comment.created_at).toLocaleString('en-US', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    });
    divHead.append(pUser, pUnit, pCreatedDate);
    //divHead.classList.add('card-header');

    const commentDiv = document.createElement('div');
    const pComment = document.createElement('p');
    pComment.textContent = comment.comment;
    commentDiv.append(pComment);
    // divUser.append(pUser);
    // divUser.append(pUnit);
    // divHead.append(divUser);
    li.append(divHead, commentDiv);

    // <li>
    //     <div class="comment-header">
    //         <h3>Username</h3>
    //         <h4>Unit Number</h4>
    //         <h4>Date</h4>
    //     </div>
    //     <div>comment content</div>
    // </li>;
    return li;
}
