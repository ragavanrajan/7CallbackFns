const posts = [{
        title: 'Post one',
        body: 'This is post one'
    },
    {
        title: 'Post two',
        body: 'This is post two'
    }
];

// function createPost(post) {
// ***********
// function is a callback - Sync programming
//server took two secs to create the post and it took one sec to get the post. so it got the post 
//     setTimeout(function() {
//         posts.push(post)

//     }, 2000);

// }

// function getPosts() {

//     setTimeout(function() {
//         let output = '';
//         posts.forEach(function(post) {
//             output += `<li>${post.title}</li>`
//         });
//         document.body.innerHTML = output;

//     }, 1000)

// }

// createPost({
//     title: 'Post Three',
//     body: 'This is post Three'
// });

// getPosts();

// ***********
// callback as another parameter - Aysnc 
function createPost(post, callback) {
    // ***********
    // function is a callback 
    // when creatpost is called it will call the getPosts on the callback() fn in CreatePost SetTimeOut method. i.e. before the 2000 ms seconds actually ends or within. you can see post three in the browser.
    setTimeout(function() {
        posts.push(post)
        callback();
    }, 2000);

}

function getPosts() {

    setTimeout(function() {
        let output = '';
        posts.forEach(function(post) {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;

    }, 1000)

}

createPost({
    title: 'Post Three',
    body: 'This is post Three'
}, getPosts);