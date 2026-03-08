import { apiURL } from "./api_url.js";

let currentId = 1;

const renderDetails = (details) => {
  const container = document.getElementById("container");
  container.innerHTML = `
        <div >
            <img class="poke-img" src="${details.sprites.front_default}"/>
            <h2 class="poke-name">${details.name}</h2>
            <p class="poke-id">#${details.id}</p>
        </div>
    `;
};

const loadPokemon = async (nextId) => {
  try {
    const searchValue = String(nextId).toLowerCase().trim();
    if (!searchValue) return;

    const response = await fetch(apiURL + searchValue);
    if (!response.ok) {
      console.log("Pokémon não encontrado:", searchValue);
      return;
    }
    const data = await response.json();
    currentId = data.id;
    renderDetails(data);
  } catch (error) {
    console.error("Erro ao carregar Pokémon:", error);
  }
};

let searchTimeout;
const handleSearch = (value) => {
  clearTimeout(searchTimeout);
  const trimmedValue = value.trim();

  // Se for vazio, não busca
  if (!trimmedValue) return;

  // Se for número (ID), busca imediatamente
  if (!isNaN(trimmedValue)) {
    searchTimeout = setTimeout(() => {
      loadPokemon(trimmedValue);
    }, 300);
  }
  // Se for texto (nome), busca com no mínimo 2 caracteres
  else if (trimmedValue.length >= 2) {
    searchTimeout = setTimeout(() => {
      loadPokemon(trimmedValue);
    }, 400);
  }
};

const loadActionEvent = () => {
  const previousButton = document.getElementById("back");
  const nextButton = document.getElementById("forward");
  const searchForm = document.getElementById("search-form");
  const searchInput = document.getElementById("search-input");

  nextButton.addEventListener("click", () => {
    loadPokemon(currentId + 1);
  });

  previousButton.addEventListener("click", () => {
    if (currentId > 1) {
      loadPokemon(currentId - 1);
    }
  });

  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = searchInput.value;
    loadPokemon(input);
  });

  // Busca automática ao digitar
  searchInput.addEventListener("input", (e) => {
    handleSearch(e.target.value);
  });
};

loadPokemon(currentId);
loadActionEvent();
