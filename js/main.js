$(function(){



  $('#cuadrados_medios').click(cuadrados_medios);
  $('#productos_medios').click(productos_medios);
  $('#multiplicador_constante').click(multiplicador_constante);
  $('#lineal').click(lineal);
  $('#congruencial_multiplicativo').click(congruencial_multiplicativo);
  $('#generar_semillas_lineal').click(generar_semillas_lineal);
  $('#generar_semillas_congruencial_multiplicativo').click(generar_semillas_congruencial_multiplicativo);

  $('#prueba_medias').click(prueba_medias);
  $('#prueba_varianzas').click(prueba_varianzas);
  $('#prueba_chi_cuadrado').click(prueba_chi_cuadrado);
  $('#prueba_ks').click(prueba_ks);
  $('#prueba_corridas').click(prueba_corridas);
  $('#prueba_corridas_media').click(prueba_corridas_media);
  $('#prueba_poker').click(prueba_poker);


});


function generar_semillas_lineal(){
  $('#m').val(Math.pow(2,((Math.random()*20)+1).toFixed()));
  $('#a').val(1 + 4*(((Math.random()*10)).toFixed()));
  var c =(Math.random()*10).toFixed();
  var primos = [5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41];
  $('#c').val(primos[c]);

}

function generar_semillas_congruencial_multiplicativo(){
  $('#m').val(Math.pow(2,((Math.random()*9)+5).toFixed()));
  $('#a').val(3 + 8*(((Math.random()*10)+1).toFixed()));
}


function cuadrados_medios(){

  var items = $('.list-group-item');


  var x0 = $('#x0').val();
  var D = x0.length;
  var num = $("#numero_al").val();
  var y;
  var r = [];
  var imp = 0;
  var fiximp = 0;

  if(x0.length ==0 || num.length == 0)
    return alert("No puede dejar ningun campo en blanco");

  if(D <=3 )
    return alert("La cantidad de digitos tiene que ser mayor que 3");

  items.remove();
    $('.pruebas').removeClass('hidden');
  $('.panel-title').html("Números aleatorios (Generando...)");

  if(D % 2 != 0) imp = 1;


  for(var i=0;i<num;i++){
    y = x0 * x0;
    y = y.toString();

    if(y.length % 2 != 0 ){
      if(imp >0 ) fiximp = 2;
      y= '0'+ y;
    }

    x0 = y.substring((y.length/2)-((D+imp-fiximp)/2),(y.length/2)+((D-imp+fiximp)/2));

    var repeated = r.indexOf(Number('0.'+x0))> -1;

    r.push(Number('0.'+x0));
    if( !repeated)
      $('.list-group').append('<li class="list-group-item">'+r[i]+'</li>');

    if(repeated){
      $($('.list-group-item').get(r.indexOf(Number('0.'+x0)))).addClass('repeated');
      $('.panel-title').html("Números aleatorios (ciclo : "+ i+ ")");
      $('.list-group').append('<li class="list-group-item repeated">'+r[i]+'</li>');
      return;
    }
  }
  $('.panel-title').html("Números aleatorios");

}

function productos_medios(){

  var items = $('.list-group-item');



  var x0 = $('#x0').val();
  var x1 = $('#x1').val();
  if(x0.length != x1.length)
    return alert("las semillas tienen que tener la misma cantidad de digitos");

  var D = x0.length;
  var num = $("#numero_al").val();
  var y;
  var r = [];
  var imp= 0;
  var fiximp = 0;


  if(x0.length ==0 || num.length == 0)
    return alert("No puede dejar ningun campo en blanco");

  if(D <=3 )
    return alert("La cantidad de digitos tiene que ser mayor que 3");

  var xn;
  items.remove();
  $('.pruebas').removeClass('hidden');
  $('.panel-title').html("Números aleatorios (Generando...)");

  if(D % 2 != 0) imp=1;


  for(var i=0;i<num;i++){

    y = x0 * x1;
    y = y.toString();
    if(y.length % 2 != 0 ){
      if(imp >0 ) fiximp = 2;
      y= '0'+ y;
    }

    xn = y.substring((y.length/2)-((D+imp-fiximp)/2),(y.length/2)+((D-imp+fiximp)/2));

    var repeated = r.indexOf(Number('0.'+xn))> -1;

    r.push(Number('0.'+xn));
    if( !repeated)
      $('.list-group').append('<li class="list-group-item">'+r[i]+'</li>');

    if(repeated){
      $($('.list-group-item').get(r.indexOf(Number('0.'+xn)))).addClass('repeated');
      $('.panel-title').html("Números aleatorios (ciclo : "+ i+ ")");
      $('.list-group').append('<li class="list-group-item repeated">'+r[i]+'</li>');
      return;
    }

    x0=x1;
    x1=xn;
  }
  $('.panel-title').html("Números aleatorios");

}

function multiplicador_constante(){

  var items = $('.list-group-item');


  var x0 = $('#x0').val();
  var c = $('#c').val();
  if(c == 0)
    return alert("EL multiplicador constante no puede ser cero");

  if(x0.length != c.length)
    return alert("las semillas tienen que tener la misma cantidad de digitos");

  var D = x0.length;
  var num = $("#numero_al").val();
  var y;
  var r = [];
  var imp = 0;
  var fiximp = 0;

  if(x0.length ==0 || num.length == 0)
    return alert("No puede dejar ningun campo en blanco");

  if(D <=3 )
    return alert("La cantidad de digitos tiene que ser mayor que 3");

  items.remove();
  $('.panel-title').html("Números aleatorios (Generando...)");
    $('.pruebas').removeClass('hidden');

  if(D % 2 != 0 ) imp=1;


  for(var i=0;i<num;i++){

    y = x0 * c;
    y = y.toString();


    if(y.length % 2 != 0 ){
      if(imp >0 ) fiximp = 2;
      y= '0'+ y;
    }

    x0 =  y.substring((y.length/2)-((D+imp-fiximp)/2),(y.length/2)+((D-imp+fiximp)/2));

    var repeated = r.indexOf(Number('0.'+x0))> -1;

    r.push(Number('0.'+x0));
    if( !repeated)
      $('.list-group').append('<li class="list-group-item">'+r[i]+'</li>');

    if(repeated){
      $($('.list-group-item').get(r.indexOf(Number('0.'+x0)))).addClass('repeated');
      $('.panel-title').html("Números aleatorios (ciclo : "+ i+ ")");
      $('.list-group').append('<li class="list-group-item repeated">'+r[i]+'</li>');
      return;
    }

  }
  $('.panel-title').html("Números aleatorios");

}

function lineal(){

  var items = $('.list-group-item');


  var x0 = $('#x0').val();
  var a = $('#a').val();
  var c = $('#c').val();
  var m = $('#m').val();
  var r = [];

  if(x0.length == 0  || a.length == 0 || c.length == 0 || m.length == 0)
    return alert("No puede dejar ningun campo en blanco");

  $('.panel-title').html("Números aleatorios (Generando...)");
  items.remove();

  $('.pruebas').removeClass('hidden');
  var rep = 0;

  var i=0;

  while(true){

    x0 = (Number(a*x0) + Number(c)) % m;

    var repeated = r.indexOf(x0/(m-1))> -1;
    r.push(x0/(m-1));
    if( !repeated)
      $('.list-group').append('<li class="list-group-item">'+r[i]+'</li>');

    if(repeated){
      $($('.list-group-item').get(r.indexOf(x0/(m-1)))).addClass('repeated');
      $('.panel-title').html("Números aleatorios (ciclo : "+ i+ ")");
      $('.list-group').append('<li class="list-group-item repeated">'+r[i]+'</li>');
      return;
    }
    i=i+1;

  };
  $('.panel-title').html("Números aleatorios");

}


function congruencial_multiplicativo(){

  var items = $('.list-group-item');


  var x0 = $('#x0').val();

  var a = $('#a').val();

  var m = $('#m').val();

  var r = [];


  if(x0.length == 0  || a.length == 0 || m.length == 0)
    return alert("No puede dejar ningun campo en blanco");

  if(x0 % 2 ==0) return alert("La semilla tiene que ser un numero impar");

  items.remove();
    $('.pruebas').removeClass('hidden');
  $('.panel-title').html("Números aleatorios (Generando...)");

  var i = 0;


  while(true){

    x0 = Number(a*x0) % m;

    var repeated = r.indexOf(x0/(m-1))> -1;

    r.push(x0/(m-1));

    if( !repeated)
      $('.list-group').append('<li class="list-group-item">'+r[i]+'</li>');

    if(repeated){
      $($('.list-group-item').get(r.indexOf(x0/(m-1)))).addClass('repeated');
      $('.panel-title').html("Números aleatorios (ciclo : "+ i+ ")");
      $('.list-group').append('<li class="list-group-item repeated">'+r[i]+'</li>');
      return;
    }
    i=i+1;


  }
  $('.panel-title').html("Números aleatorios");

}

function prueba_medias(){

  var numbs = [];
  var total = 0;
  var numbs_string = $('.list-group-item');
  for( var i=0; i<numbs_string.length-1; i++ ){
    numb = Number($(numbs_string[i]).html());
    total+= numb;
    numbs.push(numb);
  }
  media = total/(numbs.length)
  //var alpha = 0.05;//debe ser dinamico y segun tabla

  var delta = 1.96*(1/(Math.sqrt(12*(numbs.length))))
  var ls = 0.5 + delta;
  var li = 0.5 - delta;
  if(media>= li && media <= ls) return alert("No se rechaza H0 con un 95% de confidencialidad");
  alert("Se rechaza H0 con un  95% de confidencialidad");

}


function prueba_varianzas(){
  var numbs = [];
  var total = 0;

  var numbs_string = $('.list-group-item');
  // if(numbs_string.length<100) return alert("el programa no puede hallar chi cuadarado de una muestra menor a 100");

  for( var i=0; i<numbs_string.length-1; i++ ){
    numb = Number($(numbs_string[i]).html());
    total+= numb;
    numbs.push(numb);
  }
  media = total/(numbs.length)


  total = 0; //ahora para varianza
  for (var i=0; i< numbs.length; i++){
    total+= Math.pow(numbs[i]-media,2);
  }

  varianza = total/(numbs.length-1);
  //var alpha = 0.05;//debe ser dinamico y segun tabla
  var z = 1.96;
  var z2= 1.44;

  var chi= 0.5* Math.pow((z+ Math.sqrt(2*numbs.length-1)),2);
  var chi2= 0.5* Math.pow((z2+ Math.sqrt(2*numbs.length-1)),2);

  var div = (12*(numbs.length-1))
  var ls = chi/div;
  var li = chi2 /div;
  console.log("Varianza: "+ varianza);
  console.log("LI: ",li);
  console.log("LS: ",ls);
  if(varianza>= li && varianza <= ls) return alert("No se rechaza H0 con un 95% de confidencialidad");
  alert("Se rechaza H0 con un  95% de confidencialidad");
}

function prueba_chi_cuadrado(){


    var numbs_string = $('.list-group-item');

    // if(numbs_string.length<100) return alert("el programa no puede hallar chi cuadarado de una muestra menor a 100");

    var m = Math.sqrt(numbs_string.length-1);
    var subintervalo = Number((1/m).toFixed(5));
    var subintervalos = [];

    m = Math.floor(m);

    var frecuencia_esperada = (numbs_string.length-1)/m;

    contador=0;

    for(var i=0; i<m; i++){

      subintervalos[i] = {};
      subintervalos[i].frecuencia_observada = 0;

      subintervalos[i].inicio = contador;

      contador+= subintervalo;
      subintervalos[i].fin = contador;
    }
    subintervalos[m]={};
    subintervalos[i].frecuencia_observada = 0;
    subintervalos[m].inicio = contador;
    subintervalos[m].fin =  1;

    for( var i=0; i<numbs_string.length-1; i++ ){
      numb = Number($(numbs_string[i]).html());
      encontrar_intervalo(numb,subintervalos)
    }
    var chi_cero = 0;


     var z_90 = 1.28;
     var z_95 = 1.645;


    var chi= 0.5*Math.pow((z_95+ Math.sqrt(2*m-1)),2);

    for (var i =0;i<m;i++){
      var  a = Math.pow(frecuencia_esperada - subintervalos[i].frecuencia_observada,2);
      chi_cero += (a/frecuencia_esperada);
      console.log("fe: "+frecuencia_esperada);
      console.log("fo: "+ subintervalos[i].frecuencia_observada);
    }

    console.log("chicero "+chi_cero);
    console.log("chi "+chi);
    if(chi_cero < chi) return alert("No se rechaza que los numeros siguen una distribucion uniforme");
    alert("Se rechaza que los numeros siguen una distribucion uniforme");

}


function prueba_ks(){
  var  alfa = prompt("Esocoja el nivel de significancia (0.1,0.05 0.01)");
  var contador =0;
  console.log(alfa);
  while (alfa!=0.1 && alfa !=0.05 && alfa !=0.01 && contador<3){
    console.log('while');
    alfa = prompt("El valor no es valido. Esocoja el nivel de significancia (0.1,0.05 0.01)");
    contador++;
  }
  if(contador>=3) return alert("Numero de intentos excedido");
  var numbs_string = $('.list-group-item');
  var n = numbs_string.length-1;

  if(numbs_string.length>25) return alert("Esta prueba se realiza en muestras pequeñas <=25");

  var numbs = [];

  for( var i=0; i<n; i++ ){
    numb = Number($(numbs_string[i]).html());
    numbs.push(numb);
  }
  numbs.sort();
  valores_d_mas = [];
  valores_d_menos = [];
  for(var i =0; i<n; i++){
    valores_d_mas.push( ((i+1)/n) - numbs[i]);
    valores_d_menos.push( numbs[i] - ((i+1-1)/n))
  }
  var d_mas = getMaxOfArray(valores_d_mas);
  var d_menos = getMaxOfArray(valores_d_menos);
  console.log(valores_d_mas);
  console.log(valores_d_menos);
  var d = d_mas > d_menos ? d_mas : d_menos;

  if(d > tabla_ks[alfa][n]) return alert(" Se rechaza que los numeros tengan una distribución uniforme");
  alert("No se puede rechazar que los numeros sigan una distribucion uniforme");

}


function prueba_corridas(){
  var S = [];
  var numbs =[];
  var numbs_string = $('.list-group-item');
  var n = numbs_string.length-1;
  var numb = Number($(numbs_string[i]).html());
  numbs.push(numb);
  for( var i=1; i<n; i++ ){
    numb = Number($(numbs_string[i]).html());
    if(numb <= numbs[i-1]) S.push(0);
    if(numb > numbs[i-1]) S.push(1);
    numbs.push(numb);
  }

  var flag = S[0];
  var corridas = 1;
  for(var i=1;i<S.length-1;i++){
    if(S[i]!= flag){
      corridas++;
      flag = S[i];
    }
  }

  var corridas_esperadas = (2*n -1)/3;
  var varianza = (16*n -29)/90;
  var z_95  = 1.96;
  var z_cero = Math.abs((corridas - corridas_esperadas)/(Math.sqrt(varianza)));
  if(z_cero > z_95 ) return alert("se rechaza que los numeros generados sean independientes");
  alert("No se puede rechazar que los numeros sea n independientes");

}


function prueba_corridas_media(){
  var S = [];
  var numbs_string = $('.list-group-item');
  var n = numbs_string.length-1;
  var total = 0;

  for( var i=0; i<n; i++ ){
      numb = Number($(numbs_string[i]).html());
      numbs.push(numb);
  }



  for( var i=0; i<n; i++ ){
    if(numbs[i] <= 0.5) S.push(0);
    if(numbs[i]> 0.5) S.push(1);
  }

  //hasta aca;
  var n0= 0;
  var n1=0;
  var corridas = 1;
  for(var i=1;i<S.length-1;i++){
    if(S[i]!= flag){
      corridas++;
      flag = S[i];
    }
    if(S[i == 0]) return n0++;
    n1++;
  }

  var corridas_esperadas = (2*n0*n1)/n+1 + 0.5;
  var varianza = (2*n0*n1)*(2*n0*n1-n+1)/Math.pow(n,2)*(n+1-1);
  var z_95  = 1.96;
  var z_cero = (corridas - corridas_esperadas)/Math.sqrt(varianza);
  if(z_cero < z_95  && z_cero > z_95*-1) return alert ("No se puede rechazar que los numeros sea n independientes");
  return alert("Se rechaza que los numeros generados sean independientes");

}

function prueba_poker(){
  var S = [];
  var numbs_string = $('.list-group-item');
  var n = numbs_string.length-1;
  var total = 0;
  var tres_cifras = [];
  var cuatro_cifras = [];
  var cinco_cifras = [];

  for( var i=0; i<n; i++ ){
      numb = Number($(numbs_string[i]).html()).toString();
      if( numb.length-2 == 3) tres_cifras.push(numb);
      if( numb.length-2 == 4) cuatro_cifras.push(numb);
      if( numb.length-2 == 5) cinco_cifras.push(numb);
  }
  var tres_cifras_tercia = 0;
  var tres_cifras_1p = 0;
  var tres_cifras_td = 0;
  for (var i=0; i< tres_cifras.length;i++){
    var numb = tres_cifras[i];
    if( numb[2] == numb[3] && numb[3] == numb[4]) {tres_cifras_tercia++;}
    else if((numb[2] == numb[3] || numb[2] == numb[4] || numb[3] == numb[4])){ tres_cifras_1p++}
    else{ tres_cifras_td++}
  }
  var cuatro_cifras_tercia = 0;
  var cuatro_cifras_1p = 0;
  var cuatro_cifras_2p = 0;
  var cuatro_cifras_td = 0;
  var cuatro_cifras_p = 0;


  for (var i=0; i< cuatro_cifras.length;i++){
    var numb = cuatro_cifras[i];
    if( numb[2] == numb[3] && numb[3] == numb[4]) {cuatro_cifras_tercia++;}
    else if((numb[2] == numb[3] || numb[2] == numb[4] || numb[3] == numb[4])){ cuatro_cifras_1p++}
    else{ cuatro_cifras_td++}
  }

  var cinco_cifras_quintilla = 0;
  var cinco_cifras_1p = 0;
  var cinco_cifras_1p1t = 0;
  var cinco_cifras_2p = 0;
  var cinco_cifras_tercia = 0;
  var cinco_cifras_td = 0;
  var cinco_cifras_p = 0;


  for (var i=0; i< cinco_cifras.length;i++){
    var numb = cinco_cifras[i];
    if( numb[2] == numb[3] && numb[3] == numb[4]) {cinco_cifras_tercia++;}
    else if((numb[2] == numb[3] || numb[2] == numb[4] || numb[3] == numb[4])){ cinco_cifras_1p++}
    else{ cinco_cifras_td++}
  }




  //pormientras
  chi_calculado=0;
  chi_tabla = 1
  if(chi_calculado < chi_tabla) return alert("No se puede rechazar que hay independencia");
  alert("Se rechaza  que hay independencia");

}



function encontrar_intervalo(numb, subintervalos){

      for(var j=0;j<subintervalos.length;j++){
        if(numb >= subintervalos[j].inicio && numb<= subintervalos[j].fin){
           subintervalos[j].frecuencia_observada+=1;
           return;
        }
      }
      return;

}

function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}









