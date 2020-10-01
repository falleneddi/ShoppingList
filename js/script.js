$('ul').on('click','li', function() {
    $(this).toggleClass('complete');
})
$('ul').on('click', 'span', function(e) {
    e.stopPropagation();
    $(this).parent().fadeOut(function() {
        $(this).remove();
    });
    })
$('input').keypress(function(e) {
    if( event.which === 13 ) {       
        var iText = $(this).val();
        $(this).val('');
        $('ul').append('<li><span><i class="fas fa-trash-alt"></i></span>' + iText +'</li>');
    }
    
})
$('h2 span').click(function(){
    $('input').fadeToggle();
})