var stoA = document.getElementById('sto-a');
var stoB = document.getElementById('sto-b');
var stoC = document.getElementById('sto-c');
var stoD = document.getElementById('sto-d');
var stoE = document.getElementById('sto-e');

var localA = localStorage.getItem("stoA");
var localB = localStorage.getItem("stoB");
var localC = localStorage.getItem("stoC");
var localD = localStorage.getItem("stoD");
var localE = localStorage.getItem("stoE");

var arrayNew = [];





function  arrayLocal(){
    if(!localA){
        localA = "-";
    }
    if(!localB){
        localB = "-";
    }
    if(!localC){
        localC = "-";
    }
    if(!localD){
        localD = "-";
    }
    if(!localE){
        localE = "-";
    }
    
}

function actLocal(nB){
    if(nB == "A"){
        localA = display1;
    }
    if(nB == "B"){
        localB = display1;
    }
    if(nB == "C"){
        localC = display1;
    }
    if(nB == "D"){
        localD = display1;
    }
    if(nB == "E"){
        localE = display1;
    }
}



async function printDisplay5(){
    arrayLocal();
    display5 = `
        <div class="pila-5">
         <div class="pila-5-p" id="inner-A">
            <p>STO A</p>
            <p>${localA}</p>
         </div>
         <div class="pila-5-p">
            <p>STO B</p>
            <p>${localB}</p>
         </div>
         <div class="pila-5-p">
            <p>STO C</p>
            <p>${localC}</p>
         </div>
         <div class="pila-5-p">
            <p>STO D</p>
            <p>${localD}</p>
         </div>
         <div class="pila-5-p">
            <p>STO E</p>
            <p>${localE}</p>
         </div>
        </div>
    `
    actualizarDisplay();
       
}

function menSTO(){
    document.getElementById('i-sto-a').addEventListener('click', function(){addSTO(stoA, "stoA", "A")});
    document.getElementById('i-sto-b').addEventListener('click', function(){addSTO(stoB, "stoB", "B")});
    document.getElementById('i-sto-c').addEventListener('click', function(){addSTO(stoC, "stoC", "C")});
    document.getElementById('i-sto-d').addEventListener('click', function(){addSTO(stoD, "stoD", "D")});
    document.getElementById('i-sto-e').addEventListener('click', function(){addSTO(stoE, "stoE", "E")});

    document.getElementById('sto-a').addEventListener('click', function(){viewSTO(localA, "stoA")});
    document.getElementById('sto-b').addEventListener('click', function(){viewSTO(localB, "stoB")});
    document.getElementById('sto-c').addEventListener('click', function(){viewSTO(localC, "stoC")});
    document.getElementById('sto-d').addEventListener('click', function(){viewSTO(localD, "stoD")});
    document.getElementById('sto-e').addEventListener('click', function(){viewSTO(localE, "stoE")});

}


function addSTO(sto, valor, nB){
    actLocal(nB);
    localStorage.removeItem(valor);
    sto.style.color = "var(--l-red)";
    sto.style.backgroundColor = "var(--bg-header)";
    localStorage.setItem(valor, display1);
    display2= "";
    display3 = display1;
    mMasOne = valor.toUpperCase();
    display4 = `valor almacenado en ${valor.toUpperCase()}`
    display1 = "";
    arrayLocal();
    printDisplay5();
    addClassDisplay3();
    actualizarDisplay();
    
    
}


function localSTO(){
    if(localA){
        stoA.style.color = "var(--l-red)";
        stoA.style.backgroundColor = "var(--bg-header)";
    }
    if(localB){
        stoB.style.color = "var(--l-red)";
        stoB.style.backgroundColor = "var(--bg-header)";
    }
    if(localC){
        stoC.style.color = "var(--l-red)";
        stoC.style.backgroundColor = "var(--bg-header)";
    }
    if(localD){
        stoD.style.color = "var(--l-red)";
        stoD.style.backgroundColor = "var(--bg-header)";
    }
    if(localE){
        stoE.style.color = "var(--l-red)";
        stoE.style.backgroundColor = "var(--bg-header)";
    }
}

function viewSTO(sto,valor){
    sto = localStorage.getItem(valor);
    if(display2.indexOf("÷")==4){
        display2 =display2 + valor;
        display1 = sto;
        actualizarDisplay();
    }
    if(display2.indexOf("-")==4){
        display2 =display2 + valor;
        display1 = sto;
        actualizarDisplay();
    }
    if(display2.indexOf("x")==4){
        display2 =display2 + valor;
        display1 = sto;
        actualizarDisplay();
    }
    if(display2.indexOf("+")==4){
        display2 =display2 + valor;
        display1 = sto;
        actualizarDisplay();
    }else{
        display2 = valor;
        display1 = sto;
        actualizarDisplay();
    }   
}

menSTO();
localSTO();
printDisplay5();
arrayLocal();


