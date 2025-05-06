import { apiURL } from "./api_url.js";

let currentId = 1;

const renderDetails = (details) => {
  const container = document.getElementById("container");
  container.innerHTML = `
        <div >
            <img src="${details.sprites.front_default}"/>
            <h2>${details.name}</h2>
            <p>#${details.id}</p>
        </div>
    `;
};

const loadPokemon = async (nextId) => {
  const response = await fetch(apiURL + nextId);
  const data = await response.json();
  currentId = +nextId;
  renderDetails(data);
};


const loadActionEvent = () => {
  const previousButton = document.getElementById("back");
  const nextButton = document.getElementById("forward");
  const searchForm = document.getElementById("search-form");

  nextButton.addEventListener("click", () => {
    loadPokemon(currentId + 1);
  });

  previousButton.addEventListener("click", () => {
    loadPokemon(currentId - 1);
  });

  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.getElementById('search-input').value;
    loadPokemon(input)
  });
};

loadPokemon(currentId);
loadActionEvent()
