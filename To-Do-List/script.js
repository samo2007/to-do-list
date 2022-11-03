$(document).ready(function() {
    var $list , $newform ;

    $list = $("ul");
    $newform = $("form");

    $newform.on("submit" , function(e) {
        e.preventDefault();
        var $text = $('input:text').val();
        $list.append('<li>' + $text + '</li>');
        $('input:text').val('');
    })

    $list.on('click' , "li" , function() {
        var $li =  $(this);
        $li.remove();
    })
})