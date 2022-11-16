var LoginTela = require("LoginTela");
var ListaProdutoTela = require("ListaProdutoTela");
var NovoProdutoTela = require("NovoProdutoTela");
var MensagemTela = require("MensagemTela");
var FormularioPrincipalTela = require("FormularioPrincipalTela");

function validarValorZeroDoProduto()
{
 LoginTela.abrirLojinha();
 LoginTela.login("admin", "admin");
 ListaProdutoTela.abrirNovoProduto();
 NovoProdutoTela.submenterNovoProdutoComErro("Mackbook", "000", "preto, cinza");
 MensagemTela.validarMensagemErro("O valor do produto deve estar entre R$ 0,01 e R$ 7.000,00.");
 MensagemTela.fecharMensagemErro();
 FormularioPrincipalTela.fecharLojinha();
  
}
function validarValorSeteMilEUmCentavoDoProduto()
{
 LoginTela.abrirLojinha();
 LoginTela.login("admin", "admin");
 ListaProdutoTela.abrirNovoProduto();
 NovoProdutoTela.submenterNovoProdutoComErro("Mackbook", "700001", "preto, cinza");
 MensagemTela.validarMensagemErro("O valor do produto deve estar entre R$ 0,01 e R$ 7.000,00.");
 MensagemTela.fecharMensagemErro();
 FormularioPrincipalTela.fecharLojinha();
  
}