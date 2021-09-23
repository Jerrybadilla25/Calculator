var display1 = "";
var display2 = "";
var display3 = "";
var display4 = "";
var resultado = "";

var valor1= "";
var valor2= "";
var operador = "";

var historial = [];

const operandoMas = document.getElementById('mas');



function actualizarDisplay (){
    document.getElementById('pila-1').innerHTML = display1;
    document.getElementById('pila-2').innerHTML = display2;
    document.getElementById('pila-3').innerHTML = display3;
    document.getElementById('pila-4').innerHTML = display4;
    
}

function eventos (){
    document.getElementById('n1').addEventListener('click', function(){addNumero('1')});
    document.getElementById('n2').addEventListener('click', function(){addNumero('2')});
    document.getElementById('n3').addEventListener('click', function(){addNumero('3')});
    document.getElementById('n4').addEventListener('click', function(){addNumero('4')});
    document.getElementById('n5').addEventListener('click', function(){addNumero('5')});
    document.getElementById('n6').addEventListener('click', function(){addNumero('6')});
    document.getElementById('n7').addEventListener('click', function(){addNumero('7')});
    document.getElementById('n8').addEventListener('click', function(){addNumero('8')});
    document.getElementById('n9').addEventListener('click', function(){addNumero('9')});
    document.getElementById('n0').addEventListener('click', function(){addNumero('0')});
    document.getElementById('punto').addEventListener('click', function(){addPunto('.')}); 
    document.getElementById('ac').addEventListener('click', function(){addAc()});
    document.getElementById('cls').addEventListener('click', function(){addCls()});
    document.getElementById('mas').addEventListener('click', function(){operaciones('+'),addColor("+")});
    document.getElementById('menos').addEventListener('click', function(){operaciones('-'),addColor("-")});
    document.getElementById('por').addEventListener('click', function(){operaciones('X'),addColor('X')});
    document.getElementById('divide').addEventListener('click', function(){operaciones('/'),addColor('/')});
    document.getElementById('igual').addEventListener('click', function(){evaluar()});
    
}


function addNumero (valor){
    if(display1.length < 10){
      display1 = display1 + valor;
      display2 = display2 + valor;
      actualizarDisplay();  
    }else{

    }
    
}

function addPunto(){
    if(display1.indexOf('.')==-1){
        display1 = display1 + ".";
        display2 = display2 + ".";
        actualizarDisplay();
    }
}

function addAc(){
    display1 = "";
    display2 = "";
    display4 = "";
    document.getElementById('pila-4').style.backgroundColor = "";
    actualizarDisplay();
}

function addCls(){
    if(display2.indexOf("=")==-1){
        display1 = "";
        var idx = display2.indexOf(operador);
        var cadena = display2.slice(0, idx);
        display2 = cadena;
        resultado = cadena;
        
        actualizarDisplay();      
    }else{
        display4 = "No se puede borrar el segundo termino ya que la operacion fue ejecutada";
        document.getElementById('pila-4').style.backgroundColor = "var(--bg-ac)";
        actualizarDisplay();
    }
    
}

function operaciones(operando){
    operador = operando;
    document.getElementById('pila-4').style.backgroundColor = "";
    display4 = "";
    if(display2.indexOf('=')==-1){
      if(display2.indexOf(operador)==-1){
          if(display1==""){
            valor1 = parseFloat(resultado);
          }else{
            valor1 = parseFloat(display1);
          }
      
      display1 = "";
      display2 = display2 + operador;
      actualizarDisplay();  
    }else{}  
    }else{
        valor1 = parseFloat(display1);
        display2 = display1 + operador;
        display1 = "";
        actualizarDisplay();

    }
    
    
}

function evaluar(){
    valor2 = parseFloat(display1);
    switch(operador){
        case "+" : display1= eval(valor1 + valor2); break;
        case "-" : display1= eval(valor1 - valor2); break;
        case "X" : display1= eval(valor1 * valor2); break;
        case "/" : display1= eval(valor1 / valor2); break;
    }
    display2 = display2 + "=" + display1;
    historial.push(display2);
    actualizarDisplay();

}

function retraso(color){
    if(color == "+"){
        document.getElementById('mas').style.backgroundColor = "";
    }
    if(color == "-"){
        document.getElementById('menos').style.backgroundColor = "";
    }
    if(color == "X"){
        document.getElementById('por').style.backgroundColor = "";
    }
    if(color == "/"){
        document.getElementById('divide').style.backgroundColor = "";
    }
    
}

function addColor(color){
    if(color =="+"){
        document.getElementById('mas').style.backgroundColor = "var(--l-red)";
        setTimeout(function(){retraso(color)}, 800);
    }
    if(color =="-"){
        document.getElementById('menos').style.backgroundColor = "var(--l-red)";
        setTimeout(function(){retraso(color)}, 800);
    }
    if(color =="X"){
        document.getElementById('por').style.backgroundColor = "var(--l-red)";
        setTimeout(function(){retraso(color)}, 800);
    }
    if(color =="/"){
        document.getElementById('divide').style.backgroundColor = "var(--l-red)";
        setTimeout(function(){retraso(color)}, 800);
    }
}




eventos();