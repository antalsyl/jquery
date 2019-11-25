 $('#subscribe').click(function(){
        
        if ($('#subscribe').is(':checked')){
          
          $('#emailField').css("display", "block");
        }
        else{
          $('#emailField').css("display", "none");
        }
       
    });