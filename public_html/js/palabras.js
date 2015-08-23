 var palabras=new Array();
 var matriz;
function crearMatriz() {
    var k=0;
    var i =0;
   var num =document.getElementById('numero');
   var n = num.value;
  
   
   //alert(n);
   for(con=0;con<n;con++){
       palabras[con]=prompt("Escriba la palabra","");
       //alert(palabras[con].length);
       if(k<palabras[con].length){
           k=palabras[con].length;
           i=con;
       }
     
   }
     alert("palabra más larga "+palabras[i]);
     
     var max=2*palabras[i].length;
     
     alert(max);
     matriz=new Array(max);
     
     for(c=0;c<max;c++){
         matriz[c]=new Array(max);
     }
     
}
