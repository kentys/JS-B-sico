function verificar() {
    vet_inputs = document.getElementsByTagName("input");
    select = document.getElementsByTagName('select');

    for (i=0; i<vet_inputs.length; i++){
        if ((vet_inputs[i].type == "text") && (vet_inputs[i].value == "")) {
            alert(`${vet_inputs[i].name} está vazio!!!`);
            break;
        }
        else if ((vet_inputs[i].type == "date") && (vet_inputs[i].value == "")) {
            alert(`${vet_inputs[i].name} está vazio!!!`);
            break;
        }
        else if ((vet_inputs[i].type == "email") && (vet_inputs[i].value == "")) {
            alert(`${vet_inputs[i].name} está vazio!!!`);
            break;
        }
        else if ((vet_inputs[i].type == "tel") && (vet_inputs[i].value == "")) {
            alert(`${vet_inputs[i].name} está vazio!!!`);
            break;
        }
        else if(document.getElementById('sexoM').checked == false && document.getElementById('sexoF').checked ==false) {  
            alert(`Sexo está vazio!`)
            break
        }
        for(j=0;j<select.length;j++){
            if(select[i].value ==""){
                alert(`Estado cívil está vazio!!!`);
                break;
            }
        }
    }
}