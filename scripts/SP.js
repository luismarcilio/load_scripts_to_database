const jsFunctions = () => {
  const accessKey = "$$ACCESS_KEY$$";
  const url = document.URL;
  const isSimplifiedNf = url.match("ConsultaPublicaCfe.aspx");
  const isLoadedCompletedNf = url.match("ConsultaCupomFiscalEletronico.aspx");
  const isEmitente =
    url.match("DadosLotesEnviadosDadosCupom.aspx") &&
    document
      .querySelector("#conteudo_tabEmitente")
      .getAttribute("style")
      .split(";")[0]
      .split(":")[1] !== "#969696";
  const isProdutos =
    url.match("DadosLotesEnviadosDadosCupom.aspx") &&
    document
      .querySelector("#conteudo_tabProdutoServico")
      .getAttribute("style")
      .split(";")[0]
      .split(":")[1] !== "#969696";
  const data = {};
  if (isSimplifiedNf) {
    try {
      document.querySelector("#conteudo_txtChaveAcesso").value = accessKey;
    } catch (error) {}
    try {
      document.querySelector("#conteudo_btnDetalhe").click();
    } catch (error) {}
  } else if (isLoadedCompletedNf) {
    try {
      document.querySelector("#conteudo_tabEmitente").click();
    } catch (error) {}
  } else if (isEmitente) {
    localStorage.removeItem("emitente");
    localStorage.setItem("emitente", document.documentElement.outerHTML);
    document.querySelector("#conteudo_tabProdutoServico").click();
  } else if (isProdutos) {
    const data = {
      emitente: localStorage.getItem("emitente"),
      produtos: document.documentElement.outerHTML,
    };
    return data;
  }
};
jsFunctions();
