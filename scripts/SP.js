const jsFunctions = () => {
  const accessKey = "35210403640467003614590009420500176134696826";
  // const accessKey = "$$ACCESS_KEY$$";
  const isSimplifiedNf = document.querySelector("#conteudo_btnDetalhe");
  const isHome = document.querySelector("#conteudo_txtChaveAcesso");
  const isCfe =
    document.querySelector("#conteudo_tabCfe")?.style?.backgroundColor ===
    "rgb(200, 50, 50)";
  const isEmitente =
    document.querySelector("#conteudo_tabEmitente")?.style?.backgroundColor ===
    "rgb(200, 50, 50)";
  const isProdutos =
    document.querySelector("#conteudo_tabProdutoServico")?.style
      ?.backgroundColor === "rgb(200, 50, 50)";
  const isTotais =
    document.querySelector("#conteudo_tabTotais")?.style?.backgroundColor ===
    "rgb(200, 50, 50)";

  const data = {};
  if (isHome) {
    document.querySelector("#conteudo_txtChaveAcesso").value = accessKey;
  } else if (isSimplifiedNf) {
    document.querySelector("#conteudo_btnDetalhe").click();
  } else if (isCfe) {
    const viewState = document.querySelector("#__VIEWSTATE").value;
    document.querySelector("#__VIEWSTATE").value = "";
    localStorage.removeItem("cfe");
    localStorage.setItem("cfe", document.documentElement.outerHTML);
    document.querySelector("#__VIEWSTATE").value = viewState;
    document.querySelector("#conteudo_tabEmitente").click();
  } else if (isEmitente) {
    const viewState = document.querySelector("#__VIEWSTATE").value;
    document.querySelector("#__VIEWSTATE").value = "";
    localStorage.removeItem("emitente");
    localStorage.setItem("emitente", document.documentElement.outerHTML);
    document.querySelector("#__VIEWSTATE").value = viewState;
    document.querySelector("#conteudo_tabTotais").click();
  } else if (isTotais) {
    const viewState = document.querySelector("#__VIEWSTATE").value;
    document.querySelector("#__VIEWSTATE").value = "";
    localStorage.removeItem("totais");
    localStorage.setItem("totais", document.documentElement.outerHTML);
    document.querySelector("#__VIEWSTATE").value = viewState;
    document.querySelector("#conteudo_tabProdutoServico").click();
  } else if (isProdutos) {
    const viewState = document.querySelector("#__VIEWSTATE").value;
    document.querySelector("#__VIEWSTATE").value = "";
    const data = {
      cfe: localStorage.getItem("cfe"),
      emitente: localStorage.getItem("emitente"),
      totais: localStorage.getItem("totais"),
      produtos: document.documentElement.outerHTML,
    };
    return JSON.stringify(data);
  }
};
jsFunctions();
