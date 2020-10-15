const posts = [
  { title: 'Post One', body: 'This is a post one' },
  { title: 'Post Two', body: 'This is a post two' },
];

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach(post => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPosts(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject('Error: Somthing Went Wrong');
      }
    }, 2000);
  });
}

async function init() {
  await createPosts({ title: 'Post Three', body: 'This is post three' });

  getPosts();
}

init();
