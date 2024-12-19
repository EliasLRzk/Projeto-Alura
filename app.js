
function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    // se campoPesquisa estiver vazio
    if(campoPesquisa == "") {
      section.innerHTML = "<p> Nenhum anime encontrado</p>"
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada item (dado) na lista de dados
    for (let dado of dados) {
      titulo = dado.titulo.toLocaleLowerCase()
      descricao = dado.descricao.toLocaleLowerCase()
      tags = dado.tags.toLocaleLowerCase()
      // se titulo includes campoPesquisa
      if(titulo.includes(campoPesquisa) || descricao.
      includes(campoPesquisa) || tags.includes(campoPesquisa) ) {
        //cria novo elemento
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais Informações</a>
        </div>
        `;
       }
      }
      if (!resultados) {
          resultados = "<p>Nada foi encontrado. Você precisa digitar o nome de um anime ou característica do anime.</p>"

      }
 
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados; 
}
  









