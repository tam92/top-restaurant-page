export default function renderNavBar() {
    // Create links for: home, menu, and contact

    const liHome = document.createElement("li");
    const aHome = document.createElement("a");
    liHome.setAttribute("id", "navHome");
    aHome.innerHTML = "HOME";
    liHome.appendChild(aHome);

    const liMenu = document.createElement("li");
    const aMenu = document.createElement("a");
    liMenu.setAttribute("id", "navMenu");
    aMenu.innerHTML = "MENU";
    liMenu.appendChild(aMenu);

    const liContact = document.createElement("li");
    const aContact = document.createElement("a");
    liContact.setAttribute("id", "navContact");
    aContact.innerHTML = "CONTACT";
    liContact.appendChild(aContact);

    const ul = document.createElement("ul");
    ul.appendChild(liHome);
    ul.appendChild(liMenu);
    ul.appendChild(liContact);

    const nav = document.createElement("nav");
    nav.setAttribute("id", "navBar");
    nav.appendChild(ul);

    return nav;
}