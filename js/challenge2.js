
      $('#useBilling').click(function(){
      if ($('#useBilling').is(':checked')){
        console.log("works")
        $('#home').val($("#billing").val())
        $('#home').prop('disabled', true)
      }
      else{
        $("#home").val('')
        $('#home').prop('disabled', false)
      }
    })

   