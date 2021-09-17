function valida1(){
    login = document.getElementById("Login").value;
    senha = document.getElementById("Senha").value;
    confirma = document.getElementById("confirma").value;
    if(login == "")
        alert("Digite o login!");
        else if(senha != confirma){
            document.getElementById ("Senha").value = "";
            document.getElementById ("confirma").value = "";
            alert("Senhas não são iguais.")
        }
        else    alert("Todos os campos foram digitados corretamente.")
}
function limpar(){
    document.getElementById ("Login").value = "";
    document.getElementById ("Senha").value = "";
    document.getElementById ("confirma").value = "";
}