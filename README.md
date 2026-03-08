# 🎮 Pokédex - PokeAPI

Uma aplicação web interativa de Pokédex que consome dados da [PokeAPI](https://pokeapi.co/) para exibir informações sobre Pokémons de forma elegante e responsiva.

## ✨ Funcionalidades

- 📋 **Lista de Pokémons**: Exibe uma grade com múltiplos Pokémons, mostrando imagem, nome, ID e tipos
- 🔍 **Busca Inteligente**: Pesquise Pokémons pelo nome ou ID
- 🎯 **Navegação por Pokémon**: Navegue entre os Pokémons usando os botões de voltar e avançar
- 🎨 **Design Moderno**: Interface com gradientes, sombras e animações suaves
- 📱 **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- ✨ **Efeitos Interativos**: Animações de hover e transições suaves

## 🚀 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica da aplicação
- **CSS3**: Estilização com gradientes, flexbox, grid e animações
- **JavaScript (ES6+)**: Lógica da aplicação com módulos ES6
- **PokeAPI**: API REST para dados dos Pokémons
- **Fetch API**: Requisições assíncronas para consumo da API

## 📁 Estrutura do Projeto

```
pokeAPI/
│
├── index.html          # Estrutura HTML da página
├── style.css           # Estilos e animações
├── script.js           # Carrega a lista de Pokémons
├── script2.js          # Navegação e busca individual
├── api_url.js          # URL base da PokeAPI
├── arrow_back.svg      # Ícone de voltar
├── arrow_forward.svg   # Ícone de avançar
└── README.md           # Documentação
```

## 🎯 Como Usar

### Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexão com a internet (para consumir a API)

### Instalação e Execução

1. **Clone o repositório**

   ```bash
   git clone https://github.com/flaviare1s/pokeAPI.git
   cd pokeAPI
   ```

2. **Abra o projeto**
   - Simplesmente abra o arquivo `index.html` no seu navegador
   - Ou use uma extensão de servidor local como Live Server no VS Code

3. **Aproveite!**
   - A aplicação carregará automaticamente os primeiros Pokémons
   - Use a barra de busca para encontrar Pokémons específicos
   - Navegue usando os botões de seta

## 🎨 Recursos de Design

### Paleta de Cores

- **Gradiente Principal**: `#11998e` → `#38ef7d` (Verde-Ciano vibrante)
- **Fundo dos Cards**: `#ffffff` (Branco)
- **Texto Principal**: `#333333`
- **Texto Secundário**: `#666666`
- **Destaque**: `#11998e` (Verde-água)

### Animações

- Efeito de hover nos cards (elevação)
- Transições suaves em botões
- Escala de imagens ao passar o mouse
- Sombras dinâmicas

## 🔧 Funcionalidades Técnicas

### Carregamento de Dados

```javascript
// Lista completa de Pokémons (script.js)
fetch(apiURL)
  .then((res) => res.json())
  .then((data) => {
    // Processa e renderiza cada Pokémon
  });
```

### Busca e Navegação

```javascript
// Busca por nome ou ID (script2.js)
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.getElementById("search-input").value;
  loadPokemon(input);
});
```

## 📱 Responsividade

A aplicação é totalmente responsiva e se adapta a diferentes tamanhos de tela:

- **Desktop**: Grid de 4 colunas com cards amplos
- **Tablet**: Grid adaptável com 2-3 colunas
- **Mobile**: Grid de 1-2 colunas com elementos otimizados

## 📝 Licença

Este projeto foi desenvolvido para fins educacionais e está livre para uso.
