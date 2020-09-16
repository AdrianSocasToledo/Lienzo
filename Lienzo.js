var numFilasLienzo = 100;
var numColumnasLienzo = 100;
var numFilasPaleta = 2;
var numColumnasPaleta = 6;
var lienzo = document.getElementById("lienzo");
var paletaColores = document.getElementById("paletaColores");
var colores = [
  "red",
  "blue",
  "green",
  "pink",
  "orange",
  "black",
  "white",
  "violet",
  "coral",
  "grey",
  "brown",
  "aqua",
];
var contadorColores = 0;
var pintar = false;

lienzo.addEventListener("mousedown", function () {
  pintar = true;
});
lienzo.addEventListener("mouseup", function () {
  pintar = false;
});

function crearTablas() {
  for (let filas = 0; filas <= numFilasLienzo; filas++) {
    tr = document.createElement("tr");
    for (let columnas = 0; columnas <= numColumnasLienzo; columnas++) {
      td = document.createElement("td");
      td.setAttribute("class", "tdLienzo");
      td.style.width = "2px";
      td.style.height = "2px";
      //td.style.border="0px";
      //td.style.margin="0px";
      //td.style.padding="0px";
      td.onmouseover = function () {
        if (pintar)
          this.style.backgroundColor = document.getElementById(
            "ejemploColor"
          ).style.backgroundColor;
      };
      tr.appendChild(td);
    }
    lienzo.appendChild(tr);
  }
  lienzo.style.border = "2px solid";

  for (let filas = 0; filas < numFilasPaleta; filas++) {
    tr = document.createElement("tr");
    for (let columnas = 0; columnas < numColumnasPaleta; columnas++) {
      td = document.createElement("td");
      td.style.width = "40px";
      td.style.height = "40px";
      td.style.border = "2px solid";
      td.style.backgroundColor = colores[contadorColores];
      contadorColores++;
      td.onclick = function () {
        document.getElementById(
          "ejemploColor"
        ).style.backgroundColor = this.style.backgroundColor;
      };

      tr.appendChild(td);
    }
    paletaColores.appendChild(tr);
  }

  trExtra = document.createElement("tr");
  labelEjemploColor = document.createElement("td");
  ejemploColorText = document.createTextNode("Muestra: ");
  labelEjemploColor.appendChild(ejemploColorText);

  tdExtra = document.createElement("td");
  tdExtra.style.width = "50px";
  tdExtra.style.height = "50px";
  tdExtra.style.border = "2px solid";
  tdExtra.setAttribute("id", "ejemploColor");

  trExtra.appendChild(labelEjemploColor);
  trExtra.appendChild(tdExtra);
  paletaColores.appendChild(trExtra);
}
