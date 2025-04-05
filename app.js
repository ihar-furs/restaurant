const burger = Restaurant.querySelector ("#burger");
const menu = Restaurant.querySelector ("#menu");

burger.addEventListener("click", () => {
    menu.classList.toggle("disp");
});
