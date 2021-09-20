function verificar() {
    vet_inputs = document.getElementsByTagName("input");
    estadoCivil = document.getElementById("estCivil").value;
    textArea = document.getElementById("textarea").value;
    for (i = 0; i < vet_inputs.length; i++)
        if ((vet_inputs[i].type == "text" && vet_inputs[i].value == "") || (vet_inputs[i].type == "email" && vet_inputs[i].value == "") || (vet_inputs[i].type == "tel" && vet_inputs[i].value == "") || (vet_inputs[i].type == "date" && vet_inputs[i].value == "")) 
        {
            alert(`${vet_inputs[i].name} está vazio!!!`);
            break;
        } 
        else if (estadoCivil == "0" || estadoCivil == null) {
            alert("Selecione o seu Estado civil!");
            estadoCivil.focus();
            break;
        } 
        else if (textArea == "" || textArea == null) {
            alert("Conte-nos sobre voce esta vazio!!!");
            textArea.focus();
            break;
        } 
        else if (document.getElementById("sexoM").checked == false && document.getElementById("sexoF").checked == false) {
            alert(`Sexo está vazio!`);
            break;
        }
        else {
            alert("Cadastro enviado com sucesso!!!");
            break;
        }
}