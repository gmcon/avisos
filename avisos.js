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
  })
  .catch(error => {
    console.error("❌ Error al cargar avisos:", error);
    document.getElementById("avisos").innerHTML = "<p>No se pudieron cargar los avisos.</p>";
  });
