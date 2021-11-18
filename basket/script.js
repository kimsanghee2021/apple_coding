$(document).ready(function(){
    document.querySelectorAll('input[name=buy]:checked').forEach(function(){
       $(this).remove();
    });
});