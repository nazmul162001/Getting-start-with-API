function loadAlbum(){
  fetch('https://jsonplaceholder.typicode.com/albums')
  .then(res => res.json())
  .then(data => displayAlbum(data))
}
loadAlbum();

function displayAlbum(albums){
  const albumContainer = document.getElementById('albums');
  for (const album of albums) {
    const p = document.createElement('p');
    p.style.textAlign = 'center';
    p.innerText = album.title;
    albumContainer.appendChild(p);
  }
}