$(document).ready(function() {
    $('h2').css('underline');
    $('ul').addClass('border');
    $('table').addClass('border');

    $('tr:odd').addClass('odd');
    $('tr:even').addClass('even');
    $('tr').append('<p>khello</p>');
    $('#btn').click(function(){
        $('tr').slideDown();
        $('tr').slideUp(1000);


    })
});