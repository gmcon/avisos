// Registrar acceso del alumno
let alumnoID = localStorage.getItem("alumno_id");
if (!alumnoID) {
  alumnoID = prompt("Ingresa tu nombre o ID:");
  if (alumnoID) {
    localStorage.setItem("alumno_id", alumnoID);
  }
}

// Para pruebas o cambios de ID
if (location.search.includes("resetid")) {
  localStorage.removeItem("alumno_id");
  location.href = location.origin; // recarga sin el parámetro
}

if (alumnoID) {
    ###### proyectos render accesosPWA para usar con el fetch("https://accesos-pwa.onrender.com/registro", {
    fetch("https://accesos-sqlite.onrender.com/registro", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: alumnoID, fecha: new Date().toISOString() })
    })
    .then(response => response.json())
    .then(data => console.log("✔ Registro enviado:", data))
    .catch(error => console.error("❌ Error al registrar acceso:", error));
}

// Mostrar avisos
fetch('avisos.json')
  .then(response => response.json())
  .then(data => {
    const contenedor = document.getElementById('avisos');
    data.avisos.forEach(aviso => {
      const div = document.createElement('div');
      div.className = 'aviso';
      div.innerHTML = `<h3>${aviso.titulo}</h3><p>${aviso.texto}</p><small>${aviso.fecha}</small>`;
      contenedor.appendChild(div);
    });
  });

