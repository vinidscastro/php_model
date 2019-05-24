$(document).ready(function(){
    
    function getProdutos(){
        $.ajax({
            url:'get.php',
            success: function(data){
                $('.listaProdutos').html(data);
            }
        });
    }

    getProdutos();

	
})