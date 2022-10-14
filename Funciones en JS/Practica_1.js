let free = false;

const validarInvitado = (time) => {
    let edad = prompt("Ingrese su edad");
    if (edad >= 18) {
        if (time >= 2 && time <= 7 && free == false) {
            alert("Puedes pasar gratis por que eres la primera persona despues de las 2am");
            free = true;
        } else {
            alert(`son las ${time}:00 Hrs y puedes pasar, pero tienes que pagar`);
        }
    } else {
        alert("No puedes pasar, eres menor de edad");
    }
}

validarInvitado(23);
validarInvitado(24);
validarInvitado(0.2);
validarInvitado(0.6);
validarInvitado(1);
validarInvitado(2);
validarInvitado(2.4);

