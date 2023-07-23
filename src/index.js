import pageLoad from './pageLoad.js';
import * as eventFunctions from './eventFunctions.js';
import './style.css';


function component() {

    const page = pageLoad();

    // EVENT LISTENERS
    const btnHome = document.getElementById("navHome");
    btnHome.addEventListener('click', eventFunctions.eventHome);
    
    const btnMenu = document.getElementById("navMenu");
    btnMenu.addEventListener('click', eventFunctions.eventMenu);

    const btnContact = document.getElementById("navContact");
    btnContact.addEventListener('click', eventFunctions.eventContact);

    return page;
 }

 document.body.appendChild(component());