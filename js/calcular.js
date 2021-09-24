// Obtém a data/hora atual
var data = new Date();

// Guarda cada pedaço em uma variável
var dia     = data.getDate();           // 1-31
var dia_sem = data.getDay();            // 0-6 (zero=domingo)
var mes     = data.getMonth();          // 0-11 (zero=janeiro)
var ano2    = data.getYear();           // 2 dígitos
var ano4    = data.getFullYear();       // 4 dígitos
var hora    = data.getHours();          // 0-23
var min     = data.getMinutes();        // 0-59
var seg     = data.getSeconds();        // 0-59
var mseg    = data.getMilliseconds();   // 0-999
var tz      = data.getTimezoneOffset(); // em minutos

// Formata a data e a hora (note o mês + 1)




var str_data = (mes+1) + "-" + dia + "-" + ano4;
var str_hora = hora + ':' + min + ':' + seg;






    
  
  


 

  


 

 

 calculadora = () =>{}

 var botaoCalcular = document.getElementById('button-calc');

 botaoCalcular.addEventListener("click", function(event) {
  console.log(event.target); // este é o elemento clicado




 

  


  var custodoEnvio  = document.getElementById('custo-do-envio')
var custodoTransporte  = document.getElementById('custo-do-transporte')
 var pesodoProduto =  document.getElementById("peso-produto").value;

 var valordoProduto =  document.getElementById("valor-produto").value;
var frete = 0;
if(pesodoProduto == 0) {
    
    alert("Coloque o peso do Produto");
    document.getElementById("peso-produto").focus();
    return false
}
if(pesodoProduto <= 900){
 frete = 25.50
} else {
    if(pesodoProduto <= 1300) {
        frete = 36.10;
    } else {
        if(pesodoProduto <= 1800) {
            frete =  51.50;
        }
    }
}
if (valordoProduto == 0 ) {
    var custoTotaldoEnvio = parseFloat(frete) ;
} else {
    var custoTotaldoEnvio = parseFloat(frete) + parseFloat(valordoProduto);

}
custoTotaldoEnvio = custoTotaldoEnvio;

custodoTransporte.innerHTML = `USD `+ frete.toFixed(2);
custodoEnvio.innerHTML = `USD `+custoTotaldoEnvio.toFixed(2);


})
 









