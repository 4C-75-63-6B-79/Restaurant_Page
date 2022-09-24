const Restaurant = (function() {
    let name = 'Eggs Everyday';
    let about = 'At eggs everyday we believe that eggs should not be limited to breakfast or any specific day. But eggs are something that can be enjoyed at any day or any meal or in any form. So Eggs Everyday.';
    return {
        name,
        about
    };
})();

const addContent = function() {
    let restaurantName = document.createElement('h1');
    restaurantName.textContent = Restaurant.name;

    let restaurantAbout = document.createElement('p');
    restaurantAbout.textContent = Restaurant.about;

    let pageContentConatiner = document.getElementById('page-content-container');
    if(pageContentConatiner) {
        pageContentConatiner.appendChild(restaurantName);
        pageContentConatiner.appendChild(restaurantAbout);
    }

};

function home() {
    console.log("this is home.");
    const contentDiv = document.getElementById('content');
    addContent();
}

export default home;
