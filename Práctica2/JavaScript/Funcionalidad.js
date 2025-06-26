function calcular() {
  var salario = parseFloat(document.getElementById("salario").value);
  if (isNaN(salario)) {
    Swal.fire({
      title: "Error",
      text: "Por favor, ingrese un salario válido.",
      icon: "error",
    });
    return;
  } else {
    if (salario > 0 && salario < 922000) {
      var tax = 0;
      var cs = salario * 0.105;
      var neto = salario - (tax + cs);
    } else if (salario >= 922000 && salario <= 1352000) {
      var tax = salario * 0.1;
      var cs = salario * 0.105;
      var neto = salario - (tax + cs);
    } else if (salario > 1352000 && salario <= 2373000) {
      var tax = salario * 0.15;
      var cs = salario * 0.105;
      var neto = salario - (tax + cs);
    } else {
      Swal.fire({
        title: "Fuera de rango",
        text: "El salario ingresado no está en los rangos permitidos.",
        icon: "warning",
      });
      return;
    }
    console.log("Impuesto: " + tax);
    console.log("Carga Social: " + cs);
    console.log("Neto: " + neto);
    Swal.fire({
      title: "Resultados",
      html: `
                <p>Impuesto: ${tax}</p>
                <p>Carga Social: ${cs}</p>
                <p>Neto: ${neto}</p>
            `,
      icon: "info",
    });
  }
}
document.getElementById("btnCalcular").addEventListener("click", function () {
  alert("Calculando...");
  calcular();
});

document.getElementById("btnGatito").addEventListener("click", function () {
  document.getElementById("parrafo").innerHTML =
    "Hola Usuario. ¿Comó se encuentra? Espero que muy bien.<br> Si quiere ver algo increible haga click en este boton";
  var nuevoParrafo = document.createElement("p");
  nuevoParrafo.innerHTML = "₍^._.^₎ Creaste un gatito!";
  parrafo.appendChild(nuevoParrafo);
});

document
  .getElementById("btnEstudiantes")
  .addEventListener("click", function () {
    estudiantes = [
      { nombre: "Juan", apellido: "Pérez", nota: 85 },
      { nombre: "Ana", apellido: "Gómez", nota: 97 },
      { nombre: "Luis", apellido: "Rodríguez", nota: 71 },
    ];

    var estudiantesList = document.getElementById("estudiantesList");
    estudiantesList.innerHTML = ""; // Limpiar la lista antes de agregar nuevos elementos

    estudiantes.forEach(function (estudiante) {
      var li = document.createElement("li");
      li.textContent = `Nombre: ${estudiante.nombre}, Apellido: ${estudiante.apellido}, Nota: ${estudiante.nota}`;
      estudiantesList.appendChild(li);
    });
    promedio();
  });
function promedio() {
  var total = 0;
  estudiantes.forEach(function (estudiante) {
    total += estudiante.nota;
  });
  var nuevaLinea = document.createElement("p");
  var promedio = total / estudiantes.length; //es para los decimales
  nuevaLinea.innerHTML = `El promedio de las notas es: ${promedio.toFixed(2)}`;

  document.getElementById("estudiantesList").appendChild(nuevaLinea);
}
