const isIntersecting = (entry) => {
  return entry.isIntersecting;
};

const loadImage = (entry) => {
  const conatiner = entry.target;
  //const imagen = conatiner.querySelector('img');
  const imagen = conatiner.firstChild;
  //debugger
  const url = imagen.dataset.src;

  //requested image
  imagen.src = url;
  //console.log('hi'); //debugger;
  //escuche una vez, la primera vez que sea visible y ya luego deje de observar
  observer.unobserve(conatiner);
};

const observer = new IntersectionObserver((allElements) => {
  allElements.filter(isIntersecting).forEach(loadImage);
});

export const registerImage = (imagem) => {
  observer.observe(imagem);
};
