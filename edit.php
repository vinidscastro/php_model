<?php 

     require_once ('conexao.php');
     $objDb = new db();
     $link = $objDb->conecta_mysql();
     
    
     $id_produto = $_POST['form_idProduto'];
     $descricao = $_POST['form_ds_produto'];
     $npOriginal = $_POST['form_npOriginal'];
     $npPromo= $_POST['form_npPromo'];

     $query = "UPDATE `form_prod_troca` SET `DS_PRODUTO`='$descricao',`NP_ORIGINAL`= $npOriginal,`NP_PROMO`= $npPromo WHERE ID = $id_produto";
 
     
     mysqli_query($link, $query);


?>