

function validarMensagemErro(mensagem){
  aqObject.CheckProperty(Aliases.Lojinha.dlgLojinha.Static, "WndCaption", cmpEqual, mensagem);

}

function fecharMensagemErro(){
  Aliases.Lojinha.dlgLojinha.btnOK.Click();
}
module.exports.validarMensagemErro = validarMensagemErro;
module.exports.fecharMensagemErro = fecharMensagemErro;