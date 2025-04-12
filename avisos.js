fetch("https://raw.githubusercontent.com/gmcon/avisos/main/avisos.json")
  .then(response => response.json())
  .then(data => {
    const avisosContainer = document.getElementById("avisos");
    if (avisosContainer) {
      avisosContainer.textContent = data.mensaje || "No hay avisos nuevos.";
    }
  })
  .catch(error => {
    console.error("Error al cargar los avisos:", error);
  });
