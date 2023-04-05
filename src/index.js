import { registerImage } from './lazy';

const ramdom = () => Math.floor(Math.random(1, 122) * 100);

const createImageNode = () => {
  const container = document.createElement('div');
  container.className = 'p-4';
  const imagen = document.createElement('img');
  imagen.className = 'mx-auto h-60 w-60 bg-gray-200 animate-pulse';
  imagen.classList.remove('animate-pulse');
  //dataset agrega el elm pero no es funcional
  imagen.dataset.src = `https://randomfox.ca/images/${ramdom()}.jpg`;
  container.appendChild(imagen);
  return container;
};

//crear la base de la imagen (div gris con la ruta a pedir)
const newImage = createImageNode();

//read elements from HTML document
const mountNode = document.getElementById('images');
const addButton = document.querySelector('#btnAgregar');
const resetButton = document.querySelector('#btnReset');

//anañir imagen
const addImage = () => {
  let newImage = createImageNode();
  mountNode.appendChild(newImage);
  registerImage(newImage);
  if (newImage.firstChild.naturalHeight !== 0) {
    newImage.firstChild.classList.remove('animate-pulse');
  }
};

const removeImages = () => {
  mountNode.remove(...mountNode.children);
};

addButton.addEventListener('click', addImage);
resetButton.addEventListener('click', removeImages);
