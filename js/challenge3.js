$('form').submit(function(onsubmit){
    if ($('input[name=fruit]').is(':checked')){
      console.log('a fruit is checked')
      return true
    }
    else{
      alert('You must pick a fruit!')
      return false

    }


  })