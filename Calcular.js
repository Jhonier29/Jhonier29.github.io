var flag = false;
var numero1 = parseFloat(document.getElementById('numero1').value);
var numero2 = parseFloat(document.getElementById('numero2').value);
var resultado = parseFloat(document.getElementById('resultado').value);
var p1=document.getElementById('mostrar1');
var Pnumero1;
var e;

function resta(){
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    var resultado = parseFloat(document.getElementById('resultado').value);
    var p1=document.getElementById('mostrar1');
    if (flag == false){
        var Pnumero1 = numero1;
    }
    else{
        var Pnumero1 = parseFloat(document.getElementById('mostrar1').innerText);
    }

    document.getElementById('numero1').style.display = 'none';
    document.getElementById('numero2').style.display = 'none';

    
    p1.innerHTML=Pnumero1;
    document.getElementById('mostrar2').innerHTML=numero2;
   

    if (resultado == Pnumero1 - numero2){
        Pnumero1 = resultado;
        p1.innerHTML=Pnumero1;
        document.getElementById('resultado').value="",
        totalTime = 7;
        flag=true;
    }
    else{
        p1.innerHTML=numero1;
        document.getElementById('resultado').value="",
        document.getElementById('audio').play();
        totalTime = 7;
        flag=false;
    }
}
document.addEventListener("keyup", function(e) {
        if (e.keyCode === 13) {
            resta();
        }
    });


function recargar(){
    window.location=document.location.href
}


var totalTime = 7;

function updateClock() {
  document.getElementById('countdown').innerHTML = totalTime;
  var numero1 = parseFloat(document.getElementById('numero1').value);
  if(totalTime==0){
        p1.innerHTML=numero1;
        document.getElementById('resultado').value="",
        document.getElementById('audio').play();
        totalTime = 7;
        flag=false;
        updateClock();
  }else{
    totalTime-=1;
    setTimeout("updateClock()",1000);
  }
}