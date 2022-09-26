const Restaurant = (function() {
    let name =  `Eggs EveryDay`;
    let about = 'At eggs everyday we believe that eggs should not be limited to breakfast or any specific day. But eggs are something that can be enjoyed at any day or any meal or in any form. So Eggs Everyday.';
    let location = '123, Mars Drive, Jupiter'
    return {
        name,
        about,
        location
    };
})();

const addContent = function() {
    let restaurantName = document.createElement('h1');
    restaurantName.textContent = Restaurant.name;

    let restaurantAbout = document.createElement('div');
    restaurantAbout.setAttribute('class', 'pageItems');
    let  p1 = document.createElement('p');    
    p1.textContent = Restaurant.about;
    restaurantAbout.appendChild(p1);

    let restaurantLoaction = document.createElement('div');
    restaurantLoaction.setAttribute('class', 'pageItems');
    let location = document.createElement('h3');
    location.textContent = Restaurant.location;
    let p2 = document.createElement('p');
    p2.textContent = Restaurant.location;
    restaurantLoaction.appendChild(location);
    restaurantLoaction.appendChild(p2);
    
    let pageContentConatiner = document.getElementById('page-content-container');
    if(pageContentConatiner) {
        pageContentConatiner.appendChild(restaurantName);
        pageContentConatiner.appendChild(restaurantAbout);
        pageContentConatiner.appendChild(restaurantLoaction);
    }

};

function home() {
    console.log("this is home.");
    addContent();
}

export default home;
