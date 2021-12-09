var pi = "";
var e = "";

function constantes() {
  document.getElementById("raiz").addEventListener("click", function () {
    raiz();
  });
  document.getElementById("pi").addEventListener("click", function () {
    numPi();
  });
  document.getElementById("e").addEventListener("click", function () {
    numE();
  });
  document.getElementById("porciento").addEventListener("click", function () {
    porcentaje();
  });
  document.getElementById("m-M").addEventListener("click", function () {
    masMenos();
  });
}

function masMenos() {
  if (display1 == "") {
      display4 = "Introduce primero el digito";
      actualizarDisplay();
  } else {
    let x = parseFloat(display1);
    let y = display2;
    display1 = eval(x - 2 * x);
    let d = y.indexOf(operador);
    if (d !== 0) {
      t = display2.slice(0, d + 1);
      display2 = t + display1;
      actualizarDisplay();
    }
    if (d == 0) {
      if (display2.indexOf("-") == 0) {
        actualizarDisplay();
      } else {
        display2 = display1.toString();
      }
      actualizarDisplay();
    }
  }
}

function porcentaje() {
  valor1 = parseFloat(display1);
  operador = "%";
  display2 = display2 + "%";
  display1 = "";
  actualizarDisplay();
}

function raiz() {
  if (display1) {
    var num1 = parseFloat(display1);
    var num2 = Math.sqrt(num1);
    display1 = num2;
    display2 = "√" + num1 + "=" + display1;
    actualizarDisplay();
  } else {
    display4 = "Introduzca primero el numero";
    actualizarDisplay();
  }
}

function numPi() {
  if (pi) {
    display2 = display2 + "π";
    display1 = pi;
    actualizarDisplay();
  } else {
    pi = Math.PI.toFixed(5);
    display2 = "π";
    display1 = pi;
    actualizarDisplay();
  }
}

function numE() {
  if (e) {
    display2 = display2 + "e";
    display1 = e;
    actualizarDisplay();
  } else {
    e = Math.E.toFixed(5);
    display2 = "e";
    display1 = e;
    actualizarDisplay();
  }
}

const teclas = [
  "Numpad1",
  "Numpad2",
  "Numpad3",
  "Numpad4",
  "Numpad5",
  "Numpad6",
  "Numpad7",
  "Numpad8",
  "Numpad9",
  "Numpad0",
  "NumpadDecimal",
  "NumpadEnter",
  "NumpadDivide",
  "NumpadMultiply",
  "NumpadSubtract",
  "NumpadAdd",
  "KeyC",
  "KeyA",
];
const teclasIndice = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  ".",
  "=",
  "÷",
  "x",
  "-",
  "+",
  "C",
  "A",
];

document.addEventListener("keydown", logKey);

function logKey(e) {
  let ltr = e.code;
  let idx = teclas.indexOf(ltr);
  if (idx >= 0 && idx <= 9) {
    addNumero(teclasIndice[idx]);
  } else if (idx == 10) {
    addPunto();
  } else if (idx == 11) {
    evaluar();
  } else if (idx >= 12 && idx <= 15) {
    operaciones(teclasIndice[idx]);
  } else if (idx == -1) {
    display4 = `use tecla "C" y "A" para borrar`;
    console.log(display4);
    actualizarDisplay();
  } else if (idx == 16) {
    addCls();
  } else if (idx == 17) {
    addAc();
  }
}

constantes();
