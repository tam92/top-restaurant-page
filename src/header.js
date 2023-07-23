export default function renderHeader() {
    // console.log("From: header.js");

    const header = document.createElement("header");
    const title = document.createElement('h1');
    title.innerHTML = "Restaurant page";
    header.appendChild(title);
    return header;

}