function verificar() {
    vet_inputs = document.getElementsByTagName("input");
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
        else if ((vet_inputs[i].type == "radio") && (vet_inputs[i].value == "")) {
            alert(`${vet_inputs[i].name} está vazio!!!`);
            break;
        }
    }
}