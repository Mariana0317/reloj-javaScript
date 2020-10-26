/*window.setTimeout(saludar(), 4000)//este metodo me ayuda a ejecutar una funcion despues del metodo establecido en el segundo parametro

function saludar(){
    alert("Hola Mundo♥☻☺♀♪")
}*/

//setInterval

/*let tiempo = window.setInterval(contar, 1000);

let contador = 1;
function contar(){
    document.write(contador + "<br>")
    contador++;
    if(contador > 15){
        clearInterval(tiempo)
    }
}*/

function crearHora() {
  let fecha = new Date(), //creo la variale fecha a traves de la cual accedo a lo demas datos
    hora = fecha.getHours(), //creo variable hora
    minutos = fecha.getMinutes(), //mnutos asi tdos asialmos en variables la informacion del ojeto Date todos los datos para poder utilizarlos
    segundos = fecha.getSeconds(),
    diaSemana = fecha.getDay(),
    numDia = fecha.getDate(),
    mes = fecha.getMonth(),
    anio = fecha.getFullYear();

  //eviar al html las variables

  let parrafDiaSemana = document.getElementById("diaSemana"),
    parrafDia = document.getElementById("dia"),
    parrafMes = document.getElementById("mes"),
    parrafAnio = document.getElementById("anio");

  //asignar valores a los objetos
  parrafDia.innerText = numDia;
  parrafAnio.innerText = anio;

  let semana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
  parrafDiaSemana.innerText = semana[diaSemana];

  let meses = [
    "Enero",
    "Fecbrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  parrafMes.innerText = meses[mes];

  //obtener objetos del DOM

  let parrafHora = document.getElementById("hora"),
    parrafMinutos = document.getElementById("minuto"),
    parrafSegundos = document.getElementById("segundo"),
    parrafAmPm = document.getElementById("ampm");

  parrafHora.innerText = hora;
  parrafMinutos.innerText = minutos; //despues del igual va la variable de arriba minutos = fecha.getMinutes(); que actualiza el estado
  parrafSegundos.innerText = segundos;

  if (hora >= 12) {
    parrafAmPm.innerText = "P.M.";
    hora = hora - 12;
  } else {
    parrafAmPm.innerText = "A.M.";
  }

  if (segundos < 10) {
    parrafSegundos.innerText = "0" + segundos;
  } else {
    parrafSegundos.innerText = segundos;
  }

  if (minutos < 10) {
    parrafMinutos.innerText = "0" + minutos;
  } else {
    parrafMinutos.innerText = minutos;
  }

  if (parrafHora < 10) {
    parrafHora.innerText = "0" + hora;
  } else {
    parrafHora.innerText = hora;
  }
}
window.setInterval(crearHora, 1000);

function cambiarColor() {
  let coloresNeon = document.getElementById("colorear");
  if (coloresNeon.className.includes("blue") == true) {
    coloresNeon.className = "w-100 py-5 pink";
  } else if (coloresNeon.className.includes("pink") == true) {
    coloresNeon.className = "w-100 py-5 green";
  } else {
    coloresNeon.className = "w-100 py-5 blue";
  }
}

function cambiarBoton() {
  let colorBoton = document.getElementById("boton");

  if (colorBoton.className.includes("blue") == true) {
    colorBoton.className = "btn btn-dark mx-5 my-5 pink";
  } else if (colorBoton.className.includes("pink") == true) {
    colorBoton.className = "btn btn-dark mx-5 my-5 green";
  } else {
    colorBoton.className = "btn btn-dark mx-5 my-5 blue";
  }
}
