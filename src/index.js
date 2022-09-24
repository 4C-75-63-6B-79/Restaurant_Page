import home from './modules/home.js';
import menu from './modules/menu.js';
import contact from './modules/contact.js';

function addMenuButtons() {
    const element = document.createElement("div");
    element.setAttribute("id", "menu");

    const btnHome = document.createElement("button");
    btnHome.innerHTML = "home";
    btnHome.addEventListener('click', home);

    const btnMenu = document.createElement("button");
    btnMenu.innerHTML = "menu";
    btnMenu.addEventListener('click', menu);

    const btnContact = document.createElement("button");
    btnContact.innerHTML = "contact";
    btnContact.addEventListener('click', contact);

    element.appendChild(btnHome);
    element.appendChild(btnMenu);
    element.appendChild(btnContact);

    return element;
}

const content = document.getElementById("content");
content.appendChild(addMenuButtons());