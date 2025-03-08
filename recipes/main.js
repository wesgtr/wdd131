// main.js
import recipes from './recipes.mjs';

document.addEventListener("DOMContentLoaded", () => {
    const recipeContainer = document.querySelector(".recipes");

    recipes.forEach(recipe => {
        const recipeElement = document.createElement("div");
        recipeElement.classList.add("recipe");

        recipeElement.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}">
            <div class="tags">${recipe.tags.map(tag => `<span class="tag">${tag}</span>`).join(' ')}</div>
            <h2>${recipe.name}</h2>
            <span class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
                ${'⭐'.repeat(Math.floor(recipe.rating))}${recipe.rating % 1 !== 0 ? '☆' : ''}${'☆'.repeat(5 - Math.ceil(recipe.rating))}
            </span>
            <p class="description">${recipe.description}</p>
        `;

        recipeContainer.appendChild(recipeElement);
    });
});
