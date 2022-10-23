document.querySelectorAll('.clases').forEach(clases => {
    clases.addEventListener('click', event => {
      id=clases.id;
      changeImg(id);

    })
  })

  function changeImg(id){  
     document.getElementById('imgcontenido').src="img/clases/"+id+".png";
  }
