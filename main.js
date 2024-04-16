let main = document.querySelector('main');
let ul = document.querySelector('ul');
let menus = document.getElementById('menu');
let menuClase = document.getElementById('menu-close');
let shadow = document.querySelector('.shadow');






shadow.style.display = 'none';
function menu() {
    menus.style.display = 'none';
    shadow.style.display = 'block'
    shadow.style.opacity = '0.4';
    ul.style.display = 'block';
    menuClase.style.display = 'block'
}


function menuClases() {
ul.style.display = 'none';
menus.style.display = 'block';
shadow.style.display = 'none';
}







 


