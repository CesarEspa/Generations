/*
function generarPasswordManual(longitud) {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  let password = '';
  for (let i = 0; i < longitud; i++) {
    const indice = Math.floor(Math.random() * caracteres.length);
    password += caracteres[indice];
  }
  return password;
}

const passwordManual = generarPasswordManual(12);
console.log("Contraseña:", passwordManual);
*/

var generator = require('generate-password');

var password = generator.generate({
	length: 10,
	numbers: true
});

// 'uEyMTw32v9'
console.log(password);