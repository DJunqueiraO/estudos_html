function component(className, path) {
    let divs = document.getElementsByClassName(className);
    for (let div of divs) {
        fetch(path)
            .then(response => response.text())
            .then(html => {
                div.innerHTML = html
            });
    }
}

component("component.nav", "component.nav.html");
component("component.button", "component.button.html");