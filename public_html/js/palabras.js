var palabras = new Array();
var matriz;
var palabrachars = new Array();
var max;
var palabra;

function crearMatriz() {
    var k = 0;
    var i = 0;
    //obtener número de palabras
    var n = $("#numero").val();
    
    //leer palabras
    for(var con=0;con<n;con++){
        palabras[con]=prompt("Escriba la palabra","");
        //alert(palabras[con].length);
        if(k<palabras[con].length){
            k=palabras[con].length;
            i=con;
        }     
    } 
    
    //alert("palabra más larga "+palabras[i]);
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
        palabra = $.trim(palabras[j]); 
        
        //Parte la palabra
        for(var i=0; i<palabra.length; i++){
            palabrachars[i] = palabra.charAt(i).toUpperCase();
        }
        
        /*
        for(var i=0; i<palabra.length; i++){
            alert(palabrachars[i]);
        }*/
        
        acomodarPalabra();
        //var x = Math.floor(Math.random() * max-1) + 1;  
        //var y = Math.floor(Math.random() * max-1) + 1;   
        /*var x = 3;
        var y = 2;
        
        //var id = Math.floor(Math.random() * 8) + 1;
        id = 5;    
        
        //caso 1: x-=1;
                
        switch(id){
            case 1: //x-=1 hacia arriba;
                var flag=0;
              
                if(max - x >=palabra.length){
                    for(var i=0; i<palabra.length; i++){
                        var fila = x;
                        if(matriz[fila][y]===0){
                            flag+=1;  
                            alert("holaa"+fila);
                        }
                        fila--;
                    }
                }
                
                alert("flag"+flag);
                //var k = 0;
                
                if(flag===palabra.length){
                    /*for(var fila=x; fila<=palabra.length; fila--){
                        letra = palabra.charAt(k);  
                        matriz[fila][y] = letra;
                        k++;
                    } */
                    /*for (var k=0;k<palabra.length;k++){
                        letra = palabra.charAt(k);  
                        matriz[k][y] = letra;
                    }
                }else{
                    alert("no cabe la palabra");
                }
                break;
            case 2:
                x-=1;
                y+=1;
                break;
            case 3:
                y+=1;
                break;
            case 4:
                x+=1;
                y+=1;
                break;
            case 5:
                
                break;
            case 6:
                x+=1;
                y-=1;
                break;
            case 7:
                y-=1;
                break;
            case 8:
                x-=1;
                y-=1;
                break;    
        }*/
    }   
    
    $("#container1").hide();
    $("#container2").show();

    mostrarTabla();
}

function acomodarPalabra(){
    var flag = 0;
    for(var x = 0; x < max; x++){ //posición x
        for(var y = 0; y < max; y++){ //posición y
            for(var k = 1; k <= 8; k++){ //8 posibles orientaciones de la palabra
                //caso x+=1;                    
                //Verifica que la palabra quepa y si hay espacio vacios,
                //if true, dibuja la palabra hacia abajo, if false, nada
                if(flag === 0){
                    if(max - x >= palabra.length){
                        for(var i = 0; i < palabra.length; i++){
                            if(matriz[x+i][y]===0){
                                matriz[x+i][y] = palabrachars[i];
                            }
                        }
                        flag = 1;
                    }else{
                        
                    }
                }    
            }
        }        
    }

}

function mostrarTabla(){
    //Create a HTML Table element.
    var table = $("<table />");
    //table[0].border = "1";

    //Add the data rows.
    for (var i = 0; i < max; i++) {
        row = $(table[0].insertRow(-1));
        for (var j = 0; j < max; j++) {
            var cell = $("<td />");
            cell.html(matriz[i][j]);
            row.append(cell);
        }
    }

    var dvTable = $("#table");
    dvTable.html("");
    dvTable.append(table);
}