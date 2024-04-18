function livro(titulo, autor, genero, DePaginas, nota, editora, ano) {
  this.titulo = titulo
  this.autor = autor;
  this.capa = capa;
  this.genero = genero;
  this.nDePaginas = nDePaginas;
  this.nota = nota;
  this.editora = editora
  this.ano = ano
 }
  
 const livro1 = new livro( "Tudo é Rio", "Carla Madeiro", "https://m.media-amazon.com/images/I/816Udvs9O7L._AC_UF1000,1000_QL80_.jpg", "ficção", 210, 4.8, 'Record', 2021)
  const livro2 = new livro("Essencialismo", "Greg McKeown", "https://m.media-amazon.com/images/I/71HuZRl-XeL._AC_UF1000,1000_QL80_.jpg", "autoajuda", 272, 4.8, 'Sextante')
