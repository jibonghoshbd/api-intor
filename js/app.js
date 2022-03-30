const loadPost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))
}

loadPost()
const displayPost = (posts) => {
    const postContiner = document.getElementById('post-continer')
    for (post of posts) {
        const div = document.createElement('div')
        div.classList.add('post')
        div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>

        `
        postContiner.appendChild(div)
    }
}

