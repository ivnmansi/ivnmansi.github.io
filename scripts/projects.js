async function loadProjects() {
    let response = await fetch("data/proyectos.json");
    let proyectos = await response.json();
    
    let container = document.getElementById("proyectos-lista");
    container.innerHTML = ""; 
    
    proyectos.forEach(proyecto => {
        let card = document.createElement("div");
        card.classList.add("proyecto");
        card.innerHTML = `
            <img src="${proyecto.imagen}" alt="${proyecto.nombre}">
            <p id="desc">${proyecto.descripcion}</p>
            <a href="${proyecto.link}">Repositorio</a><br>
            ${proyecto.tags.map(tag => `<span id="tag">${tag}</span>`).join(" ")}
        `;
        container.appendChild(card);
    });
}

loadProjects();