


const usuarios = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Octavio", edad: 17 },
  { nombre: "Cesar", edad: 30 },
  { nombre: "Brayan", edad: 18 },
  { nombre: "David", edad: 20 }
];
function filtrarUsuarios(usuarios, edadMinima) {
  let usuariosfiltrados = [];
  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].edad >= edadMinima) {
      usuariosfiltrados.push(usuarios[i]);
    }
  }
  return usuariosfiltrados;
}
console.log(filtrarUsuarios(usuarios, 18));