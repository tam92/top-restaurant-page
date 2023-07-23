export default function renderContact () {

    const div = document.createElement("div");
    div.setAttribute("class", "mainSection");
    const title = document.createElement("h1");
//    title.setAttribute('class', "mainTitle");
    title.innerHTML = "CONTACT";
    div.appendChild(title);

    return div;
}