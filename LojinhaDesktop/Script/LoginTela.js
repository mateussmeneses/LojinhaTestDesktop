﻿function abrirLojinha(){
  // Abrindo o app
   TestedApps.Lojinha.Run();
}

function login(usuario, senha) {
  // Clicando na aba de login
  Aliases.Lojinha.frmPrincipal.CorpoLojinha.FormularioLogin.Click
  
  // Preenchendo o formulário de login
  let formularioLogin = Aliases.Lojinha.frmPrincipal.CorpoLojinha.FormularioLogin;
    formularioLogin.edtUsuario.SetText(usuario);
    formularioLogin.edtSenha.SetText(senha);
    formularioLogin.btnEntrar.Click();
}
module.exports.abrirLojinha = abrirLojinha;
module.exports.login = login;