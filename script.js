// Crear elementos base
document.body.style.margin = "0";
document.body.style.fontFamily = "Segoe UI, sans-serif";
document.body.style.background = "#e5f5e0";
document.body.style.color = "#333";

// Encabezado
const header = document.createElement("header");
header.style.background = "#2e7d32";
header.style.color = "white";
header.style.padding = "1.5em 0";
header.style.textAlign = "center";
header.innerHTML = `
    <h1>EcoEpo - Proyecto de Reciclaje</h1>
    <p>Reciclar los residuos correctamente</p>
`;
document.body.appendChild(header);

// Contenedor
const container = document.createElement("div");
container.style.padding = "2em";
container.style.maxWidth = "900px";
container.style.margin = "auto";
document.body.appendChild(container);

// Integrantes
const teamSection = document.createElement("section");
teamSection.innerHTML = \`
    <h2>Integrantes del equipo</h2>
    <ul>
        <li>Alan Alejandro Cazares Hernández</li>
        <li>Erandi Nájera Enríquez</li>
        <li>Ariel Hernández Vázquez</li>
        <li>Elvis Alexis García Soler</li>
        <li>Monserrath Sakinas Hernández</li>
        <li>Sandra Burciaga Castillo</li>
    </ul>
\`;
teamSection.style.background = "#c8e6c9";
teamSection.style.padding = "1em";
teamSection.style.borderRadius = "8px";
teamSection.style.marginBottom = "2em";
container.appendChild(teamSection);

// Botes
const bins = [
    { color: "Verde", tipo: "Orgánica", class: "verde", bg: "#4caf50", text: "white" },
    { color: "Negro", tipo: "Inorgánicos", class: "negro", bg: "#212121", text: "white" },
    { color: "Amarillo", tipo: "Papel y cartón", class: "amarillo", bg: "#fdd835", text: "black" },
    { color: "Rojo", tipo: "PET", class: "rojo", bg: "#e53935", text: "white" },
    { color: "Gris", tipo: "Aluminio y vidrio", class: "gris", bg: "#757575", text: "white" }
];

const binsSection = document.createElement("section");
binsSection.style.display = "grid";
binsSection.style.gridTemplateColumns = "repeat(auto-fit, minmax(160px, 1fr))";
binsSection.style.gap = "1em";
bins.forEach(bin => {
    const div = document.createElement("div");
    div.textContent = \`\${bin.color}\n\${bin.tipo}\`;
    div.style.background = bin.bg;
    div.style.color = bin.text;
    div.style.borderRadius = "10px";
    div.style.textAlign = "center";
    div.style.fontWeight = "bold";
    div.style.padding = "1em";
    binsSection.appendChild(div);
});
container.appendChild(binsSection);

// Clasificador de residuos
const inputSection = document.createElement("section");
inputSection.style.textAlign = "center";
inputSection.style.margin = "2em 0";
inputSection.innerHTML = \`
    <h2>¿Dónde va este residuo?</h2>
    <input type="text" id="residuo" placeholder="Ejemplo: cáscara de plátano" style="padding: 10px; width: 70%; max-width: 400px; font-size: 1em;"><br>
    <button id="btn" style="padding: 10px 20px; font-size: 1em; background: #388e3c; color: white; border: none; border-radius: 5px; cursor: pointer; margin-top: 1em;">Clasificar</button>
    <div id="resultado" style="margin-top: 1em; font-size: 1.2em; font-weight: bold;"></div>
\`;
container.appendChild(inputSection);

document.getElementById("btn").addEventListener("click", () => {
    const residuo = document.getElementById("residuo").value.toLowerCase();
    const resultado = document.getElementById("resultado");
    let mensaje = "";

    if (residuo.includes("cáscara") || residuo.includes("comida") || residuo.includes("fruta") || residuo.includes("pan") || residuo.includes("hueso")) {
        mensaje = "Basura orgánica - Bote VERDE";
    } else if (residuo.includes("papel") || residuo.includes("cartón") || residuo.includes("libro") || residuo.includes("revista")) {
        mensaje = "Papel y cartón - Bote AMARILLO";
    } else if (residuo.includes("botella") || residuo.includes("pet") || residuo.includes("plástico")) {
        mensaje = "PET - Bote ROJO";
    } else if (residuo.includes("lata") || residuo.includes("vidrio") || residuo.includes("aluminio") || residuo.includes("frasco")) {
        mensaje = "Aluminio o vidrio - Bote GRIS";
    } else if (residuo.trim() === "") {
        mensaje = "Por favor ingresa un residuo.";
    } else {
        mensaje = "Residuos inorgánicos - Bote NEGRO";
    }

    resultado.innerText = mensaje;
});

// Comisiones
const comisionesSection = document.createElement("section");
comisionesSection.style.background = "#f1f8e9";
comisionesSection.style.padding = "1em";
comisionesSection.style.borderRadius = "8px";
comisionesSection.innerHTML = \`
    <h2>Comisiones del proyecto</h2>
    <ul>
        <li><strong>Lavado de botes:</strong> se encarga de lavar y guardar los botes.</li>
        <li><strong>Separación de residuos:</strong> encargada de separar los residuos en sus lugares correspondientes.</li>
        <li><strong>Colocación de botes:</strong> se encarga de sacar los botes a principio de semana.</li>
        <li><strong>Revisión de salones:</strong> encargada de revisar que los salones no tengan basura tirada.</li>
        <li><strong>Composta:</strong> mezcla residuos orgánicos con cal para generar composta.</li>
        <li><strong>Limpieza de bodega:</strong> clasifica residuos para su venta y reutilización.</li>
    </ul>
\`;
container.appendChild(comisionesSection);
