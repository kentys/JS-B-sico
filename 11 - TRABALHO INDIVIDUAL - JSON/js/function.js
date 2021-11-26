function cadastrar() {
    nomeUser = document.getElementById("txtNome").value;
    raUser = document.getElementById("txtRA").value;
    nota1User = document.getElementById("txtNota1").value;
    nota2User = document.getElementById("txtNota2").value;
    if(nomeUser == "" || raUser == "" || nota1User == "" || nota1User == ""){
        alert("Necessário preencher os dados!");
    }
    total = (parseFloat(nota1User) + parseFloat(nota2User));
    if(total >= 60) {situa = "Aprovado";}
    else {situa = "Reprovado";}
    usr = {nome:nomeUser, ra:raUser, nota1:nota1User, nota2:nota2User, media:total, situacao:situa}; // objeto
    tabUsuarios = JSON.parse(localStorage.getItem("tabUsuarios"));
    if(tabUsuarios == null) tabUsuarios = {usuarios:[]};
    tabUsuarios.usuarios.push(usr);
    localStorage.setItem("tabUsuarios",JSON.stringify(tabUsuarios));
    alert("Cadastro realizado com sucesso!");
}
function listar(){
    tabUsuarios = JSON.parse(localStorage.getItem("tabUsuarios"));
    if(tabUsuarios == null) document.write("Não há usuário cadastrado!");
    else {
        document.write(`<table style="width: 600; border: 1px solid black; text-align: center; margin: auto; margin-top: 20%; background-color: black; color:white" >`);
        document.write(`<tr>`);
            document.write(`<th style="border: 1px solid white;font-weight: bold;" >Nome</td>`);
            document.write(`<th style="border: 1px solid white;font-weight: bold;" >R.A</td>`);
            document.write(`<th style="border: 1px solid white;font-weight: bold;" >Nota (1o bim)</td>`);
            document.write(`<th style="border: 1px solid white;font-weight: bold;" >Nota (2o bim)</td>`);
            document.write(`<th style="border: 1px solid white;font-weight: bold;" >Total</td>`);
            document.write(`<th style="border: 1px solid white;font-weight: bold;" >Situação</td>`);
        document.write(`</tr>`); 
        for(i=0; i<tabUsuarios.usuarios.length;i++){
                document.write(`<tr>`);
                    document.write(`<td style="border: 1px solid white;color:white; background-color: gray;" >${tabUsuarios.usuarios[i].nome}</td>`);
                    document.write(`<td style="border: 1px solid white;color:white; background-color: gray;" >${tabUsuarios.usuarios[i].ra}</td>`);
                    document.write(`<td style="border: 1px solid white;color:white; background-color: gray;" >${tabUsuarios.usuarios[i].nota1}</td>`);
                    document.write(`<td style="border: 1px solid white;color:white; background-color: gray;" >${tabUsuarios.usuarios[i].nota2}</td>`);
                    document.write(`<td style="border: 1px solid white;color:white; background-color: gray;" >${tabUsuarios.usuarios[i].media}</td>`);
                    document.write(`<td style="border: 1px solid white;color:white; background-color: gray;" >${tabUsuarios.usuarios[i].situacao}</td>`);
                document.write(`</tr>`);
        }
        document.write(`</table>`);
    }
}
