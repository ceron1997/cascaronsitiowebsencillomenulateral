document.querySelectorAll('.libro').forEach(libro => {
    libro.addEventListener('click', event => {
      
      document.getElementById('imgcontenido').src="img/libro/"+libro.id+".png";

    })
  })

 