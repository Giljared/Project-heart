const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
  const xPos = event.offsetX;
  const yPos = event.offsetY;
  const spanEl = document.createElement("span");
  spanEl.style.left = xPos + "px";
  spanEl.style.top = yPos + "px";
  const size = Math.random() * 100;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";
  bodyEl.appendChild(spanEl);
  setTimeout(() => {
    spanEl.remove();
  }, 3000);
});

// Seleciona todas as tags h1
const h1Tags = document.getElementsByTagName('h1');
const firstH1 = h1Tags[0]; // Acessa a primeira tag h1

// Seleciona todas as tags h2
const h2Tags = document.getElementsByTagName('h2');

// Seleciona todas as tags p
const pTags = document.getElementsByTagName('p');
const secondP = pTags[1];  // Acessa a segunda tag p

const tituloPrincipal = document.getElementById('tituloPrincipal'); // Se o ID da tag h1 for "tituloPrincipal"

const subtitulos = document.getElementsByClassName('subtitulo'); // Se a classe for "subtitulo" (aplicável em h2 ou outros)

// Seleciona a tag h1
const titulo = document.getElementById('titulo'); // Assuming your h1 tag has id="titulo"

// Altera o texto da tag h1
// titulo.textContent = 'JavaScript está funcionando!';

// Seleciona todas as tags h2 (caso queira modificar todas)
// const subtitulos = document.getElementsByTagName('h2');

// Modifica o texto de todas as tags h2 (loop através da lista)
// for (let i = 0; i < subtitulos.length; i++) {
//   subtitulos[i].textContent = 'JavaScript é incrível!';
// }

// Exemplo selecionando por classe (caso tenha classe específica em h2)
//const subtituloClasse = document.querySelector('.meuSubtitulo'); // Assuming class="meuSubtitulo"
//subtituloClasse.textContent = 'Posso selecionar por classe também!';

