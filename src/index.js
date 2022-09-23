function component() {
    const element = document.createElement("div");

    const btn = document.createElement("button");
    btn.innerHTML = "Click me and check the console";
    btn.addEventListener('click', () => console.log("button was clicked"));

    element.appendChild(btn);

    return btn;
}

document.body.appendChild(component());