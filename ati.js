// 1) Lista de produtos
const docesEsalgados = [
    "chiclete",
    "bombom",
    "chocolate",
    "pirulito",
    "brigadeiro",
    "coxinha",
    "bolo",
    "pastel"
];

// 2) Lista de preços (mesma ordem dos produtos)
const valores = [4, 6, 8, 5, 4, 7, 10, 12];

// 3) Função que mostra o estoque
function mostrarEstoque() {
    console.log("=== ESTOQUE DA LOJINHA ===");
    console.log("Produto              |  Preço");
    console.log("---------------------|--------");
    
    for (let i = 0; i < docesEsalgados.length; i++) {
        const nome = docesEsalgados[i].padEnd(20); // alinha bonitinho
        console.log(`${nome} | R$ ${valores[i]}`);
    }
    console.log("=========================\n");
}

// 4) Função que adiciona um novo produto e preço
function adicionarProduto(nome, preco) {
    docesEsalgados.push(nome);
    valores.push(preco);
    console.log(`→ Produto "${nome}" adicionado por R$ ${preco}\n`);
}

// 5) Função que remove produto pelo índice
function removerProduto(indice) {
    if (indice < 0 || indice >= docesEsalgados.length) {
        console.log("Índice inválido! Não foi possível remover.");
        return;
    }
    
    const produtoRemovido = docesEsalgados[indice];
    docesEsalgados.splice(indice, 1);
    valores.splice(indice, 1);
    console.log(`→ Produto "${produtoRemovido}" removido (índice ${indice})\n`);
}

// =============================================
// EXECUÇÃO DAS FUNÇÕES NA ORDEM PEDIDA
// =============================================

console.log("LOJINHA DO JOÃO - Início das operações\n");

// 1ª ação: mostra estoque
mostrarEstoque();

// 2ª ação: adiciona produto
adicionarProduto("alfajor", 9);

// 3ª ação: mostra estoque novamente
mostrarEstoque();

// 4ª ação: remove um produto (vamos remover o índice 2 → "chocolate")
removerProduto(2);

// 5ª ação: mostra estoque final
mostrarEstoque();