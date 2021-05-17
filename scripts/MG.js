const jsFunctions = () => {
  const accessKey = "$$ACCESS_KEY$$";
  const url = document.URL;
  const isSimplifiedNf = url.match("consultaarg.xhtml");
  const isCompletedNf = url.match("consultaresumida.xhtml");
  if (isSimplifiedNf) {
    try {
      document.getElementById("formPrincipal:chaveacesso").value = accessKey;
    } catch (error) {}
    try {
      document.querySelector("div.col-xs-12.col-md-2.col-lg-2 > a").click();
    } catch (error) {}
  } else if (isCompletedNf) {
    return document.documentElement.outerHTML;
  }
};
jsFunctions();
