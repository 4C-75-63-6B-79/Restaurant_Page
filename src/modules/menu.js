const mainDishes = (function() {
    let dish1 = {
        name: 'Bread Omelette',
        description: 'A delicious and quick breakfast, served with homemade ketchup.',
        cost: '$4'
    }
    let dish2 = {
        name: 'Half fried egg',
        description: 'Classic sunny side up served with 2 supplementary breads and onions',
        cost: '$4'
    }
    let dish3 = {
        name: 'Boiled Egg sandwich',
        description: 'Boiled egg diced to form a delicous sandwich with a twist of mixed fruit jam and other spices',
        cost: '$4'
    }

    return {
        dish1,
        dish2,
        dish3
    };
})();

const bevrages = (function(){
    let dish1 = {
        name: 'Cake and Ice cream Shake',
        description: 'A shake with 2 scoops of ice cream and a whole cake slice.',
        cost: '$6'
    }
    let dish2 = {
        name: 'Sweet Lemon Juice',
        description: 'Sweet and refreshing lemon juice to start your day.',
        cost: '$2'
    }

    return {
        dish1,
        dish2,
    };
})();

const displayContent = (function() {

    const addMenuTitle = function(element = 'h1', text = 'Menu') {        
        let menuHeading = document.createElement(`${element}`);
        menuHeading.textContent = text;
        
        return menuHeading;
    }

    function createDiv(content) {
        let div = document.createElement('div');
        div.setAttribute('class', 'pageItems');
        
        // console.log(content);
        let h3 = document.createElement('h3');
        h3.textContent = content.name;

        let p = document.createElement('p');
        p.textContent = content.description;

        let h4 = document.createElement('h4');
        h4.textContent = content.cost;

        div.appendChild(h3);
        div.appendChild(p);
        div.appendChild(h4);

        // console.log(div);

        return div;
    }

    const displayDishes = function(contents, heading) {
        let div = document.createElement('div'); // div which stores the similar category of dishes
        div.setAttribute('class', 'category');
        let category = addMenuTitle('h2', heading);
        div.appendChild(category);
        for(let content in contents) {
            div.appendChild(createDiv(contents[content]));
            // console.log(contents[content]);
        }

        return div;
    }
   
    return {
        addMenuTitle,
        displayDishes
    }
})();

export default function menu() {
    console.log("this is menu");
    let pageContentContainer = document.getElementById('page-content-container');
    // console.log(mainDishes.dish1.name)

    pageContentContainer.appendChild(displayContent.addMenuTitle());
    
    // pageContentContainer.appendChild(displayContent.addMenuTitle('h2', 'Main Dishes'));
    pageContentContainer.appendChild(displayContent.displayDishes(mainDishes, 'Main Dishes'));

    // pageContentContainer.appendChild(displayContent.addMenuTitle('h2', 'Bevrages'));
    pageContentContainer.appendChild(displayContent.displayDishes(bevrages, 'Bevrages'));
}