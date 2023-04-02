const btnCart = document.querySelector('.container_icon');
const containerCartProductos = document.querySelector('.container-cart-products');

btnCart.addEventListener('click', () => {
    containerCartProductos.classList.toggle('hidden-cart');

})




const menu = document.querySelector('.icono_burguer');
const menuResponsive = document.querySelector('.menu_nav');



menu.addEventListener('click', () => {
    menuResponsive.classList.toggle('menu_hidden');

})