const jsFunctions = () => {
  const accessKey = "$$ACCESS_KEY$$";
  const url = document.URL;
  const shouldSetAccessKey = url.includes("consultaChaveAcesso.faces");
  const shouldClickDetailedButton = url.includes("resultadoNfce.faces");
  const shouldSaveNf = url.includes("resultadoDfeDetalhado.faces");
  if (shouldSetAccessKey) {
    try {
      document.querySelector("#chaveAcesso").value = accessKey;
    } catch (error) {}
    try {
      document.querySelector("#captcha").focus();
    } catch (error) {}
  } else if (shouldClickDetailedButton) {
    document
      .querySelector("#menu_botoes > input.bot_consulta.imgBtDetalhada.mB_12")
      .click();
  } else if (shouldSaveNf) {
    return document.documentElement.outerHTML;
  }
};
jsFunctions();
