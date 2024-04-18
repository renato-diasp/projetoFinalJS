function livro(titulo, autor, capa, genero, nDePaginas, nota, editora, ano) {
  this.titulo = titulo
  this.autor = autor;
  this.capa = capa;
  this.genero = genero;
  this.nDePaginas = nDePaginas;
  this.nota = nota;
  this.editora = editora
  this.ano = ano
 }
  
 const livro1 = new livro( "Tudo é Rio", "Carla Madeira", "https://m.media-amazon.com/images/I/816Udvs9O7L._AC_UF1000,1000_QL80_.jpg", "ficção", 210, 4.8, 'Record', 2021)
  const livro2 = new livro("Essencialismo", "Greg McKeown", "https://m.media-amazon.com/images/I/71HuZRl-XeL._AC_UF1000,1000_QL80_.jpg", "autoajuda", 272, 4.8, 'Sextante', 2014)

  
  const buttonSearch = document.getElementById('searchedBook');
  const book1 = document.getElementById('book1')
  const book2 = document.getElementById('book2')

  

  function unhiddenText(){
    const bookName = document.getElementById('bookName');
    
    if(bookName.value === 'Tudo é Rio' || bookName.value === 'tudo é rio' || bookName.value === 'Tudo é rio'){
      book1.innerHTML = `      
      <div>
        <img src="https://m.media-amazon.com/images/I/816Udvs9O7L._AC_UF1000,1000_QL80_.jpg">
      </div>      
      <div class="info">
        <p><span>Título</span>: ${livro1.titulo}</p>
        <p><span>Autor</span>: ${livro1.autor}</p>
        <p><span>Gênero</span>: ${livro1.genero}</p>
        <p><span>Número de Páginas</span>: ${livro1.nDePaginas}</p>
        <p><span>Nota</span>: ${livro1.nota}</p>
        <p><span>Editora</span>: ${livro1.editora}</p>
        <p><span>Ano</span>: ${livro1.ano}</p>
      </div>   
    `
      }else if(bookName.value === 'Essencialismo' || bookName.value === 'essencialismo'){
        book2.innerHTML = `      
        <div>
          <img src="https://m.media-amazon.com/images/I/71HuZRl-XeL._AC_UF1000,1000_QL80_.jpg">
        </div>      
        <div class="info">
          <p><span>Título</span>: ${livro2.titulo}</p>
          <p><span>Autor</span>: ${livro2.autor}</p>
          <p><span>Gênero</span>: ${livro2.genero}</p>
          <p><span>Número de Páginas</span>: ${livro2.nDePaginas}</p>
          <p><span>Nota</span>: ${livro2.nota}</p>
          <p><span>Editora</span>: ${livro2.editora}</p>
          <p><span>Ano</span>: ${livro2.ano}</p>
        </div>   
      `
    }
    
    }
  

  buttonSearch.addEventListener('click', unhiddenText)

  
