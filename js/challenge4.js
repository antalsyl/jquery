 var validInput = true;
        $('form').submit(function(onsubmit){
            if ($('#fullname').val().length==0){
                validInput = false;
                ($("#nameerrormsg").css('display', 'block'));
                event.preventDefault();
                console.log('name empty')
            }
            else{
                ($("#nameerrormsg").css('display','none'));
                validInput = true;
            }
        })
        $('form').submit(function(onsubmit){
            if ($('#streetaddr').val().length==0){
                validInput = false;
                ($("#addrerrormsg").css('display', 'block'));
                event.preventDefault();
                console.log('addr empty')
            }
            else{
                ($("#addrerrormsg").css('display', 'none'));
                validInput = true;
            }
        })
        