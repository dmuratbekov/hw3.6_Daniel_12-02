const baseURL = 'https://jsonplaceholder.typicode.com'

const endpoints = {
    posts: "/posts",
    post: (id) => `/post/${id}`
};

fetch(`${baseURL}${endpoints.posts}`,{
    method: 'GET',
}).then((response)=>{
    return response.json();
}).then(data=>{
    console.log(data);
});


const post = {
    userId: 10,
    title: "hi, everyone",
    body: "ok"
}



fetch(`${baseURL}${endpoints.posts}`,{
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
        'Content-Type': 'application/json'
    }
}).then((response)=>{
    return response.json();
}).then(data=>{
    console.log(data);
});



