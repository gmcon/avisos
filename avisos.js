// Mostrar avisos desde avisos.json
fetch('avisos.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('No se pudo cargar el archivo de avisos.');
    }
    return response.json();
  })
  .then(data => {
    const contenedor = document.getElementById('avisos');
    data.avisos.forEach(aviso => {
      const div = document.createElement('div');
      div.className = 'aviso';
      div.innerHTML = `
        <h3>${aviso.titulo}</h3>
        <p>${aviso.texto}</p>
        <small>${aviso.fecha}</small>
        <hr>
      `;
      contenedor.appendChild(div);
    });
  })
  .catch(error => {
    console.error("Error cargando los avisos:", error);
    document.getElementById('avisos').innerHTML = "<p style='color:red'>No se pudieron cargar los mensajes.</p>";
  });
