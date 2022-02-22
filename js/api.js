function loadData(){
  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => console.log(data))
}

function loadUsers(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => displayUsers(data)); // get from function 
}

function loadPost(){
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(data => console.log(data));
}

// using function 
function displayUsers(data){
  const ul = document.getElementById('users');
  for (const user of data) {
    const li = document.createElement('li');
    li.innerText = ` name: ${user.name} email: ${user.email}`;
    ul.appendChild(li);
  }
}

// creat a post 
function getAPost(){
  fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    body: JSON.stringify({
      title: 'My new post',
      body: 'This is my Posts',
      userId: 1
    }),
    headers:{
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
  .then(res => res.json())
  .then(data => console.log(data));
}