import home from './modules/home.js';
import menu from './modules/menu.js';
import contact from './modules/contact.js';

import './styles/styles.css';

const pageContentContainer = (function() {
    const removePageContentContainer = function() {
        let pageContentContainer = document.getElementById('page-content-container');
        if(pageContentContainer) {
            // console.log('removing content container');
            pageContentContainer.remove();
        }
    };
    
    const addPageContentContainer = function () {
        let pageContentContainer = document.getElementById('page-content-container');
        if(!pageContentContainer) {
            // console.log('adding content container');
            pageContentContainer = document.createElement('div');
            pageContentContainer.setAttribute('id', 'page-content-container');
            content.appendChild(pageContentContainer);
        }
    };

    return {
        removePageContentContainer,
        addPageContentContainer
    };
})();

(function addMenuButtons() {
    const element = document.createElement("div");
    element.setAttribute("id", "menu-buttons");

    const btnHome = document.createElement("button");
    btnHome.setAttribute('class','pressed');
    btnHome.innerHTML = "home";
    btnHome.addEventListener('click', function() {
        pageContentContainer.removePageContentContainer();
        pageContentContainer.addPageContentContainer();
        home();
        addClickStatus(btnHome);
    });

    const btnMenu = document.createElement("button");
    btnMenu.innerHTML = "menu";
    btnMenu.addEventListener('click', function() {
        pageContentContainer.removePageContentContainer();
        pageContentContainer.addPageContentContainer();
        menu();
        addClickStatus(btnMenu);
    });

    const btnContact = document.createElement("button");
    btnContact.innerHTML = "contact";
    btnContact.addEventListener('click', function() {
        pageContentContainer.removePageContentContainer();
        pageContentContainer.addPageContentContainer();
        contact();
        addClickStatus(btnContact);
    });

    function addClickStatus(btn) {
        let btns = Array.from(document.querySelectorAll('button'));
        btns.forEach((btn) => {
            if(btn.classList.contains('pressed')) {
                btn.classList.remove('pressed');
            }
        });
        btn.classList.add('pressed');
    }

    element.appendChild(btnHome);
    element.appendChild(btnMenu);
    element.appendChild(btnContact);

    const content = document.getElementById("content");
    content.appendChild(element);
})();


(function start(){
    pageContentContainer.addPageContentContainer();
    home();
})();