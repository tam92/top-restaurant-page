export default function renderFooter () {

    const footer = document.createElement("footer");
    const p = document.createElement("p");
    p.innerHTML = "Restaurant address. Phone number: #########";
    footer.appendChild(p);

    return footer;
}