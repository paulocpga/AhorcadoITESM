//*
$(document).ready(function(){
             var cantidad = $("#numero").val();
    
    for(var con=0;con<cantidad;con++){
        var idPal='#palabra'+con;
       // palabras[con]=$(idPal).val();
        
            var form=$("#miLista");
            var pal=$(idPal);
            pal.blur(vLetras);
            form.submit(function(){
                if(vLetras()){
                    return true;
                }else{
                    return false;
                }
            });
            
            function vLetras(){
               var letters = /^[A-Za-z]+$/;
               var a=pal.val();
               if(letters.test(a)){
                    pal.removeClass("error");
                   return true;
               }else{
                   pal.addClass("error");
                   
                  // pal.addClass("error");
                   
               }
            }
        }
        });
    

//*/

/*
$('.letras').on("keydown",function(){ 
   var regexp = /[^a-zA-Z]/g;
  if($(this).val().match(regexp)){
    $(this).val( $(this).val().replace(regexp,'') );
  }else{
      $(this).addClass("error");
  }
  }
);//*/