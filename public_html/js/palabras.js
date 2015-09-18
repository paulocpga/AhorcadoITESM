var palabras = new Array();
var palabras2 = new Array();
var matriz;
var max;
var palabraVerifica = new Array();
var letraID = new Array();
var palabra="";
var aux=0;
var gana=0;
var blanca=0;
var juega=0;

function mostrar(){
    var cantidad = parseInt(document.getElementById("numero").value);
    var f1="<form>";
    var f2="</form>";
    var form="";
    var textHTML = "";
    var buttonHTML = "";
    
    for(i=0; i < cantidad; i++){
        textHTML += "<input type='text' id='palabra"+i+"' required><br/><br/>";
    }
    //textHTML+="<input type='submit' onclick='crearMatriz()' value='Crear'>";
    //form=f1+textHTML+f2;
    document.getElementById("mostrar").innerHTML = textHTML;
    buttonHTML+="<input type='submit' onclick='crearMatriz()' value='Crear'>";
    document.getElementById("generar").innerHTML = buttonHTML;
                
                
}

function crearMatriz() {
    //if(validarTituloyDescripcion()===1){
    //if(juega===1){
        var k = 0;
        var i = 0;
        //obtener número de palabras
        var n = $("#numero").val();

        //leer palabras
        for(var con=0;con<n;con++){
            var idPal='#palabra'+con;
            palabras[con]=$(idPal).val();
            if(k<palabras[con].length){
                k=palabras[con].length;
                i=con;
            }     
        } 

        //determinar tamaño de la matriz
        max=2*palabras[i].length;

        //Crea arreglo 2D
        matriz=new Array(max);
        for(c=0;c<max;c++){
            matriz[c]=new Array(max);
        }

        //Llenar matriz con 0
        for(var i=0; i<max;i++){
            for(var j=0; j<max; j++){
                matriz[i][j] = 0;
            }
        }

        //separar palabra en caracteres
        for(var j=0; j<palabras.length;j++){    
            var palabra = $.trim(palabras[j]); 
            acomodarPalabra(palabra);
        }   

        $("#container1").hide();
        $("#container2").show();
        palabras2=palabras;
        llenarLetrasAleatorias();
        mostrarTitulo();
        mostrarLista();
        mostrarTabla();
    //}
}

function mostrarTitulo(){
    var t=$("#titulo").val();;
    var tituloHTML="";
    tituloHTML+="<h1>"+t+"</h1><br>";
    document.getElementById("sopaT").innerHTML = tituloHTML;
    
    var d=$("#descripcion").val();;
    var descripcionHTML="";
    descripcionHTML+="<label>"+d+"</label><br><br>";
    document.getElementById("sopaD").innerHTML = descripcionHTML;
}

function mostrarLista(){
     var listaHTML="";
     for(var i=0;i<palabras.length;i++){
         listaHTML+="<p>"+palabras[i]+"</p>";
     }
     document.getElementById("lista").innerHTML = listaHTML;
}

function acomodarPalabra(palabra){
    var palabrachars = new Array();
    //var flag = 0;
    var tam = 0;    
    
    //Parte la palabra
    for(var i=0; i<palabra.length; i++){
        palabrachars[i] = palabra.charAt(i).toUpperCase();
    }
   
    var flag = 0;
    
    do{
        var x = Math.floor(Math.random() * max-1) + 1;  
        var y = Math.floor(Math.random() * max-1) + 1;
        
        var orientacion = Math.floor(Math.random() * 4) + 1;
        //var orientacion = 6;
        
        switch(orientacion){
            //hacia abajo
            case 1: 
                if(max - x >= palabra.length){
                    for(var i = 0; i < palabra.length; i++){
                        if(matriz[x+i][y]===0){
                            tam += 1;
                        }
                    }
                    if(tam === palabra.length){
                        for(var i = 0; i < palabra.length; i++){
                            if(matriz[x+i][y]===0){
                                matriz[x+i][y] = palabrachars[i];
                            }
                        }
                        flag = 1;
                    }            
                }
                tam = 0;
                break;
            //hacia la derecha
            case 2:
                if(max - y >= palabra.length){
                    for(var i = 0; i < palabra.length; i++){
                        if(matriz[x][y+i]===0){
                            tam += 1;
                        }
                    }
                    if(tam === palabra.length){
                        for(var i = 0; i < palabra.length; i++){
                            if(matriz[x][y+i]===0){
                                matriz[x][y+i] = palabrachars[i];
                            }
                        }
                        flag = 1;
                    }            
                }
                tam = 0;                
                break;
            //diagonal hacia abajo y derecha
            case 3:
                if((max - x >= palabra.length)&&(max - y >= palabra.length)){
                    for(var i = 0; i < palabra.length; i++){
                        if(matriz[x+i][y+i]===0){
                            tam += 1;
                        }
                    }
                    if(tam === palabra.length){
                        for(var i = 0; i < palabra.length; i++){
                            if(matriz[x+i][y+i]===0){
                                matriz[x+i][y+i] = palabrachars[i];
                            }
                        }
                        flag = 1;
                    }            
                }
                tam = 0;
                break;
            //hacia arriba
            case 4: 
                if(max - x >= palabra.length){
                    for(var i = 0; i < palabra.length; i++){
                        if(matriz[x+i][y]===0){
                            tam += 1;
                        }
                    }
                    if(tam === palabra.length){
                        for(var i = 0; i < palabra.length; i++){
                            if(matriz[x+i][y]===0){
                                matriz[x+i][y] = palabrachars[(palabra.length-1)-i];
                            }
                        }
                        flag = 1;
                    }            
                }
                tam = 0;
                break;
            //hacia izquierda
            case 5:
                if(max - y >= palabra.length){
                    for(var i = 0; i < palabra.length; i++){
                        if(matriz[x][y+i]===0){
                            tam += 1;
                        }
                    }
                    if(tam === palabra.length){
                        for(var i = 0; i < palabra.length; i++){
                            if(matriz[x][y+i]===0){
                                matriz[x][y+i] = palabrachars[(palabra.length-1)-i];
                            }
                        }
                        flag = 1;
                    }            
                }
                tam = 0;                
                break;
            //diagonal hacia arriba y derecha
            case 6:
                if((max - x >= palabra.length)&&(max - y >= palabra.length)){
                    for(var i = 0; i < palabra.length; i++){
                        if(matriz[x-i][y+i]===0){
                            tam += 1;
                        }
                    }
                    if(tam === palabra.length){
                        for(var i = 0; i < palabra.length; i++){
                            if(matriz[x-i][y+i]===0){
                                matriz[x-i][y+i] = palabrachars[i];
                            }
                        }
                        flag = 1;
                    }            
                }
                tam = 0;
                break;
        }
    }while(flag === 0);
}

function mostrarTabla(){
    //Create a HTML Table element.
    var table = $("<table align='center'> </table>");

    //Add the data rows.
    for (var i = 0; i < max; i++) {
        row = $(table[0].insertRow(-1));
        for (var j = 0; j < max; j++) {
            var cell = $("<td><input id='"+(i+1)+""+j+"' type='submit' class='btn' value='"+matriz[i][j]+"' onClick='seleccionarLetra("+(i+1)+""+j+")'></input></td>");
            row.append(cell);
        }
    }
    
    var dvTable = $("#table");
    dvTable.html("");
    dvTable.append(table);
}

function llenarLetrasAleatorias(){
    var abecedario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
    
    for(var i = 0; i < max; i++){
        for(var j = 0; j < max; j++){
            if(matriz[i][j] === 0){
                matriz[i][j] = abecedario.charAt(Math.floor(Math.random() * 25) + 1);
            }
        }
    }
}

function seleccionarLetra(id){
    var boton = document.getElementById(id);
    
    //if(letraID.length===0){
        boton.style.backgroundColor="#FF0000";
        letraID[aux]=id;
        palabraVerifica[aux]=boton.value;
        palabra+=palabraVerifica[aux];
        letraID.splice(id,1);
        aux++;
    /*}else{
        for(var i=0; i<letraID.length; i++){
            if(letraID[i]===id){
                boton.style.backgroundColor="LightBlue";
                aux--;
                letraID.splice(aux,1);
                palabraVerifica.splice(aux,1);
                palabra.substring(0,aux);
            }else{
                boton.style.backgroundColor="#FF0000";
                letraID[aux]=id;
                palabraVerifica[aux]=boton.value;
                palabra+=palabraVerifica[aux];
                letraID.splice(id,1);
                aux++;
            }
        }
    }*/    
}

function verifica(){
    var encontro;
    var boton;
    for(var j=0; j<palabras2.length; j++){
        if(palabras2[j].toUpperCase()===palabra){
            encontro=1;
            palabras2.splice(j,1);
        }
    }
    if(encontro===1){
        for(var k=0; k<palabra.length; k++){
            boton=document.getElementById(letraID[k]);
            boton.style.backgroundColor="#FF0000";
        }
        alert("Encontraste la palabra: "+palabra);
    }
    else{
        alert("La palabra: "+palabra+" no está en la lista");
        for(var k=0; k<palabra.length; k++){
            boton=document.getElementById(letraID[k]);
            boton.style.backgroundColor="LightBlue";
        }
    }
    
    if(palabras2.length===0)
        alert("Ganaste");
    
    aux=0;
    palabra="";
    encontro=0;
    blanca=0;
    for(var i=0; i<palabraVerifica.length; i++)
        palabraVerifica.splice(i,1);
}

function deselecciona(id){
    for(var i=0; i<letraID.length; i++){
        if(letraID[i]===id){
            blanca=1;
            letraID.splice(id,1);
        }else{
            return 0;
            blanca=0;
        }
    }    
}

function validarTituloyDescripcion(){
    var titulo = document.getElementById("titulo");
    var descripcion = document.getElementById("descripcion");
    var mostrar = document.getElementById("mostrar");
    
    if(titulo!==""&&descripcion!==""&&mostrar!==""){
        juega=1;
    }else{
        alert("Llena todos los campos por favor");
        juega=0;
    }
}