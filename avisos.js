// Registrar acceso del alumno
let alumnoID = localStorage.getItem("alumno_id");
if (!alumnoID) {
  alumnoID = prompt("Ingresa tu nombre o ID:");
  if (alumnoID) {
    localStorage.setItem("alumno_id", alumnoID);
  }
}

if (alumnoID) {
  fetch("https://accesos_pwa.onrender.com/registro", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: alumnoID, fecha: new Date().toISOString() })
  });
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

