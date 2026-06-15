// SISTEMA TOP MASTER - MESTRE OFFLINE
// SANDRO RHILMANELLY

console.log("✅ Top Master carregado: Modo OFFLINE ativado!");

// Função de armazenamento local
function salvarDadosLocal(dados) {
    localStorage.setItem('dadosTopMaster', JSON.stringify(dados));
    alert("💾 Dados salvos com segurança no aparelho!");
}

// Carrega configurações da Pasta Mãe
window.addEventListener('load', () => {
    console.log("🔗 Conectado à plataforma principal: sandrorhilmanelly.github.io");
});
