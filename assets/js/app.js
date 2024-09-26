const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const name = document.querySelector('.name');
const blog = document.querySelector('.blog');
const location = document.querySelector('.location');
//modifiqué el nombre de las constantes porque tenían carácteres especialess

async function displayUser(username) {//se marcaba error en el await, la solución que encontré fue agregar el async
  name.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json();//se agrega el uso de response porque marcaba que no estaba siendo usado
  console.log(data);
  name.textContent = `${data.name}`;
  blog.textContent = `${data.blog}`;
  location.textContent = `${data.location}`;//se añade uso de baltics
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${name}`
}

displayUser('stolinski').catch(handleError);