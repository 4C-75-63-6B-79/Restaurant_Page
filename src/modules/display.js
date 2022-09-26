const createPage = (function(document) {

    const mainHeading = function(text = 'no heading') {

        let div = document.createElement('div');
        div.setAttribute('class', 'mainHeading');

        let h1 = document.createElement('h1');
        h1.textContent = text;
        
        div.appendChild(h1);

        return div;
    }

    const subHeading = function(text = 'no sub heading') {
        let div = document.createElement('div');
        div.setAttribute('class', 'subHeading');

        let h2 = document.createElement('h2');
        h2.textContent = text;
        
        div.appendChild(h2);

        return div;
    }

    const pageItems = function(heading, text) {
        let div = document.createElement('div');
        div.setAttribute('class', 'pageItems');

        let h3 = document.createElement('h3');
        h3.textContent = heading;

        let p = document.createElement('p');
        p.textContent = text;

        div.appendChild(h3);
        div.appendChild(p);

        return div;
    }

})(document);