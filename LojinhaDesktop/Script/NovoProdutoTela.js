
function submenterNovoProdutoComErro(nome, valor, cores){
  // Preenchendo os dados do produto
  let formularioAdicaoProduto = Aliases.Lojinha.frmPrincipal.CorpoLojinha.FormularioAdicaoProduto.PainelFormularioDireito;
  formularioAdicaoProduto.edtNovoNomeProduto.SetText(nome);
  formularioAdicaoProduto.edtNovoValorProduto.SetText(valor);
  formularioAdicaoProduto.edtNovoCoresProduto.SetText(cores);
  
  // Pressionar o botão de adição
  formularioAdicaoProduto.btnSalvarProduto.Click();
  
}
module.exports.submenterNovoProdutoComErro = submenterNovoProdutoComErro;