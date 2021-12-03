function validaCampos(){

    //PEGO O VALOR DAS VARIAVEIS
    var nomeProd = document.getElementById('txtNomeProd').value;
    var codProd = document.getElementById('txtCodProd').value;
    var qtdProd = document.getElementById('txtQtd').value;

    //PADRAO DE VALIDACAO DOS CAMPOS
    var padraoCodProd = /^([a-zA-Z]{2})-[0-9]{5,10}$/
    var padraoNomeProd = /^([a-zA-Z0-9]{1,25})$/;

    //TESTE INDIVIDUAL NOME DO PRODUTO + CRIACAO E MANIPULACAO DO OBJETO + CRIACAO DA TABELA
    if(nomeProd != "" && codProd != ""){
        if(padraoNomeProd.test(nomeProd) != false){
            if(padraoCodProd.test(codProd) != false){
                var confirma = confirm("Deseja cadastrar as informações deste produto?");
                if (confirma == true){
                    cad = {nome:nomeProd, codigo:codProd,quantidade:qtdProd}; //OBJETO
                    tabelaProd = JSON.parse(localStorage.getItem("tabelaProd"));
                    if(tabelaProd == null) tabelaProd = {produtos:[]};
                    tabelaProd.produtos.push(cad);
                    localStorage.setItem("tabelaProd",JSON.stringify(tabelaProd));
                    limpar();
                }
                //CADASTRO DE NOVOS PRODUTOS
                for(var i=0;i<tabelaProd.produtos.length;i++){
                    if(nomeProd == tabelaProd.produtos[i].nome && codProd == tabelaProd.produtos[i].codProd){
                       confirmaProd = confirm("Produto já cadastrado. Deseja cadastrar mais desse produto?");
                       if(confirmaProd == true){
                        tabelaProd.produtos[i].quantidade = qtdProd;
                        localStorage.setItem("tabelaProd", JSON.stringify(tabelaProd));
                        limpar();
                       }
                       else if(nomeProd = tabelaProd.produtos[i].nome){
                        confirmaProd = confirm("Produto já cadastrado. Deseja cadastrar mais desse produto?");
                        if(confirmaProd == true){
                         tabelaProd.produtos[i].quantidade = qtdProd;
                         localStorage.setItem("tabelaProd", JSON.stringify(tabelaProd));
                         limpar();
                        }
                    }
                        else if(codProd == tabelaProd.cod[i].codigo){
                            confirmaProd = confirm("Produto já cadastrado. Deseja cadastrar mais desse produto?");
                            if(confirmaProd == true){
                            tabelaProd.produtos[i].quantidade = qtdProd;
                            localStorage.setItem("tabelaProd", JSON.stringify(tabelaProd));
                            limpar();
                            }
                        }
                    }
                    else {
                        tabelaProd.produtos.push(cad);
                        console.log(cad);
                        localStorage.setItem("tabelaProd", JSON.stringify(tabelaProd));
                        alert("Produto cadastrado com sucesso!")
                        break;
                    }
                    cad = JSON.parse(localStorage.getItem("tabelaProd"));

                    for (i = 0; i < cad.produtos.length; i++) {
                        soma += parseInt(cad.produtos[i].quantidade);
                    }
                    document.getElementById("quantidade").innerHTML = soma;
                    location.reload();
                }
            }
            else{alert("Codigo do produto invalido!")}
        }
        else{alert("Nome do produto invalido!")}
    }
    else{alert("Campos vazios. Favor, digite valores validos.")}    
}

function imprimeEstoque() {
    var cad = [];

    cad = JSON.parse(localStorage.getItem("tabelaProd"));

    if (cad == null) document.write("Não há produtos cadastrados!");
    else {
        for (i = 0; i < cad.produtos.length; i++) {
            document.write(
                `<h2>Item: ${cad.produtos[i].nome}</h2><ul><li>Código do produto: ${cad.produtos[i].codigo}</li><li>Quantidade no estoque: ${cad.produtos[i].quantidade}</li></ul>`
            );
        }
    }
}

function abreEstoque(){
    window.open("../13 - Opção 1 - Trabalho/estoque.html");
}

function limpar(){
    document.getElementById('txtNomeProd').value='';
    document.getElementById('txtCodProd').value='';
    document.getElementById('txtQtd').value='';
}