const contactInfo = (function(){
    let call = '555-555-5555';
    let email = 'realmail@cool.com';
    return {
        call,
        email
    };
})();

const displayContactInfo = (function () {

    const addTitle = function() {        
        let h1 = document.createElement('h1');
        h1.textContent = 'Contact Us';
        return h1;
    };

    const addInfo = function() {
        let div = document.createElement('div');
        div.setAttribute('class', 'pageItems')
        
        let p1 = document.createElement('p');
        p1.textContent = contactInfo.call;

        let p2 = document.createElement('p');
        p2.textContent = contactInfo.email;

        div.appendChild(p1);
        div.appendChild(p2);

        return div;
    };

    return{
        addTitle,
        addInfo
    };
})();


export default function contact() {
    console.log("this is contact.");

    let pageContentConatiner = document.getElementById('page-content-container');
    if(pageContentConatiner) {
        pageContentConatiner.appendChild(displayContactInfo.addTitle());
        pageContentConatiner.appendChild(displayContactInfo.addInfo());
    }
}
