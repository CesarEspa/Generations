const prompt = require("prompt-sync")();

let usuario = prompt("Crea un nuevo usuario: ");

function validarContraseña(){
    while (true) { 
        let contra = prompt("Crea una nueva contraseña: ")
        if (contra.length >= 8 && /\d/.test(contra) && /[A-Z]/.test(contra)) {
            console.log("La contraseña ha sido creada correctamente señor " + usuario)
            break
        }else{
            console.log("No cumple con las validaciones");
            console.log("Tiene que tener al menos 8 caracteres.");
            console.log("Tiene que incluir un numero");
            console.log("Tiene que incluir una mayuscula");
        }
    }
}
validarContraseña()



