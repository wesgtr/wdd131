const themeSelector = document.querySelector("#theme-selector");
const body = document.body;
const logo = document.querySelector("#logo");

function changeTheme() {
    const selectedTheme = themeSelector.value;

    if (selectedTheme === "dark") {
        body.classList.add("dark");
    } else {
        body.classList.remove("dark");
    }
}

themeSelector.addEventListener("change", changeTheme);
