
$(function() {
    var $input = $('.quantity input[type="text"]');
    
    $('.btn-down, .btn-up').click(function(e) {
        var val = parseInt($input.val());
        var dir = $(this).hasClass('btn-down')? -1 : 1; 

        if(dir === -1 && val === 0) {
            $input.val(0);
        } else {
            $input.val(val + dir);
        }

        e.preventDefault();
        e.stopPropagation();
    });
})();