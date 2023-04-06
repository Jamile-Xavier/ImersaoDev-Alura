/*var listaFilmes = ["Yesterday", "A Chegada", "Escola de Rock"]
//adicionando novos elementos
listaFilmes.push("HaryPotter")

listaFilmes.push("HaryPotter2")

//item 1 da lista "Yesterday". Indice do primeiro elemento =0
//experimente além do p, h1, h2, strong
document.write("<p>"+ listaFilmes[0] +"</p>")
document.write("<p>"+ listaFilmes[1]+"</p>")
document.write("<p>"+ listaFilmes[2] +"</p>")
document.write("<p>"+ listaFilmes[3] +"</p>")
for (var indice = 0; indice < listaFilmes.length; indice++) {
 document.write("<p>"+ listaFilmes[indice] +"</p>")
}*/

var listaFilmes =
  [
    {
      img: "https://upload.wikimedia.org/wikipedia/pt/7/79/Yesterday_%282019%29_poster.jpg",
      link: "https://www.imdb.com/title/tt2543164/"
    },
    {
      img: "https://1.bp.blogspot.com/-ImZPRqLsluE/WFK156_6pNI/AAAAAAAAYBY/0lEhNRF5wfQdLfr6hpT57_Jt2eBrE9H5wCLcB/s1600/arrival-kartoun-desert.jpg",
      link: ''
    },
    {
      img: "https://media.fstatic.com/ss_O5rdC-Byq_dyij6v52WhCMlQ=/290x478/smart/media/movies/covers/2012/06/61bfeb240522d35c4b75b71bef1a5ba0.jpg",
      link: ''
    }
  ]

for (var i = 0; i < listaFilmes.length; i++) {
  document.write(`<a target="blank" href="${listaFilmes[i].link}"> <img   src="${listaFilmes[i].img}"></a>`);
}