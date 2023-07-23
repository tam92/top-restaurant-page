import renderHeader from './header.js';
import renderNavBar from './navBar.js';
import renderMain from './main.js';
import renderFooter from './footer.js';
import renderHome from './home.js';

export default function pageLoad() {

    // =========================================================================
    // Creating the page structure
    // =========================================================================
    const content = document.getElementById("content");
    content.appendChild(renderHeader());        // Header
    content.appendChild(renderNavBar());        // Nav bar
    content.appendChild(renderMain()).appendChild(renderHome()); // Main, with Home as default
    content.appendChild(renderFooter());        // Footer

    return content;
    
}