const user = {
    nombre: "Cesar",
    edad: 25,
    admin: true    
}


localStorage.setItem("mi_perfil", user);
console.log(localStorage.getItem("mi_perfil"));


localStorage.setItem("user", JSON.stringify(user));

const miObjeto = 
    JSON.parse(localStorage.getItem("user"));
    console.log(miObjeto.nombre);
    console.log(miObjeto.edad);
    console.log(miObjeto.admin);