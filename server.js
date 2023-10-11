function validarDatos() {
  let resultadoTelefono = validarNroTel(document.getElementById("telefono"));
  let resultadoCantPersonas = validarCantPersonas(document.getElementById("cantidad").value);
  let fechaValida = validateDate();

  if (resultadoTelefono && resultadoCantPersonas && fechaValida) {
    alert("Datos validados correctamente");
    return true;
  }
}

function validateDate() {
  let userdate = new Date(document.getElementById("fecha").value).toLocaleString("en-AU", { timeZone: "Australia/Sydney" }).slice(0, 10);
  let today = new Date().toLocaleString("es-AR", { timeZone: "America/Argentina/Buenos_Aires" }).slice(0, 10);
  if (userdate <= today) {
    alert("La fecha tiene que ser mayor a la actual");
    return false;
  } else {
    return true;
  }
}

function validarNroTel(inputtxt) {
  //recibe en el par�metro la referencia a un control input donde cargan el tel�fono

  var nrotel = /^\d{10}$/;

  if (inputtxt.value.match(nrotel)) {
    alert("Teléfono válido!");
    return true;
  } else {
    alert("Teléfono inválido!");
    document.getElementById("telefono").value = "";
    document.getElementById("telefono").focus();

    return false;
  }
}

validarCantPersonas = (nro) => {
  if (nro > 0) {
    return true;
  } else {
    alert("Debe ingresar una cantidad de personas mayor a 0");
    document.getElementById("cantidad").value = "";
    document.getElementById("cantidad").focus();
    return false;
  }
};

//------------------------------------------------------- ESTO FUNCIONA -------------------------------------------------------

// function validateDate() {
//   let userdate = new Date(document.getElementById("fecha").value).toLocaleString("en-AU", { timeZone: "Australia/Sydney" }).slice(0, 10);
//   let today = new Date().toLocaleString("es-AR", { timeZone: "America/Argentina/Buenos_Aires" }).slice(0, 10);
//   console.log(userdate);
//   console.log(today);
//   if (userdate <= today) {
//     alert("La fecha tiene que ser mayor a la actual");
//   }
// }
