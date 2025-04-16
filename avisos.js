// Cargar lista de avisos desde GitHub
fetch("https://raw.githubusercontent.com/gmcon/avisos/main/avisos.json")
  .then(response => response.json())
  .then(data => {
    const avisosContainer = document.getElementById("avisos");

    const lista = Array.isArray(data) ? data : data.avisos;

    if (Array.isArray(lista)) {
      avisosContainer.innerHTML = ""; // Limpiar

      lista.forEach(aviso => {
        const div = document.createElement("div");
        div.className = "aviso";
        div.innerHTML = `<strong>${aviso.fecha}</strong>: ${aviso.mensaje}`;
        avisosContainer.appendChild(div);
      });

      if (lista.length === 0) {
        avisosContainer.innerText = "No hay avisos nuevos.";
      }

    } else {
      avisosContainer.innerText = "No hay avisos disponibles.";
    }
  })
  .catch(error => {
    console.error("Error al cargar los avisos:", error);
    document.getElementById("avisos").innerText = "Error al cargar los avisos.";
  });
