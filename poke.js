// CONECTAR COM POKEAPI

const pokemoName = document.querySelector(".pokemon__name");
const pokemonNumber = document.querySelector(".pokemon__number");
const pokemonImage = document.querySelector(".pokemon__image");
const form = document.querySelector(".form");
const input = document.querySelector(".input__search");
const buttonPrev = document.querySelector(".btn-prev");
const buttonNext = document.querySelector(".btn-next");

let contadora ;

const fecthPokemon = async (pokemon) => {

    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (APIResponse.status === 200) {
        const data = await APIResponse.json(); return data;



    }





};

// RENDERIZAR OS DADOS DA API

const renderpokemon = async (pokemon) => {

    pokemoName.textContent = " carregando...";
    pokemonNumber.textContent = ""
    pokemonImage.src = "https://i.gifer.com/ZKZg.gif";
    ; const data = await fecthPokemon(pokemon)

    if (data) {
        pokemonNumber.innerHTML = data.id;
        pokemoName.textContent = data.name;

        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        input.value = "";


        console.log(data)

        contadora = data.id;
    } else {

        pokemoName.textContent = "Não encontrado"
    }


};

form.addEventListener("submit", (event) => {
    event.preventDefault();
    renderpokemon(input.value.toLowerCase())
});

buttonPrev.addEventListener("click", () => {
  
  if (contadora > 1) {
      contadora -= 1;
    renderpokemon(contadora);
  }
});


buttonNext.addEventListener("click", () => {
    contadora += 1;
    renderpokemon(contadora);
});

renderpokemon(1)

