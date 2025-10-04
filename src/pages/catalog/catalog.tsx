
fetch("catalog.JSON") 
      .then(response => response.json())
      .catch(error => console.error('Error al cargar JSON:', error));
