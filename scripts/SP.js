const jsFunctions = () => {
  const accessKey = "$$ACCESS_KEY$$";
  const isSimplifiedNf = document.querySelector("#conteudo_btnDetalhe");
  const isHome = document.querySelector("#conteudo_txtChaveAcesso");
  const isCfe = document.querySelector("#conteudo_tabCfe")?.style?.backgroundColor == "rgb(200, 50, 50)";
  const isEmitente = document.querySelector("#conteudo_tabEmitente")?.style?.backgroundColor == "rgb(200, 50, 50)";
  const isProdutos = document.querySelector("#conteudo_tabProdutoServico")?.style?.backgroundColor == "rgb(200, 50, 50)";
  const data = {};
  if (isHome) {
      document.querySelector("#conteudo_txtChaveAcesso").value = accessKey;
  } 
  else if (isSimplifiedNf){
    document.querySelector("#conteudo_btnDetalhe").click();
  }
  else if (isCfe) {
    localStorage.removeItem("cfe");
    localStorage.setItem("cfe", document.documentElement.outerHTML);
    document.querySelector("#conteudo_tabEmitente").click();
  } else if (isEmitente) {
    localStorage.removeItem("emitente");
    localStorage.setItem("emitente", document.documentElement.outerHTML);
    document.querySelector("#conteudo_tabProdutoServico").click();
  } else if (isProdutos) {
    const data = {
      cfe: localStorage.getItem("cfe"),
      emitente: localStorage.getItem("emitente"),
      produtos: document.documentElement.outerHTML,
    };
    return data;
  }
};
jsFunctions();
