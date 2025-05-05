const list = document.getElementById("list");

fetch("https://pokeapi.co/api/v2/pokemon/")
  .then((res) => res.json())
  .then((data) => {
    const pokemons = data.results;
    pokemons.forEach((pokemon) => {
      fetch(pokemon.url)
        .then((res) => res.json())
        .then((details) => {
          createPokemonCard(details);
        });
    });
  })
  .catch((err) => {
    console.error("Erro ao carregar dados!", err);
  });

function createPokemonCard(pokemon) {
  const card = document.createElement("div");
  card.classList.add('card');
  card.innerHTML = `
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
    <div>
      <h5 class="poke-name">${pokemon.name}</h5>
      <p>
        <strong>ID:</strong> ${pokemon.id} <br>
        <strong>Tipo:</strong> ${pokemon.types.map(t => t.type.name).join(', ')}
      </p>
    </div>
  `;
  list.appendChild(card)
}
