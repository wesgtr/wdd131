import recipes from './recipes.mjs';

function random(num) {
    return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
    return list[random(list.length)];
}

function tagsTemplate(tags) {
    return tags.map(tag => `<span class="tag">${tag}</span>`).join(' ');
}

function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
    for (let i = 1; i <= 5; i++) {
        html += i <= rating ? '⭐' : '☆';
    }
    html += `</span>`;
    return html;
}

function recipeTemplate(recipe) {
    return `
        <div class="recipe">
            <img src="${recipe.image}" alt="${recipe.name}">
            <div class="tags">${tagsTemplate(recipe.tags)}</div>
            <h2>${recipe.name}</h2>
            ${ratingTemplate(recipe.rating)}
            <p class="description">${recipe.description}</p>
        </div>
    `;
}

function renderRecipes(recipeList) {
    const recipeContainer = document.querySelector(".recipes");
    recipeContainer.innerHTML = recipeList.map(recipeTemplate).join('');
}

function init() {
    const recipe = getRandomListEntry(recipes);
    renderRecipes([recipe]);
}

function filterRecipes(query) {
    return recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(query) ||
        recipe.description.toLowerCase().includes(query) ||
        recipe.tags.find(tag => tag.toLowerCase().includes(query)) ||
        recipe.recipeIngredient.find(ingredient => ingredient.toLowerCase().includes(query))
    ).sort((a, b) => a.name.localeCompare(b.name));
}

function searchHandler(event) {
    event.preventDefault();
    const query = document.getElementById("search").value.toLowerCase();
    const filteredRecipes = filterRecipes(query);
    renderRecipes(filteredRecipes);
}

document.addEventListener("DOMContentLoaded", () => {
    init();
    document.querySelector("form").addEventListener("submit", searchHandler);
});
