function validateDate() {
  var userdate = new Date(document.getElementById("fecha").value)
    .toLocaleString("es-AR", { timeZone: "America/Argentina/Buenos_Aires" })
    .slice(0, 10);
  var today = new Date().toLocaleString("es-AR", { timeZone: "America/Argentina/Buenos_Aires" }).slice(0, 10);
  console.log(userdate);
  console.log(typeof userdate);
  console.log(today);
  if (userdate < today) {
    alert("La fecha tiene que ser mayor a la actual");
  }
}

// function validateDate() {
//   var userdate = document.getElementById("fecha").value;
//   console.log(userdate);
//   console.log(typeof userdate);
//   var today = new Date();
//   if (userdate < today) {
//     alert("La fecha tiene que ser mayor a la actual");
//   }
// }
