<?php
    require_once ('conexao.php');
    
    $id_produto = $_POST['id_produto'];
    $query = 'SELECT DS_PRODUTO, NP_ORIGINAL, NP_PROMO from form_prod_troca WHERE id = $id_produto';
    $objDb = new db();

    $link = $objDb->conecta_mysql();
    
    $response = mysqli_query($link, $query);

    if($response){
		while($produto = mysqli_fetch_array($response, MYSQLI_ASSOC)){
			
			// $produtos[] = array(
			// 	'descricao' => $produto['DS_PRODUTO'],
			// 	'npOriginal' => $produto['NP_ORIGINAL'],
			// 	'npPromo' => $produto['NP_PROMO']
			// );
            echo json_encode( $produto);
		}
	}
?>