var display1 = "";
var display2 = "";
var display3 = "";
var display4 = "";
var display5 = "";
var resultado = "";

var valor1= "";
var valor2= "";
var operador = "";

var historial = [];
var idx = "";

var mr = 0;
var mMasOne = "";




function actualizarDisplay (){
    document.getElementById('pila-1').innerHTML = display1;
    document.getElementById('pila-2').innerHTML = display2;
    document.getElementById('pila-3').innerHTML = display3;
    document.getElementById('pila-4').innerHTML = display4;
    document.getElementById('pila-3-p').innerHTML = mMasOne;
    document.getElementById('pila-5').innerHTML = display5;
    
}

function removeClassDisplay3(){
    document.getElementById('pila-3-p').classList.add('pila-3-pa');
    document.getElementById('pila-3').classList.add('pila-p-id');
}

function addClassDisplay3(){
    document.getElementById('pila-3-p').classList.remove('pila-3-pa');
    document.getElementById('pila-3').classList.remove('pila-p-id');
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
    //document.getElementById('m-M').addEventListener('click', function(){addNumero('-');});
    document.getElementById('ac').addEventListener('click', function(){addAc()});
    document.getElementById('cls').addEventListener('click', function(){addCls()});
    document.getElementById('mas').addEventListener('click', function(){operaciones('+'),addColor("+")});
    document.getElementById('menos').addEventListener('click', function(){operaciones('-'),addColor("-")});
    document.getElementById('por').addEventListener('click', function(){operaciones('x'),addColor('X')});
    document.getElementById('divide').addEventListener('click', function(){operaciones('÷'),addColor('/')});
    document.getElementById('igual').addEventListener('click', function(){evaluar()});
    document.getElementById('ans-Re').addEventListener('click', function(){ansRe()});
    document.getElementById('ans-Fo').addEventListener('click', function(){ansFo()});
    document.getElementById('mMas').addEventListener('click', function(){memoria("+")});
    document.getElementById('mMenos').addEventListener('click', function(){memoria("-")});
    document.getElementById('mr').addEventListener('click', function(){memoriaMR()}); 
}


function addNumero (valor){
    if(display1.length < 10){  
      removeClassDisplay3();
      display1 = display1 + valor;
      display2 = display2 + valor;
      display4 = "";
      actualizarDisplay();  
    }
    if(display1.length <= 11){
        
    }
    else{
        removeClassDisplay3();
        display1 = valor;
        display2 = display1;
        actualizarDisplay(); 
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
    display3 = "";
    display4 = "";
    document.getElementById('pila-4').style.backgroundColor = "";
    document.getElementById('pila-2').style.color= '';
    document.getElementById('pila-3-p').classList.add('pila-3-pa');
    actualizarDisplay();
}

function addCls(){
    if(display2.indexOf("=")==-1){
        display1 = "";
        var idx = display2.indexOf(operador);
        var cadena = display2.slice(0, idx);
        display2 = cadena;
        resultado = cadena;
        document.getElementById('pila-2').style.color= '';
        document.getElementById('pila-3-p').classList.add('pila-3-pa');
        actualizarDisplay();      
    }else{
        display4 = "La operacion ya fue ejecutada, use AC para resetear el display";
        //document.getElementById('pila-4').style.backgroundColor = "var(--bg-ac)";
        document.getElementById('pila-2').style.color= '';
        document.getElementById('pila-3-p').classList.add('pila-3-pa');
        actualizarDisplay();
    }
    
}

function operaciones(operando){
    operador = operando;
    display4 = "";
    if(display2.indexOf('=')==-1){
        if(display2.indexOf('-')==0){
            valor1 = display1;
            //console.log("estoy rn 1")
            display1 = "";
            display2 = display2 + operador;
            document.getElementById('pila-2').style.color= '';
            actualizarDisplay();  
        }else{
            if(display2.indexOf(operador)==-1){
                //console.log("estoy rn 2")
                if(display1==""){
                    //console.log("estoy rn 3")
                  valor1 = parseFloat(resultado);
                }else{
                    //console.log("estoy rn 4")
                  valor1 = parseFloat(display1);
                }
                //console.log("estoy rn 5")
            display1 = "";
            display2 = display2 + operador;
            document.getElementById('pila-2').style.color= '';
            actualizarDisplay();  
          }else{
            //console.log("estoy rn 6")
              //codigo
          }  
        }
      
    }else{
        valor1 = parseFloat(display1);
        display2 = display1 + operador;
        display1 = "";
        document.getElementById('pila-2').style.color= '';
        actualizarDisplay();

    }
    
    
}

function evaluar(){
    valor2 = parseFloat(display1);
    switch(operador){
        case "+" : display1= eval(valor1 + valor2); break;
        case "-" : display1= eval(valor1 - valor2); break;
        case "x" : display1= eval(valor1 * valor2); break;
        case "÷" : display1= eval(valor1 / valor2); break;
        case "%" : display1= eval(valor1*100/valor2); break;
    }
    display2 = display2 + "=" + display1;
    historial.push(display2);
    document.getElementById('pila-2').style.color= '';
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


function ansRe(){
    if(historial[0]){
       if(!idx){
        idx = historial.length;
        idx = idx-1;
        display2 = historial[idx];
        document.getElementById('pila-2').style.color= 'var(--l-red)';
        actualizarDisplay();       
    }else{ 
        idx = idx-1;
        display2 = historial[idx];
        actualizarDisplay() 
    } 
    }else{
    } 
}

function ansFo(){
    if(!historial[0]){
        idx = historial.length;
    }else{
        idx = idx+1;
        if(idx < historial.length){
            display2 = historial[idx];
            document.getElementById('pila-2').style.color= 'var(--l-red)';
            actualizarDisplay();
        }else{
          idx = 0;
          display2 = historial[idx];
          document.getElementById('pila-2').style.color= 'var(--l-red)';
          actualizarDisplay(); 
        } 
    } 
}

function memoria(signo){
    if(display1){
        if(mr > 0){
            if(signo == "+"){
                mr = mr + parseFloat(display1);
                mMasOne = "M+";
                console.log(mMasOne)
            }
            if(signo == "-"){
                mr = mr - parseFloat(display1);
                mMasOne = "M-";
            }
            display3 = display1;
            display1 = "";
            display2 = "";
            addClassDisplay3();
            actualizarDisplay();
        }else{
          mr = parseFloat(display1);
          mMasOne = "MR";
          display3 = display1;
          display1 = "";
          display2 = "";
          addClassDisplay3();
          actualizarDisplay();
        }   
    }else{
      //aqui va codigo cuando display1 esta vacio  
    } 
}

function memoriaMR(){
        mMasOne = "MR";
        display3 = mr;
        display2 = "";
        display1 = mr;
        addClassDisplay3();
        actualizarDisplay();
    
}


eventos();
